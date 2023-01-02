import api from './api';

export const getGuilds = async () => {
    try {
        const response = await api.get(`guilds/all`);
        return response;
    } catch (error) {
        return;
    }
}

export const getGuildsUser = async () => {
    try {
        const response = await api.get(`guilds`);
        return response;
    } catch (error) {
        return;
    }
}

export const getChannelsByGuild = async (guildId, userId) => {
    try {
        const response = await api.get(`guilds/${guildId}/${userId}/channels`);
        return response;
    } catch (error) {
        return;
    }
}

export const getGuildById = async (guildId, userId) => {
    try {
        const response = await api.get(`guilds/${guildId}/${userId}/welcome`);
        return response;
    } catch (error) {
        return;
    }
}

export const updateWelcome = async (guildId, userId, data) => {
    try {
        const response = await api.post(`updatewelcome/${guildId}/${userId}`, data);
        return response;
    } catch (error) {
        return;
    }
}

export const getGuildLeaveById = async (guildId, userId) => {
  try {
    const response = await api.get(`guilds/${guildId}/${userId}/leave`);
    return response;
  } catch (error) {
    return;
  }
};

export const updateLeave = async (guildId, userId, data) => {
  try {
    const response = await api.post(`updateleave/${guildId}/${userId}`, data);
    return response;
  } catch (error) {
    return;
  }
};
