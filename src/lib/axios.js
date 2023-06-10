import Axios from "axios";
import { getData, removeItem, storeData } from "../utils/storeData";

const baseURL = "https://calendar-be-wrlq.onrender.com";

const axios = Axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  //   withCredentials: true,
});

// const accessToken = localStorage.getItem("accessToken");
// if (accessToken) {
//   axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
// }

const authInterceptor = async (config) => {
  const accessToken = await getData("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

const errorInterceptor = async (error) => {
  const originalRequest = error.config;
  const refreshToken = await getData("refreshToken");
  if (error?.response?.status === 401 && !originalRequest?._retry) {
    // Nếu mã trả về là 401 và không phải là lần retry thì gọi refreshToken để lấy accessToken mới
    originalRequest._retry = true;
    try {
      const response = await axios.post("/api/refreshToken", {
        refreshToken,
      });
      storeData("accessToken", response.data.accessToken);
      storeData("refreshToken", response.data.refreshToken); // Lưu refreshToken mới vào localStorage
      originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
      return axios(originalRequest);
    } catch (error) {
      console.log(error);
      // Nếu lỗi xảy ra trong quá trình lấy accessToken mới thì đăng xuất khỏi ứng dụng
      removeItem("accessToken");
      removeItem("refreshToken");
      // window.location.href = "/login";
    }
  }
  return Promise.reject(error);
};

axios.interceptors.request.use(authInterceptor);
axios.interceptors.response.use((response) => response, errorInterceptor);

export default axios;
