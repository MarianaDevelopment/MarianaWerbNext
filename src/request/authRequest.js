import api from './api';

export const getUserData = () => {
    try {
        const response = api.get(`user`);
        return response;
    } catch (error) {
     return
    }
}

export const logoutUser = () => {
    try {
        const response = api.get(`logout`);
        return response;
    } catch (error) {
     return
    }
}