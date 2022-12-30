import React, {useEffect, useState} from "react";
import { marianare } from "@/assets/index";
import ContentGuilds from "./../guilds/contentGuilds";
import Image from "next/image";
import { getGuilds } from "@/request/guildsRequest";
import { getUserData } from "@/request/authRequest";
const HomeContent = () => {
  const [guilds, setGuilds] = useState([]);
  const [user, setUser] = useState([]);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const data = await getUserData();
      if (data.status === 200) {
        setUser(data.data);
        setHide(true);
      } 
      if (data.status === 401) {
        setUser(null);
      }
    };
    getData();
  }, []);

 

  useEffect(() => {
    const getGuildsData = async () => {
      const data = await getGuilds();
      if(data.status === 200) {
        setGuilds(data.data);
      }
    };
    getGuildsData();
  }, []);
 
  const changeText = (guilds) => {
    if (guilds.length < 100) {
      return "Hundreds";
    } else if (guilds.length < 1000) {
      return "Thousands";
    } else if (guilds.length < 10000) {
      return "Tens of Thousands";
    } else if (guilds.length < 100000) {
      return "Hundreds of Thousands";
    } else if (guilds.length < 1000000) {
      return "Millions";
    } else if (guilds.length < 10000000) {
      return "Tens of Millions";
    }
  };
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-20 py-20">
        <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left w-full sm:w-1/2">
          <div>
            <h1 className="font-poppins font-bold text-[32px] text-white text-left sm:text-left">
              MarianaRE is multipurpose <br />
              Its easy to use <br /> Automatically
            </h1>
            <p className="font-poppins font-medium text-[16px] text-dimWhite text-left sm:text-left">
              A fully customizable server moderation Discord bot for <br /> your
              Discord server that features a simple and intuitive <br /> web
              dashboard. Server management just got a whole lot <br /> easier.
            </p>
            <div className="flex justify-center sm:justify-start items-center py-5">
              <p className="font-poppins font-medium text-[16px] text-dimWhite text-left sm:text-left">
                MarianaRE is used on over{" "}
                <a className="text-primary text-[16px] font-medium text-blue-500 hover:text-blue-600 text-bold">
                  {guilds.length + " " + changeText(guilds)}{" "}
                </a>{" "}
                servers, we invite you <br /> try it out and hope you enjoy!{" "}
                <br />
              </p>
            </div>
            <div className="flex justify-center sm:justify-start items-center md:flex-row flex-col">
              <button
                className="bg-white text-primary font-poppins font-medium text-[12px] md:text-[16px] rounded-[10px] py-3 px-10 mt-10 border-2 mr-10 cursor-pointer hover:bg-primary hover:text-white transition-all duration-300"
                onClick={() => {
                  window.open(
                    "https://discordapp.com/oauth2/authorize?client_id=967854589380554773&permissions=8&scope=bot%20applications.commands"
                  );
                }}
              >
                Invite MarianaRE
              </button>
              
              <button
                className={`bg-transparent text-white font-poppins font-medium text-[12px] md:text-[16px] rounded-[10px] py-3 px-10 mt-10 mr-10 border-2 
                cursor-pointer hover:bg-white hover:text-primary transition-all duration-300 ${
                  hide ? "hidden" : ""
                }`}

                onClick={() => {
                 window.location.href = "https://api.mariana-re.com/api/login";
                }}
              >
                Login with Discord
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center py-10 sm:py-0 w-full sm:w-1/2">
          <Image
            src={marianare}
            alt="mariana"
            className="w-[100px] h-[100px] sm:w-[400px] sm:h-[400px]"
          />
        </div>
      </div>
      <ContentGuilds guilds={guilds} />
    </div>
  );
};

export default HomeContent;