// hooks.ts
import { AppDispatch } from "@/Store/store";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
