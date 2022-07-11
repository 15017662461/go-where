import axios from "axios";

const service = axios.create({
  baseURL:"http://localhost:10090",
  timeout:8000
})

export default service