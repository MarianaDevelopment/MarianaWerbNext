import React, { useEffect, useState } from "react";
import ModalBlank from "@/components/ModalBlank";
import { getRoles, createTeam } from "@/request/guildsRequest";

export default function TeamCreate({
  modalOption,
  setModalOption,
  channels,
  guildId,
  user,
}) {
  const [roles, setRoles] = useState([]);
  const [roleId, setRoleId] = useState("");
  const [roleId2, setRoleId2] = useState("");
  const [roleId3, setRoleId3] = useState("");
  const [panelMessageId, setPanelMessageId] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const asyncRoles = async () => {
      const roles = await getRoles(guildId, user.userId);
      setRoles(roles.data);
    };
    asyncRoles();
  }, [guildId, user.userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      guildId: guildId,
      roleId: roleId || null,
      roleId2: roleId2 || null,
      roleId3: roleId3 || null,
      panelMessageId: panelMessageId,
    };
    const config = await createTeam(data);
    if (config.status === 200) {
      setSuccess(true);
      setMessage("Team created successfully");
      setTimeout(() => {
        setSuccess(false);
        setModalOption(false);
      }, 2000);
    } else {
      setError(true);
      setMessage("Ups, something went wrong");
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <>
      <ModalBlank
        id="teamCreate"
        modalOpen={modalOption}
        setModalOpen={setModalOption}
        title="Create Team"
      >
        <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600 text-center">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Create Team
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
        {/* deberia poderse elegir de 1 a 3 roles */}
        <div class="p-4">
          <div class="flex flex-col">
            <label class="mb-2 text-sm font-bold text-gray-700 dark:text-gray-200">
              Role 1
            </label>
            <select
              class="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              onChange={(e) => setRoleId(e.target.value)}
            >
              <option value="">Select Role</option>
              {roles?.map((role, index) => (
                <option key={index} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>
          <div class="flex flex-col mt-4">
            <label class="mb-2 text-sm font-bold text-gray-700 dark:text-gray-200">
              Role 2
            </label>
            <select
              class="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              onChange={(e) => setRoleId2(e.target.value)}
            >
              <option value="">Select Role</option>
              {roles?.map((role, index) => (
                <option key={index} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>
          <div class="flex flex-col mt-4">
            <label class="mb-2 text-sm font-bold text-gray-700 dark:text-gray-200">
              Role 3
            </label>
            <select
              class="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              onChange={(e) => setRoleId3(e.target.value)}
            >
              <option value="">Select Role</option>
              {roles?.map((role, index) => (
                <option key={index} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>
          <div class="flex flex-col mt-4">
            <label class="mb-2 text-sm font-bold text-gray-700 dark:text-gray-200">
              Panel Message Id
            </label>
            <input
              class="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Panel Message Id"
              onChange={(e) => setPanelMessageId(e.target.value)}
            />
          </div>

          {/* onsubmit */}
          <div class="flex items-center justify-between p-4 border-t rounded-b dark:border-gray-600">
            <button
              type="button"
              class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
          {success && (
            <div class="flex items-center justify-between p-4 border-t rounded-b dark:border-gray-600">
              <p class="text-green-500">{message}</p>
            </div>
          )}
          {error && (
            <div class="flex items-center justify-between p-4 border-t rounded-b dark:border-gray-600">
              <p class="text-red-500">{message}</p>
            </div>
          )}
        </div>
      </ModalBlank>
    </>
  );
}
