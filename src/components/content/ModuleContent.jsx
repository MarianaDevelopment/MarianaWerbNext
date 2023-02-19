import React, { useState, useEffect, useContext } from "react";
import { getGuildsUser, getChannelsByGuild } from "@/request/guildsRequest";
import { useRouter } from "next/router";
import UserContext from "@/components/context/userContext";
import Image from "next/image";
import ModalWelcome from "@/partial/module/modalWelcome";

const ModuleContent = ({ guildId }) => {
  const { user } = useContext(UserContext);
  const [guildData, setGuildData] = useState(null);
  const [channels, setChannels] = useState(null);
  const [checked, setChecked] = useState(false);
  const [modalOption, setModalOption] = useState(false);

  const Router = useRouter();

  useEffect(() => {
    if (!user) {
      Router.push("/");
    } else {
      const guildsUser = async () => {
        const guilds = await getGuildsUser();
        if (guilds.status === 200) {
          const guild = guilds.data.find((guild) => guild.id === guildId);
          setGuildData(guild);
        }
      };
      guildsUser();
    }
  }, [user, guildId]);

  useEffect(() => {
    if (guildData) {
      const channelsGuild = async () => {
        const channels = await getChannelsByGuild(guildId, user.userId);
        if (channels.status === 200) {
          setChannels(channels.data);
        }
      };
      channelsGuild();
    }
  }, [guildData, guildId, user]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={guildData?.icon}
            width={120}
            height={120}
            className="rounded-full border-4 border-white"
          />
          <h1 className="text-[18px] font-bold text-white md:text-[38px]">
            {guildData?.name}
          </h1>
          <p className="text-[14px] font-bold text-gray-400 md:text-[18px]">
            {guildData?.description || "No description"}
          </p>
          <button className="bg-[#7289DA] text-white font-bold py-2 px-7 rounded-full mt-4">
            {guildData?.memberCount} members
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-[18px] font-bold text-white md:text-[38px]">
          Modules
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        {/*Un marco con un boton para cada modulo, el primero es Welcome*/}
        <div className="flex flex-col md:flex-row justify-between items-center w-[400px] h-[200px] bg-[#2C2F33] rounded-2xl p-4   bg-[#2C2F33] rounded-2xl p-4">
          <div className="">
            <h1 className="text-[18px] font-bold text-white md:text-[28px]">
              Welcome Module
            </h1>
          </div>
          {/*toggle button checked or not*/}
          <div className="flex flex-col justify-center items-center md:flex-row">
            <button
              className="bg-[#7289DA] text-white font-bold py-2 px-7 rounded-full hover:bg-[#5E6CA8] my-4 md:my-0 ml-4"
              onClick={() => setModalOption(true)}
            >
              Configure
            </button>
            {modalOption && (
              <div className="h-full w-full fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50">
                <ModalWelcome
                  modalOption={modalOption}
                  setModalOption={setModalOption}
                  channels={channels}
                  guildId={guildId}
                  user={user}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleContent;
