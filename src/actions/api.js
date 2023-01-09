import axios from "axios"

const baseUrl = process.env.REACT_APP_BASE_URL

export default axios.create({
  baseURL: baseUrl,
  timeout: 30000, // 30 secs
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  validateStatus: function (status) {
    return (
      (status >= 200 && status < 300) ||
      status === 401 ||
      status === 422 ||
      status === 400
    ) // default
  },
})
