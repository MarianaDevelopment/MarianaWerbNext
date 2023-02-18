import React, { useState, useEffect, useContext } from "react";
import {} from "@/request/guildsRequest";
import ModalBlank from "@/components/ModalBlank";
import DropdownByObj from "@/components/DropdownByObj";

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

  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>
      <ModalBlank
        id="modalWelcome"
        modalOpen={modalOption}
        setModalOpen={setModalOption}
        title="Welcome configuration"
      >
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
          <div className="text-sm  mb-2 m-10 px-10 pr-10">
            <p className="text-gray-200">Select a welcome channel</p>
            <p className="text-gray-400">Channel already selected before:</p>
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
            <p className="text-gray-200">Select a leave channel</p>
            <p className="text-gray-400">Channel already selected before:</p>
          </div>
          <div className="text-sm text-dark-500 mb-2 m-10 px-10 pr-10">
            <DropdownByObj
              optionsDropdown={channels}
              selectedOption={selectedOptionLeave}
              modalOption={modalSelectChannelLeave}
              setModalOption={setModalSelectChannelLeave}
              setSelectedOption={setSelectedOptionLeave}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-5 text-center ">
          <div className="w-[80%] text-sm text-slate-500 mb-2  border-2 border-gray-300 border-dashed rounded-md max-w-md">
            <p className="text-gray-100">Select a message</p>
            <p className="text-gray-400">Message already selected before: </p>
          </div>
          <input
            type="textarea"
            className="w-[80%] h-auto px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            placeholder="Message"
          />
        </div>
        <div className="flex flex-col justify-center items-center py-5 md:flex-row">
          <button className=" flex items-center justify-between px-4 py-2 text-sm font-medium text-left text-slate-800 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-1 focus:border-blueAzure">
            <span className="flex items-center text-gray-700">
              <span>Save</span>
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
      </ModalBlank>
    </>
  );
}
