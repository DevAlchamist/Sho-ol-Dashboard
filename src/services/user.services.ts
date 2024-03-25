import httpService from "@/config/httpService";

const axios = require("axios");

class UserService {
  getAllUsers = async (userToken: any): Promise<any> => {
    try {
      const response = await httpService.get("api/users/own", userToken);
      return response.data.result;
    } catch (error) {
      console.error("Fetching users failed:", error);
    }
  };
}

export default new UserService();
