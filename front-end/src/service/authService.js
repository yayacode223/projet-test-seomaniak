import {axiosInstance} from "../util/axiosInstance.js"; 

//Authentification User
export const register = ({ name, email, password }) =>
    axiosInstance.post("auth/register", { name, email, password });

export const login = ({ email, password }) =>
    axiosInstance.post("auth/login", { email, password });