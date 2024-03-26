"use client";
import BoxImage from "@/assets/cover.jpg";
import { Menu, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  FormControl,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import "@/app/globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { UserNavigation } from "./Sidebar";
import DropDown from "./DropDown";
import Contacts from "./Contacts";
import UserRightBar from "./UserRightBar";
import { useSelector } from "react-redux";
import { getUsersAsync, selectGetAllUsers } from "../Store/userSlice";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/helpers/hooks";
import { userTokenProps } from "../../Interface";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerData = UserNavigation;

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {DrawerData.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const router = useRouter();

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      // If token exists, set isLoggedIn to true
      dispatch(getUsersAsync(token));
    }
  }, [dispatch]);
  const user = useSelector(selectGetAllUsers);
  console.log(user);
  return (
    <>
      {user ? (
        <Box className="grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-1">
          <Box className="col-span-9 py-5 h-screen overflow-y-auto">
            <Box>
              <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
                {DrawerList}
              </Drawer>
            </Box>
            <Box className="flex lg:mt-0 mt-5 items-center justify-between ml-[20px] lg:mx-[60px]">
              <Box className="lg:text-4xl text-lg text-[#363B64] font-bold">
                User Dashboard
              </Box>
              <Box className="lg:hidden justify-end pr-5 flex w-full">
                <Button className=" ml-5" onClick={toggleDrawer(true)}>
                  <Menu className="" />
                </Button>
              </Box>
              <Box className="relative hidden lg:flex rounded-full overflow-hidden">
                <FormControl>
                  <Search className="h-8 w-8 absolute top-3 left-5" />
                  <input className="w-[350px] pl-14 h-[60px] outline-none" />
                </FormControl>
              </Box>
            </Box>
            <Box className="lg:h-[367px] m-5 bg-white rounded-3xl overflow-hidden h-fit">
              <Box className=" relative w-[370px]  lg:w-full">
                <Image
                  src={BoxImage}
                  alt="BoxImage"
                  className=" w-full h-full"
                />
                <Box className="absolute lg:top-16 lg:left-16 top-5 left-5 lg:w-[164px] md:w-[100px] md:h-[100px] w-[70px] h-[70px] lg:h-[164px] border-[10px] border-white bg-gray-400 rounded-full"></Box>
              </Box>
              <Box className="lg:mx-[62px] mx-[10px] mt-5  lg:mt-20 flex justify-between items-center">
                <Box className="lg:text-3xl capitalize text-[#363B64] font-bold">
                  {user.username}
                </Box>
                <Box className="">
                  <DropDown />
                </Box>
              </Box>
              <Box className="lg:mx-[62px] mx-[10px] lg:text-base text-xs font-semibold text-[#363B64] flex justify-between items-center">
                <Box className="text-start w-full">{user.role}</Box>
                <Box className="text-start w-full">Phone</Box>
                <Box className="text-start w-full">G-Mail</Box>
              </Box>
              <Box className="lg:mx-[62px] lg:mb-0 mb-5 mx-[10px] lg:text-base text-[7px] font-semibold text-[#363B64] flex justify-between items-center">
                <Box className="text-[#A098AE] font-normal text-start w-full flex items-center">
                  <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 lg:w-[16px] lg:h-[21px] w-[12px] h-[12px]"
                  >
                    <path
                      d="M8 0.5C5.87827 0.5 3.84344 1.34285 2.34315 2.84315C0.842855 4.34344 0 6.37827 0 8.5C0 13.9 7.05 20 7.35 20.26C7.53113 20.4149 7.76165 20.5001 8 20.5001C8.23835 20.5001 8.46887 20.4149 8.65 20.26C9 20 16 13.9 16 8.5C16 6.37827 15.1571 4.34344 13.6569 2.84315C12.1566 1.34285 10.1217 0.5 8 0.5ZM8 18.15C5.87 16.15 2 11.84 2 8.5C2 6.9087 2.63214 5.38258 3.75736 4.25736C4.88258 3.13214 6.4087 2.5 8 2.5C9.5913 2.5 11.1174 3.13214 12.2426 4.25736C13.3679 5.38258 14 6.9087 14 8.5C14 11.84 10.13 16.16 8 18.15ZM8 4.5C7.20887 4.5 6.43552 4.7346 5.77772 5.17412C5.11992 5.61365 4.60723 6.23836 4.30448 6.96927C4.00173 7.70017 3.92252 8.50444 4.07686 9.28036C4.2312 10.0563 4.61216 10.769 5.17157 11.3284C5.73098 11.8878 6.44371 12.2688 7.21964 12.4231C7.99556 12.5775 8.79983 12.4983 9.53073 12.1955C10.2616 11.8928 10.8864 11.3801 11.3259 10.7223C11.7654 10.0645 12 9.29113 12 8.5C12 7.43913 11.5786 6.42172 10.8284 5.67157C10.0783 4.92143 9.06087 4.5 8 4.5ZM8 10.5C7.60444 10.5 7.21776 10.3827 6.88886 10.1629C6.55996 9.94318 6.30362 9.63082 6.15224 9.26537C6.00087 8.89991 5.96126 8.49778 6.03843 8.10982C6.1156 7.72186 6.30608 7.36549 6.58579 7.08579C6.86549 6.80608 7.22186 6.6156 7.60982 6.53843C7.99778 6.46126 8.39991 6.50087 8.76537 6.65224C9.13082 6.80362 9.44318 7.05996 9.66294 7.38886C9.8827 7.71776 10 8.10444 10 8.5C10 9.03043 9.78929 9.53914 9.41421 9.91421C9.03914 10.2893 8.53043 10.5 8 10.5Z"
                      fill="#A098AE"
                    />
                  </svg>
                  Jakarta, Indonesia
                </Box>
                <Box className="text-start w-full lg:text-base text-[7px] flex items-center">
                  <svg
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 lg:w-[40px] lg:h-[41px] w-[12px] h-[12px]"
                  >
                    <rect
                      y="0.740234"
                      width="40"
                      height="40"
                      rx="20"
                      fill="#FB7D5B"
                    />
                    <path
                      d="M27.4401 21.7403C27.2201 21.7403 26.9901 21.6703 26.7701 21.6203C26.3246 21.5222 25.8868 21.3918 25.4601 21.2303C24.9962 21.0616 24.4862 21.0703 24.0284 21.255C23.5706 21.4396 23.1972 21.787 22.9801 22.2303L22.7601 22.6803C21.7861 22.1385 20.8911 21.4656 20.1001 20.6803C19.3149 19.8894 18.6419 18.9943 18.1001 18.0203L18.5201 17.7403C18.9635 17.5233 19.3109 17.1499 19.4955 16.692C19.6801 16.2342 19.6889 15.7243 19.5201 15.2603C19.3613 14.8328 19.231 14.3951 19.1301 13.9503C19.0801 13.7303 19.0401 13.5003 19.0101 13.2703C18.8887 12.566 18.5197 11.9281 17.9697 11.4716C17.4197 11.0151 16.7248 10.77 16.0101 10.7803H13.0101C12.5791 10.7763 12.1524 10.8652 11.7588 11.0409C11.3653 11.2166 11.0142 11.475 10.7295 11.7986C10.4449 12.1222 10.2332 12.5033 10.1091 12.9161C9.98494 13.3288 9.95118 13.7634 10.0101 14.1903C10.5428 18.3797 12.4561 22.2722 15.4478 25.253C18.4394 28.2337 22.3388 30.1329 26.5301 30.6503H26.9101C27.6475 30.6514 28.3595 30.3809 28.9101 29.8903C29.2265 29.6074 29.4792 29.2605 29.6516 28.8727C29.8239 28.4848 29.9121 28.0648 29.9101 27.6403V24.6403C29.8979 23.9457 29.6449 23.2769 29.1944 22.748C28.744 22.2191 28.1239 21.863 27.4401 21.7403ZM27.9401 27.7403C27.9399 27.8823 27.9095 28.0226 27.8509 28.152C27.7923 28.2813 27.7068 28.3966 27.6001 28.4903C27.4884 28.5868 27.3577 28.6589 27.2165 28.7019C27.0753 28.745 26.9267 28.7581 26.7801 28.7403C23.035 28.2602 19.5563 26.5468 16.8928 23.8706C14.2293 21.1944 12.5325 17.7077 12.0701 13.9603C12.0542 13.8139 12.0681 13.6657 12.1111 13.5247C12.1541 13.3838 12.2252 13.253 12.3201 13.1403C12.4138 13.0337 12.5292 12.9482 12.6585 12.8896C12.7878 12.8309 12.9281 12.8005 13.0701 12.8003H16.0701C16.3026 12.7952 16.5297 12.8712 16.7122 13.0154C16.8948 13.1596 17.0213 13.3629 17.0701 13.5903C17.1101 13.8637 17.1601 14.1337 17.2201 14.4003C17.3356 14.9275 17.4894 15.4455 17.6801 15.9503L16.2801 16.6003C16.1604 16.6553 16.0527 16.7333 15.9633 16.8299C15.8738 16.9266 15.8043 17.04 15.7588 17.1635C15.7132 17.2871 15.6926 17.4185 15.6979 17.5501C15.7033 17.6817 15.7346 17.8109 15.7901 17.9303C17.2293 21.0131 19.7073 23.4911 22.7901 24.9303C23.0336 25.0304 23.3066 25.0304 23.5501 24.9303C23.6748 24.8857 23.7894 24.8168 23.8873 24.7275C23.9851 24.6383 24.0643 24.5305 24.1201 24.4103L24.7401 23.0103C25.2571 23.1952 25.7847 23.3488 26.3201 23.4703C26.5868 23.5303 26.8568 23.5803 27.1301 23.6203C27.3575 23.6691 27.5608 23.7957 27.705 23.9782C27.8492 24.1607 27.9253 24.3878 27.9201 24.6203L27.9401 27.7403Z"
                      fill="white"
                    />
                  </svg>
                  +91 82877 62253
                </Box>
                <Box className="text-start w-full flex items-center">
                  <svg
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 lg:w-[40px] lg:h-[41px] w-[12px] h-[12px]"
                  >
                    <rect
                      y="0.740234"
                      width="40"
                      height="40"
                      rx="20"
                      fill="#FB7D5B"
                    />
                    <path
                      d="M27 12.7402H13C12.2044 12.7402 11.4413 13.0563 10.8787 13.6189C10.3161 14.1815 10 14.9446 10 15.7402V25.7402C10 26.5359 10.3161 27.2989 10.8787 27.8616C11.4413 28.4242 12.2044 28.7402 13 28.7402H27C27.7956 28.7402 28.5587 28.4242 29.1213 27.8616C29.6839 27.2989 30 26.5359 30 25.7402V15.7402C30 14.9446 29.6839 14.1815 29.1213 13.6189C28.5587 13.0563 27.7956 12.7402 27 12.7402ZM26.427 14.7402L20.6 19.5402C20.4335 19.6669 20.2312 19.7378 20.022 19.7429C19.8129 19.7479 19.6074 19.6868 19.435 19.5682L13.573 14.7402H26.427ZM27 26.7402H13C12.7348 26.7402 12.4804 26.6349 12.2929 26.4473C12.1054 26.2598 12 26.0055 12 25.7402V16.0402L18.2 21.1402C18.7159 21.5266 19.3435 21.7347 19.988 21.7332C20.6551 21.7322 21.3037 21.5143 21.836 21.1122L28 16.0402V25.7402C28 26.0055 27.8946 26.2598 27.7071 26.4473C27.5196 26.6349 27.2652 26.7402 27 26.7402Z"
                      fill="white"
                    />
                  </svg>
                  <Box className="truncate w-[100px]">{user.email}</Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Contacts />
            </Box>
          </Box>
          <Box className="col-span-3 bg-white xl:flex lg:flex hidden">
            <UserRightBar Data={user} />
          </Box>
        </Box>
      ) : (
        <Box className="h-screen w-full flex items-center justify-center">
          <Box className="three-body">
            <Box className="three-body__dot"></Box>
            <Box className="three-body__dot"></Box>
            <Box className="three-body__dot"></Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default HomePage;
