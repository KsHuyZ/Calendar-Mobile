import axios from "../lib/axios";

const eventRoute = "event";

const eventApi = {
  getEventbyCalendarId: async (id, year, userId) => {
    try {
      const res = await axios.get(`/${eventRoute}/${id}/${userId}/${year}`);
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

export default eventApi;
