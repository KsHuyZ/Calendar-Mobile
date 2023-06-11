import axios from "axios";

const weatherApi = async (lat, lon) => {
  const weatherKey = "8b4a1cfe7b37f251dcce8b232975fd6d";
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${weatherKey}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default weatherApi;
