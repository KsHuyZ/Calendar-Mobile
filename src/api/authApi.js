import axios from "../lib/axios";
import { storeData } from "../utils/storeData";
const userRoute = "user";

const authApi = {
  login: async (email, password) => {
    try {
      const res = await axios.post(`/${userRoute}/login`, {
        email,
        password,
      });

      const accessToken = res.data.accessToken;
      const refreshToken = res.data.refreshToken;
      storeData("accessToken", accessToken);
      storeData("refreshToken", refreshToken);
      return res.data;
    } catch (error) {
      console.log("error", error.response.data.msg);
      return error.response.data.msg;
    }
  },
  authorize: async () => {
    try {
      const res = await axios.get("/auth/authorize");
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
export default authApi;
