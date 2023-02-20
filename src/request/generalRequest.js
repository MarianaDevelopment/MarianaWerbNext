import api from "./api";

export const getAllCommands = async () => {
  try {
    const response = await api.get(`commands/all`);
    return response;
  } catch (error) {
    return;
  }
};
