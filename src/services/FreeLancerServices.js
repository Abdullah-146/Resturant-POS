import axios from "../http/axiosSet";
//All Freelancers Get
export const getFreelancers = async () => {
  try {
    const token = "manual token";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const resp = await axios.get("/freelancer/all", config);
    return resp;
  } catch (error) {
    return error.response;
  }
};
//All Warnings post
export const getWarnings = async (id) => {
  try {
    const token = await AsyncStorage.getItem("@accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const resp = await axios.post(
      "/startup/getallwarnings",
      { startupid: id },
      config
    );
    return resp;
  } catch (error) {
    return error.response;
  }
};
