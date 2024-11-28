import axios from "axios";

export const baseRadiumApi = axios.create({
  baseURL: 'https://api.radium-rtf.ru/'
})