import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
export const sendRequest = async ({ method, url, body }) => {
  try {
    const response = await axios({
      method: method,
      url: url,
      data: body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
    }
  }
  throw error;
};
