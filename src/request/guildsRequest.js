import api from "./api";

export const getGuilds = async () => {
  try {
    const response = await api.get(`guilds/all`);
    return response;
  } catch (error) {
    return;
  }
};

export const getGuildsUser = async () => {
  try {
    const response = await api.get(`guilds`);
    return response;
  } catch (error) {
    return;
  }
};

export const getChannelsByGuild = async (guildId, userId) => {
  try {
    const response = await api.get(`guilds/${guildId}/${userId}/channels`);
    return response;
  } catch (error) {
    return;
  }
};

export const configWelcome = async (data) => {
  try {
    const response = await api.post(`/updatewelcome`, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const configTicket = async (data) => {
  try {
    const response = await api.post(`/createpanel`, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const createTeam = async (data) => {
  try {
    const response = await api.post(`/createteam`, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const showConfigWelcome = async (guildId) => {
  try {
    const response = await api.get(`/showconfig/${guildId}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const getRoles = async (guildId, userId) => {
  try {
    const response = await api.get(`/guilds/${guildId}/${userId}/roles`);
    return response;
  } catch (error) {
    return error;
  }
};
