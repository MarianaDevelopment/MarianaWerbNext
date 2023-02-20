import React, { useState, useEffect, useContext } from "react";
import { configTicket } from "@/request/guildsRequest";
import ModalBlank from "@/components/ModalBlank";
import DropdownByObj from "@/components/DropdownByObj";

export default function ModalTicket({
  modalOption,
  setModalOption,
  channels,
  guildId,
  user,
  categories,
  choices,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [modalSelectChannel, setModalSelectChannel] = useState(false);
  const [selectedOptionColor, setSelectedOptionColor] = useState(null);
  const [modalSelectColor, setModalSelectColor] = useState(false);
  const [selectedOptionCategory, setSelectedOptionCategory] = useState(null);
  const [categoryModal, setCategoryModal] = useState(false);
  const [data, setData] = useState({
    guildId: "",
    categoryId: "",
    channelId: "",
    title: "",
    description: "",
    color: "",
    button: "",
    messageOpen: "",
    messageClose: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const dataConfig = {
    guildId: guildId,
    categoryId: selectedOptionCategory?.id,
    channelId: selectedOption?.id,
    title: data.title,
    description: data.description,
    color: selectedOptionColor?.value,
    button: data.button,
    messageOpen: data.messageOpen,
    messageClose: data.messageClose,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = await configTicket(dataConfig);
    if (config.status === 200) {
      setSuccess(true);
      setMessage("configuration saved successfully");
      setTimeout(() => {
        setSuccess(false);
        setModalOption(false);
      }, 2000);
    } else {
      setError(true);
      setMessage("verify the data entered");
      setTimeout(() => {
        setError(false);
        setError(false);
      }, 2000);
    }
  };

  return (
    <>
      <ModalBlank
        id="ticketModal"
        modalOpen={modalOption}
        setModalOpen={setModalOption}
        title="Ticket Configuration"
      >
        <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600 text-center">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Configuration
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="staticModal"
            onClick={() => setModalOption(false)}
          >
            Close
          </button>
        </div>
        <div className="flex flex-col justify-center items-center py-5 md:flex-row">
          <div className="text-sm  mb-2 m-10 px-10 pr-10">
            <p className="text-gray-200">
              Select a category where the tickets will be created
            </p>
          </div>
          <div className="text-sm text-dark-500 mb-2 m-10 px-10 pr-10">
            <DropdownByObj
              optionsDropdown={categories}
              selectedOption={selectedOptionCategory}
              modalOption={categoryModal}
              setModalOption={setCategoryModal}
              setSelectedOption={setSelectedOptionCategory}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-5 md:flex-row">
          <div className="text-sm  mb-2 m-10 px-10 pr-10">
            <p className="text-gray-200">
              Select a channel where the panel will be created
            </p>
          </div>
          <div className="text-sm text-dark-500 mb-2 m-10 px-10 pr-10">
            <DropdownByObj
              optionsDropdown={channels}
              selectedOption={selectedOption}
              modalOption={modalSelectChannel}
              setModalOption={setModalSelectChannel}
              setSelectedOption={setSelectedOption}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-5 md:flex-row">
          <div className="text-sm  mb-2 m-10 px-10 pr-10">
            <p className="text-gray-200">
              Select a color for the panel (default: Random)
            </p>
          </div>
          <div className="text-sm text-dark-500 mb-2 m-10 px-10 pr-10">
            <DropdownByObj
              optionsDropdown={choices}
              selectedOption={selectedOptionColor}
              modalOption={modalSelectColor}
              setModalOption={setModalSelectColor}
              setSelectedOption={setSelectedOptionColor}
            />
          </div>
        </div>
        <div className="overflow-y-auto h-64 pr-1" id="scrollbar-light">
          <div className="flex flex-col justify-center items-center py-5 text-center ">
            <div className="w-[80%] text-sm text-slate-500 mb-2  border-2 border-gray-300 border-dashed rounded-md max-w-md">
              <p className="text-gray-100">Title for the panel</p>
            </div>
            <input
              type="textarea"
              className="w-[80%] h-auto px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              placeholder="Ticket Panel Title"
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>
          <div className="flex flex-col justify-center items-center py-5 text-center ">
            <div className="w-[80%] text-sm text-slate-500 mb-2  border-2 border-gray-300 border-dashed rounded-md max-w-md">
              <p className="text-gray-100">Description for the panel</p>
            </div>
            <input
              type="textarea"
              className="w-[80%] h-auto px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              placeholder="Ticket Panel Description"
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col justify-center items-center py-5 text-center ">
            <div className="w-[80%] text-sm text-slate-500 mb-2  border-2 border-gray-300 border-dashed rounded-md max-w-md">
              <p className="text-gray-100">Text for the button</p>
            </div>
            <input
              type="textarea"
              className="w-[80%] h-auto px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              placeholder="Ticket Panel Button Text"
              onChange={(e) => setData({ ...data, button: e.target.value })}
            />
          </div>
          <div className="flex flex-col justify-center items-center py-5 text-center ">
            <div className="w-[80%] text-sm text-slate-500 mb-2  border-2 border-gray-300 border-dashed rounded-md max-w-md">
              <p className="text-gray-100">Set message when a ticket is open</p>
            </div>
            <input
              type="textarea"
              className="w-[80%] h-auto px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              placeholder="Ticket Panel Message"
              onChange={(e) =>
                setData({ ...data, messageOpen: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col justify-center items-center py-5 text-center ">
            <div className="w-[80%] text-sm text-slate-500 mb-2  border-2 border-gray-300 border-dashed rounded-md max-w-md">
              <p className="text-gray-100">
                Set message when a ticket is closed
              </p>
            </div>
            <input
              type="textarea"
              className="w-[80%] h-auto px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              placeholder="Ticket Created Message"
              onChange={(e) =>
                setData({ ...data, messageClose: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center py-5 md:flex-row">
          <button
            className=" flex items-center justify-between px-4 py-2 text-sm font-medium text-left text-slate-800 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-1 focus:border-blueAzure"
            onClick={handleSubmit}
          >
            <span className="flex items-center text-gray-700">
              <span>Save</span>
            </span>
          </button>

          {error && (
            <div className="flex items-center justify-between px-4 py-2 text-sm font-medium text-left text-slate-800 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-1 focus:border-blueAzure">
              <span className="flex items-center text-gray-700">
                <span className="ml-3 text-red-500">{message}</span>
              </span>
            </div>
          )}
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
      </ModalBlank>
    </>
  );
}
