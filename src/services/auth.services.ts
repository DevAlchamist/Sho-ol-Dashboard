import httpservice from "@/config/httpService";
import { LoginData } from "../../Interface";

export interface RegisterData extends LoginData {
  phone: number;
}

class AuthService {
  login = async (data: LoginData): Promise<any> => {
    try {
      const response = await httpservice.post("api/users/login", { ...data });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  register = async (data: RegisterData): Promise<any> => {
    try {
      const response = await httpservice.post("api/users/create", { ...data });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export default new AuthService();
