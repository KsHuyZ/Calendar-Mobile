import axios from "../lib/axios";

const userRoute = "user";

const userApi = {
  getCalendarbyUserId: async (id) => {
    try {
      const res = await axios.get(`/user/calendar/${id}`);
      return res.data.calendar;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
export default userApi;
