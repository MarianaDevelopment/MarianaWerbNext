import React, { useState, useEffect, useContext } from "react";
import {
  getGuildById,
  updateWelcome,
  getGuildLeaveById,
  updateLeave,
} from "@/request/guildsRequest";


export default function ModalWelcome({
  modalOption,
  setModalOption,
  channels,
  guildId,
  user,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionLeave, setSelectedOptionLeave] = useState(null);
  const [modalSelectChannel, setModalSelectChannel] = useState(false);
  const [modalSelectChannelLeave, setModalSelectChannelLeave] = useState(false);
  const [WelcomeConfig, setWelcomeConfig] = useState({
    channelId: "No channel selected",
    guildId: "No guild selected",
    userId: "No user selected",
    message: "No message selected",
  });
  const [leaveConfig, setLeaveConfig] = useState({
    channelId: "No channel selected",
    guildId: "No guild selected",
    userId: "No user selected",
    message: "No message selected",
  });
  console.log(leaveConfig)
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setModalSelectChannel(false);
  };

  const messageChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => { 
    if(user) {
      const getWelcomeConfig = async () => {
        const response = await getGuildById(guildId, user.userId);
        if (response.status === 200) {
          setWelcomeConfig(response.data);
        }
      };
      getWelcomeConfig();
    }
  }, [user, guildId]);

  const handleSave = async () => {
    const data = {
      guildId: guildId,
      channelId: selectedOption.id,
      userId: user.userId,
      namewelcome: selectedOption.name,
    };
    const response = await updateWelcome(guildId, user.userId, data);
  
    if (response.status === 200) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    }
  };


  const channelBefore = channels?.find(
    (channel) => channel.id === WelcomeConfig.channelId
  );

  useEffect(() => {
    if (user) {
      const getLeaveConfig = async () => {
        const response = await getGuildLeaveById(guildId, user.userId);
        if (response.status === 200) {
          setLeaveConfig(response.data);
        }
      };
      getLeaveConfig();
    }
  }, [user, guildId]);

  const channelBeforeLeave = channels?.find(
    (channel) => channel.id === leaveConfig.leavechannelId
  );

  const handleSelectOptionLeave = (option) => {
    setSelectedOptionLeave(option);
    setModalSelectChannelLeave(false);
  };

  const handleSaveLeave = async () => {
    const data = {
      guildId: guildId,
      channelId: selectedOption.id,
      userId: user.userId,
      message: message,
    };
    const response = await updateLeave(guildId, user.userId, data);
    if (response.status === 200) {
      setSuccess(true);
    }
  };

  return (
    <div>
      {modalOption && (
        <div className="">
          <div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Welcome configuration
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="staticModal"
                onClick={() => setModalOption(false)}
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col justify-center items-center py-5 md:flex-row">
              <div className="text-sm text-slate-500 mb-2 m-10 px-10 pr-10">
                <p className="text-gray-700">Select a welcome channel</p>
                <p className="text-gray-500">
                  Channel already selected before: {channelBefore?.name}
                </p>
              </div>
              <div className="text-sm text-slate-500 mb-2 m-10 px-10 pr-10">
                <div className="relative">
                  <button
                    onClick={() => setModalSelectChannel(!modalSelectChannel)}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-left text-slate-800 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-1 focus:border-blueAzure"
                  >
                    <span className="flex items-center text-gray-700">
                      <span className="ml-3">
                        {selectedOption ? selectedOption.name : "Seleccionar"}
                      </span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-arrow-down"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="0.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="18" y1="13" x2="12" y2="19" />
                      <line x1="6" y1="13" x2="12" y2="19" />
                    </svg>
                  </button>
                  <div className="overflow-auto">
                  {modalSelectChannel && (
                    <div className="overflow-auto">
                      {channels.map((option) => (
                        <div
                          key={option.id}
                          onClick={() => handleSelectOption(option)}
                          className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:blue-500 hover:bg-blueAzure"
                        >
                          {option.name}
                        </div>
                      ))}
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center py-5 md:flex-row">
              <div className="text-sm text-slate-500 mb-2 m-10 px-10 pr-10">
                <p className="text-gray-700">Select a leave channel</p>
                <p className="text-gray-500">
                  Channel already selected before: {channelBeforeLeave?.name}
                </p>
              </div>
              <div className="text-sm text-slate-500 mb-2 m-10 px-10 pr-10">
                <div className="relative">
                  <button
                    onClick={() =>
                      setModalSelectChannelLeave(!modalSelectChannelLeave)
                    }
                    className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-left text-slate-800 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-1 focus:border-blueAzure"
                  >
                    <span className="flex items-center text-gray-700">
                      <span className="ml-3">
                        {selectedOptionLeave
                          ? selectedOptionLeave.name
                          : "Seleccionar"}
                      </span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-arrow-down"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="0.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="18" y1="13" x2="12" y2="19" />
                      <line x1="6" y1="13" x2="12" y2="19" />
                    </svg>
                  </button>
                  {modalSelectChannelLeave && (
                    <div className="overflow-y-auto absolute top-10 left-0 w-full bg-white rounded-md shadow-lg max-h-select">
                      {channels.map((option) => (
                        <div
                          key={option.id}
                          onClick={() => handleSelectOptionLeave(option)}
                          className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:blue-500 hover:bg-blueAzure"
                        >
                          {option.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center py-5 text-center ">
              <div className="text-sm text-slate-500 mb-2 m-10 px-10 pr-10 h-[100px]">
                <p className="text-gray-700">Select a message</p>
                <p className="text-gray-500">
                  Message already selected before:{" "}
                  {WelcomeConfig?.message.length > 15
                    ? WelcomeConfig?.message.slice(0, 25) + "..."
                    : WelcomeConfig?.message}
                </p>
              </div>
              <div className="text-sm text-slate-500 mb-2 m-10 px-10 pr-10 ">
                <input
                  type="textarea"
                  className="w-full h-[110px] px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blueAzure"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => {
                    e.preventDefault();
                    messageChange(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center py-5 md:flex-row">
              <button
                onClick={handleSave}
                className=" flex items-center justify-between px-4 py-2 text-sm font-medium text-left text-slate-800 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-1 focus:border-blueAzure"
              >
                <span className="flex items-center text-gray-700">
                  <span className="ml-3">Save</span>
                </span>
              </button>

              {success && (
                <div className="flex items-center justify-between px-4 py-2 text-sm font-medium text-left text-slate-800 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-1 focus:border-blueAzure">
                  <span className="flex items-center text-gray-700">
                    <span className="ml-3 text-green-500">Saved</span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-check"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="0.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
