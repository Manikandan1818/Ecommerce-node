import axios from "axios";
import { API } from "../urlConfig";

const axiosIntance = axios.create({
  baseURL: API,
  headers: {
    Authorization: "",
  },
});

export default axiosIntance;
