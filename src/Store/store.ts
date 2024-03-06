import authService, { RegisterData } from "@/services/auth.services";
import { create } from "zustand";
import { LoginData } from "../../Interface";

type User = Record<string, any>;

type AuthStore = {
  user: User;
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: {},
  login: async (data) => {
    try {
      console.log("store data 1", data);
      const userData = await authService.login(data); // Call the login method of AuthService
      //   set({ user: userData }); // Update the user in the store
      console.log("userData", userData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  register: async (data) => {
    try {
      console.log("store data 1", data);
      const userData = await authService.register(data); // Call the login method of AuthService
      //   set({ user: userData }); // Update the user in the store
      console.log("userData", userData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  
}));