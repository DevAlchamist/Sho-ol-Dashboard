import httpService from "@/config/httpService";

const axios = require("axios");

class UserService {
  getUsers = async (userToken: any): Promise<any> => {
    try {
      const response = await httpService.get("api/users/own", userToken);
      console.log(response.data.result);
      return response.data.result;
    } catch (error) {
      if (error) {
        localStorage.setItem("token", "");
        // If token exists, set isLoggedIn to true
      }
      console.error("Fetching users failed:", error);
    }
  };
}

export default new UserService();
