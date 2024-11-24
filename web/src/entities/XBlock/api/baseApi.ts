import axios from "axios";
import Cookies from "js-cookie";
const csrfToken = Cookies.get("csrftoken");

export const baseApi = axios.create({
  headers: {
    "X-Csrftoken": csrfToken,
  },
})