import { baseUrlJsonPlaceHolder } from "../config/config";
import axios from "axios";

export const getResourse = async (id, url) => {
    return await axios.get(`${url}/${id}`);;
}

export const createResource = async (data, url) => {
    return await axios.post(`${url}`, data);
}

export const updateResource = async (data, url) => {
    return await axios.put(`${url}`, data);
}

export const patchResource = async (data, url) => {
    return await axios.patch(`${url}`, data);
}

export const deleteResource = async (url) => {
    return await axios.delete(`${url}`);
}
