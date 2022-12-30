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