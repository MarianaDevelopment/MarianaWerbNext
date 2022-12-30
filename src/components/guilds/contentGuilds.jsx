import React,{ useState } from "react";
import ContentCards from "../cards/guildsCards";


const contentGuilds = ({guilds}) => {
  //eslint-disable-next-line
  const [guildsFilter, setGuildsFilter] = useState([]);
  //eslint-disable-next-line
  const [guildsFilterName, setGuildsFilterName] = useState("");
  //eslint-disable-next-line
  const [guildsCurrentPage, setGuildsCurrentPage] = useState(1);
  //eslint-disable-next-line
  const [guildsPerPage, setGuildsPerPage] = useState(6);

  const indexOfLastGuild = guildsCurrentPage * guildsPerPage;
  const indexOfFirstGuild = indexOfLastGuild - guildsPerPage;
  const currentGuilds = guilds.slice(indexOfFirstGuild, indexOfLastGuild);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(guilds.length / guildsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setGuildsCurrentPage(pageNumber);

  const filterGuilds = (e) => {
    setGuildsFilterName(e.target.value);
    setGuildsFilter(
      guilds.filter((guild) => {
        return guild.name.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mt-[50px]">
        <p className="font-poppins font-bold text-[36px] text-white text-left sm:text-left">
          Guilds List
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-[200px] h-[50px] rounded-[4px] border-[10px] border-white text-[16px] text-black font-poppins font-medium mt-[50px] md:w-[400px] md:h-[50px]"
          onChange={filterGuilds}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-[50px]">
        {guildsFilterName.length > 0 ? (
          <div>
            <ContentCards guilds={guildsFilter} />
          </div>
        ) : (
          <div>
            <ContentCards guilds={currentGuilds} />
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center items-center mt-[50px]">
        <div className="flex flex-row justify-center items-center">
          {/* los botones deben ser back y next, si llega a la ultima pagina no debe mostrar el boton next */}

          <button
            className="w-[50px] h-[50px]  border-[2px] border-white text-[16px] text-white font-poppins font-medium mr-[10px] rounded-[10px]"
            onClick={() => paginate(guildsCurrentPage - 1)}
            disabled={guildsCurrentPage === 1}
          >
            Back
          </button>
          <button
            className="w-[50px] h-[50px]  border-[2px] border-white text-[16px] text-white font-poppins font-medium ml-[10px] rounded-[10px]"
            onClick={() => paginate(guildsCurrentPage + 1)}
            disabled={guildsCurrentPage === pageNumbers.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};



export default contentGuilds