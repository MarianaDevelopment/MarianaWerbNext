import React from "react";
import { useRouter } from "next/router";


const UserGuildCard = ({ guilds }) => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {guilds?.map((guild) => (
        <div
          key={guild.id}
          className=" flex flex-col border-[2px] border-white rounded-[10px] w-[250px] h-[350px] sm:w-[350px] sm:h-[300px] hover:shadow-lg hover:border-[#FE01EE] transition duration-500 ease-in-out"
        >
          <div>
            <div className="flex flex-row justify-between items-center px-10">
              <div>
                <img
                  src={guild.icon}
                  alt="icon"
                  className="w-[75px] h-[75px] object-contain rounded-[20%] mt-10"
                />
              </div>
              <div className="flex start-end">
                {!guild.bot && guild.isAdmin && (
                  <button
                    className="bg-white text-primary font-poppins font-medium text-[12px] md:text-[16px] rounded-[10px] py-1 px-8 mt-10 border-2  cursor-pointer hover:bg-primary hover:text-white transition-all duration-300"
                    onClick={() => window.open(guild.invite, "_blank")}
                  >
                    Invite
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-left items-start px-10 py-5">
            <div className="justify-between items-center">
              <p className="font-poppins font-bold text-[18px] text-white">
                {guild.name}
              </p>
              <p className="font-poppins font-medium text-[12px] text-dimWhite text-left sm:text-left">
                Description:{" "}
                {guild.description ? guild.description : "No description"}
              </p>
              <p className="font-poppins font-medium text-[12px] text-dimWhite text-left sm:text-left">
                GuildId: {guild.id}
              </p>
              <p className="font-poppins font-medium text-[12px] text-dimWhite text-left sm:text-left">
                Members: {guild.memberCount}
              </p>
              {/*si el bot esta en el servidor se muestra el boton de configuracion*/}
              {guild.bot && guild.isAdmin && (
                <button
                  className="bg-white text-primary font-poppins font-medium text-[12px] md:text-[16px] rounded-[10px] py-1 px-8  border-2  cursor-pointer hover:bg-primary hover:text-white transition-all duration-300"
                  onClick={() => {
                    const guildId = guild.id;
                    router.push(`/dashboard/${guildId}`);
                  }}
                >
                  Config
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserGuildCard;
