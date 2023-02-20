import React, { useState, useEffect, useContext } from "react";
import { showConfigWelcome } from "@/request/guildsRequest";
import ModalBlank from "@/components/ModalBlank";

export default function ModalShowWelcome({
  modalOption,
  setModalOption,
  guildId,
}) {
  const [config, setConfig] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const showConfig = async () => {
    const config = await showConfigWelcome(guildId);
    if (config.status === 200) {
      setLoading(false);
      setConfig(config.data);
    } else {
      setError(true);
      setMessage("Ups, something went wrong");
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  useEffect(() => {
    showConfig();
  }, []);

  return (
    <>
      <ModalBlank
        id="showConfigWelcome"
        modalOpen={modalOption}
        setModalOpen={setModalOption}
        title="Configuration"
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
        {!loading ? (
          <div class="p-4">
            <div class="flex flex-col">
              <div class="flex flex-col w-1/2 ">
                <div class="flex flex-col w-1/2">
                  <label
                    class="text-gray-700 dark:text-gray-200 pt-2"
                    for="namewelcome"
                  >
                    Name channel welcome
                  </label>
                  <input
                    class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    id="namewelcome"
                    name="namewelcome"
                    type="text"
                    value={config.namewelcome}
                  />
                </div>
                <div class="flex flex-col w-1/2">
                  <label
                    class="text-gray-700 dark:text-gray-200"
                    for="channelId"
                  >
                    Channel ID
                  </label>
                  <input
                    class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    id="channelId"
                    name="channelId"
                    type="text"
                    value={config.channelId}
                  />
                </div>
              </div>
              <div class="flex flex-col">
                <div class="flex flex-col w-1/2 ">
                  <label
                    class="text-gray-700 dark:text-gray-200"
                    for="nameleave"
                  >
                    Name channel leave
                  </label>
                  <input
                    class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    id="nameleave"
                    name="nameleave"
                    type="text"
                    value={config.nameleave}
                  />
                </div>
                <div class="flex flex-col w-1/2">
                  <label
                    class="text-gray-700 dark:text-gray-200"
                    for="leavechannelId"
                  >
                    Channel ID
                  </label>
                  <input
                    class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    id="leavechannelId"
                    name="leavechannelId"
                    type="text"
                    value={config.leavechannelId}
                  />
                </div>
              </div>
              <div class="flex flex-col">
                <div class="flex flex-col w-1/2">
                  <label class="text-gray-700 dark:text-gray-200" for="message">
                    Message
                  </label>
                  <input
                    class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    id="message"
                    name="message"
                    type="text"
                    value={config.message}
                  />
                </div>
                <div class="flex flex-col w-1/2">
                  <label
                    class="text-gray-700 dark:text-gray-200"
                    for="leavemessage"
                  >
                    Message
                  </label>
                  <input
                    class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    id="leavemessage"
                    name="leavemessage"
                    type="text"
                    value={config.leavemessage}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div class="flex items-center justify-center p-4">
            <div class="flex flex-col items-center justify-center">
              <div class="flex items-center justify-center">
                <svg
                  class="w-10 h-10 text-gray-400 animate-spin"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 2v10m0 0v10m0-10h10m-10 0H2"></path>
                </svg>
              </div>
              <p class="text-gray-400">Loading...</p>
            </div>
          </div>
        )}
      </ModalBlank>
    </>
  );
}
