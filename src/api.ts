import axios from "axios";

const Api = axios.create({
  baseURL: "https://run.mocky.io/v3",
});
export default Api;
