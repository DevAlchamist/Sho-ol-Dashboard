"use client";
import DropDown from "@/components/DropDown";
import UserRightBar from "@/components/UserRightBar";
import { NotificationsActiveOutlined, Search } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  FormControl,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import { FiberManualRecord as FiberManualRecordIcon } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import BoxImage from "@/assets/cover (1).png";

const TeachersDetails = () => {
  return (
    <Box className="h-screen overflow-y-auto">
      <Box className="mx-10 mt-10 flex items-center justify-between">
        <Box className="lg:text-4xl text-lg text-[#363B64] font-bold">
          Teachers
        </Box>
        <Box className="flex items-center justify-around">
          <Box className=" relative bg-white w-[350px] border border-gray-300 hidden lg:flex rounded-full overflow-hidden">
            <FormControl>
              <Search className="h-8 w-8 text-[#4D44B5] absolute top-3 left-5" />
              <input className=" pl-14 h-[60px] outline-none" />
            </FormControl>
          </Box>
          <Box>
            <Box className="lg:flex hidden justify-around ">
              <Box className=" mx-3 w-[60px] h-[60px] flex items-center justify-center ">
                <Badge
                  className="text-[#A098AE]"
                  badgeContent={4}
                  color="primary"
                >
                  <NotificationsActiveOutlined className="h-[32px] w-[32px]" />
                </Badge>
              </Box>
              <Box className="w-[60px] h-[60px] mx-4 flex items-center justify-center ">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.2629 2.66675L11.4166 6.46623C10.9352 6.69787 10.4751 6.96466 10.0338 7.26571L6.32023 6.09644L2.58325 12.5704L5.39836 15.1485C5.28837 15.9649 5.33819 16.3673 5.39836 16.8516L2.58325 19.4298L6.32023 25.9037L10.0338 24.7345C10.4751 25.0355 10.9352 25.3023 11.4166 25.5339L12.2629 29.3334H19.7369L20.5833 25.5339C21.0646 25.3023 21.5248 25.0355 21.9661 24.7345L25.6796 25.9037L29.4166 19.4298L26.6015 16.8516C26.6245 16.5682 26.6663 16.2846 26.6666 16.0001C26.6677 15.7069 26.6215 15.4109 26.6015 15.1485L29.4166 12.5704L25.6796 6.09644L21.9661 7.26571C21.5248 6.96466 21.0646 6.69787 20.5833 6.46623L19.7369 2.66675H12.2629ZM14.4036 5.33341H17.5963L18.2551 8.29175L18.9166 8.55217C19.6648 8.84519 20.3643 9.24854 20.9921 9.75008L21.5494 10.1928L24.44 9.28394L26.0364 12.0496L23.802 14.099L23.9088 14.8022C24.0344 15.5798 24.01 16.4746 23.9088 17.198L23.802 17.9011L26.0364 19.9506L24.44 22.7162L21.5494 21.8074L20.9921 22.2501C20.3643 22.7516 19.6648 23.155 18.9166 23.448L18.2551 23.7084L17.5963 26.6667H14.4036L13.7447 23.7084L13.0833 23.448C12.335 23.155 11.6356 22.7516 11.0077 22.2501L10.4504 21.8074L7.55981 22.7162L5.96346 19.9506L8.19783 17.9011L8.09106 17.198C7.96083 16.4047 7.98083 15.4968 8.09106 14.8022L8.19783 14.099L5.96346 12.0496L7.55981 9.28394L10.4504 10.1928L11.0077 9.75008C11.6356 9.24854 12.335 8.84519 13.0833 8.55217L13.7447 8.29175L14.4036 5.33341ZM15.9999 10.6667C13.0702 10.6667 10.6666 13.0704 10.6666 16.0001C10.6666 18.9298 13.0702 21.3334 15.9999 21.3334C18.9296 21.3334 21.3333 18.9298 21.3333 16.0001C21.3333 13.0704 18.9296 10.6667 15.9999 10.6667ZM15.9999 13.3334C17.4885 13.3334 18.6666 14.5115 18.6666 16.0001C18.6666 17.4886 17.4885 18.6667 15.9999 18.6667C14.5114 18.6667 13.3333 17.4886 13.3333 16.0001C13.3333 14.5115 14.5114 13.3334 15.9999 13.3334Z"
                    fill="#A098AE"
                  />
                </svg>
              </Box>
              <Box className="text-[#363B64] mr-4">
                Nabila A.
                <Box className="text-gray-300"> Admin</Box>
              </Box>
              <Box className="h-[60px] w-[60px] ml-3 bg-[#C1BBEB] rounded-full"></Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="grid xl:grid-cols-12  lg:grid-cols-12 grid-cols-1">
        <Box className=" py-5 pr-5 pl-5 col-span-9">
          <Box className=" my-5 bg-white rounded-3xl overflow-hidden h-fit">
            <Box className=" relative w-[370px]  lg:w-full">
              <Image
                src={BoxImage}
                alt="BoxImage"
                className="bg-[#4D44B5] w-full h-full"
              />
              <Box className="absolute lg:top-16 lg:left-16 top-5 left-5 lg:w-[164px] md:w-[100px] md:h-[100px] w-[70px] h-[70px] lg:h-[164px] border-[5px] border-white bg-gray-400 rounded-full"></Box>
            </Box>
            <Box className="lg:mx-[62px] mx-[10px] mt-5  lg:mt-20 flex justify-between items-center">
              <Box className="lg:text-3xl text-[#363B64] font-bold">
                Maria Historia{" "}
              </Box>
              <Box className="">
                <DropDown />
              </Box>
            </Box>
            <Box className="text-start w-full mb-3 lg:mx-[62px] mx-[10px] lg:text-base text-xs font-extralight text-[#363B64] flex justify-between items-center">
              Mathematics
            </Box>
            <Box className="lg:mx-[62px] lg:mb-0 mb-5 mx-[10px] lg:text-base text-[7px] font-semibold text-[#363B64] flex justify-between items-center">
              <Box className=" font-semibold text-start w-full flex items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 lg:w-[40px] lg:h-[40px] w-[12px] h-[12px]"
                >
                  <rect width="40" height="40" rx="20" fill="#FB7D5B" />
                  <path
                    d="M20 10C17.8783 10 15.8434 10.8429 14.3431 12.3431C12.8429 13.8434 12 15.8783 12 18C12 23.4 19.05 29.5 19.35 29.76C19.5311 29.9149 19.7616 30.0001 20 30.0001C20.2384 30.0001 20.4689 29.9149 20.65 29.76C21 29.5 28 23.4 28 18C28 15.8783 27.1571 13.8434 25.6569 12.3431C24.1566 10.8429 22.1217 10 20 10ZM20 27.65C17.87 25.65 14 21.34 14 18C14 16.4087 14.6321 14.8826 15.7574 13.7574C16.8826 12.6321 18.4087 12 20 12C21.5913 12 23.1174 12.6321 24.2426 13.7574C25.3679 14.8826 26 16.4087 26 18C26 21.34 22.13 25.66 20 27.65ZM20 14C19.2089 14 18.4355 14.2346 17.7777 14.6741C17.1199 15.1136 16.6072 15.7384 16.3045 16.4693C16.0017 17.2002 15.9225 18.0044 16.0769 18.7804C16.2312 19.5563 16.6122 20.269 17.1716 20.8284C17.731 21.3878 18.4437 21.7688 19.2196 21.9231C19.9956 22.0775 20.7998 21.9983 21.5307 21.6955C22.2616 21.3928 22.8864 20.8801 23.3259 20.2223C23.7654 19.5645 24 18.7911 24 18C24 16.9391 23.5786 15.9217 22.8284 15.1716C22.0783 14.4214 21.0609 14 20 14ZM20 20C19.6044 20 19.2178 19.8827 18.8889 19.6629C18.56 19.4432 18.3036 19.1308 18.1522 18.7654C18.0009 18.3999 17.9613 17.9978 18.0384 17.6098C18.1156 17.2219 18.3061 16.8655 18.5858 16.5858C18.8655 16.3061 19.2219 16.1156 19.6098 16.0384C19.9978 15.9613 20.3999 16.0009 20.7654 16.1522C21.1308 16.3036 21.4432 16.56 21.6629 16.8889C21.8827 17.2178 22 17.6044 22 18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20Z"
                    fill="white"
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
                <Box className="truncate w-[100px]">
                  nayakshubhanshu060705@gmail.com
                </Box>
              </Box>
            </Box>
            <Box className="lg:mx-[62px] my-5 lg:mb-0 mb-5 mx-[10px] lg:text-base text-[7px] font-semibold text-[#363B64] flex flex-col justify-start items-center">
              <Box className="w-full text-2xl my-5">
                About :
                <Typography className="w-[616px] font-light mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Box>
              <Box className="w-full text-2xl my-5">
                Education :
                <List className=" font-semibold mt-3">
                  <ListItem>
                    <FiberManualRecordIcon
                      className="mr-3"
                      color="disabled"
                      fontSize="small"
                    />
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography className="font-semibold">
                            History Major, University Akademi Historia
                          </Typography>
                        </React.Fragment>
                      }
                      secondary="2013-2017"
                    />
                  </ListItem>
                  <ListItem>
                    <FiberManualRecordIcon
                      className="mr-3"
                      color="disabled"
                      fontSize="small"
                    />
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography className="font-semibold">
                            Master of History, University Akademi Historia
                          </Typography>
                        </React.Fragment>
                      }
                      secondary="2013-2017"
                    />
                  </ListItem>
                </List>
              </Box>
              <Box className="w-full text-2xl my-5">
                Expertise :
                <Typography className="w-[616px] font-light mt-3">
                  World History, Philosophy, Prehistoric, Culture, Ancient
                </Typography>
              </Box>
            </Box>
            <Box className="col-span-3 bg-white xl:flex lg:flex hidden"></Box>
          </Box>
        </Box>
        <Box className="flex gap-y-5 py-[40px] justify-start items-center flex-col col-span-3">
          <Box className="w-[386px] rounded-3xl h-[129px] bg-white flex flex-col justify-center items-start text-start text-[#303972] font-semibold p-5 text-3xl">
            Schedule Details
            <Typography className="font-extralight text-sm">
              Thursday, 10th April , 2021
            </Typography>
          </Box>
          <Box className="overflow-y-auto no-scrollbar h-[680px]">
            <Box className="bg-[#4D44B5] w-[386px] mb-5 rounded-3xl overflow-hidden h-[186px] flex flex-col justify-center items-end text-start">
              <Box className="w-[362px] h-[186px] bg-white flex flex-col justify-around items-start text-start">
                <Box className="ml-2 text-xl text-[#303972] font-bold">
                  World History
                  <Typography className="font-extralight">
                    Class VII-B
                  </Typography>
                </Box>
                <Box className="text-[#303972] flex ml-2 gap-3 flex-col items-center justify-around">
                  <Box className="flex -ml-2 font-light">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M18 5.25H16.5V4.5C16.5 4.30109 16.421 4.11032 16.2803 3.96967C16.1397 3.82902 15.9489 3.75 15.75 3.75C15.5511 3.75 15.3603 3.82902 15.2197 3.96967C15.079 4.11032 15 4.30109 15 4.5V5.25H12.75V4.5C12.75 4.30109 12.671 4.11032 12.5303 3.96967C12.3897 3.82902 12.1989 3.75 12 3.75C11.8011 3.75 11.6103 3.82902 11.4697 3.96967C11.329 4.11032 11.25 4.30109 11.25 4.5V5.25H9V4.5C9 4.30109 8.92098 4.11032 8.78033 3.96967C8.63968 3.82902 8.44891 3.75 8.25 3.75C8.05109 3.75 7.86032 3.82902 7.71967 3.96967C7.57902 4.11032 7.5 4.30109 7.5 4.5V5.25H6C5.40326 5.25 4.83097 5.48705 4.40901 5.90901C3.98705 6.33097 3.75 6.90326 3.75 7.5V18C3.75 18.5967 3.98705 19.169 4.40901 19.591C4.83097 20.0129 5.40326 20.25 6 20.25H18C18.5967 20.25 19.169 20.0129 19.591 19.591C20.0129 19.169 20.25 18.5967 20.25 18V7.5C20.25 6.90326 20.0129 6.33097 19.591 5.90901C19.169 5.48705 18.5967 5.25 18 5.25ZM5.25 7.5C5.25 7.30109 5.32902 7.11032 5.46967 6.96967C5.61032 6.82902 5.80109 6.75 6 6.75H7.5V7.5C7.5 7.69891 7.57902 7.88968 7.71967 8.03033C7.86032 8.17098 8.05109 8.25 8.25 8.25C8.44891 8.25 8.63968 8.17098 8.78033 8.03033C8.92098 7.88968 9 7.69891 9 7.5V6.75H11.25V7.5C11.25 7.69891 11.329 7.88968 11.4697 8.03033C11.6103 8.17098 11.8011 8.25 12 8.25C12.1989 8.25 12.3897 8.17098 12.5303 8.03033C12.671 7.88968 12.75 7.69891 12.75 7.5V6.75H15V7.5C15 7.69891 15.079 7.88968 15.2197 8.03033C15.3603 8.17098 15.5511 8.25 15.75 8.25C15.9489 8.25 16.1397 8.17098 16.2803 8.03033C16.421 7.88968 16.5 7.69891 16.5 7.5V6.75H18C18.1989 6.75 18.3897 6.82902 18.5303 6.96967C18.671 7.11032 18.75 7.30109 18.75 7.5V9.75H5.25V7.5ZM18.75 18C18.75 18.1989 18.671 18.3897 18.5303 18.5303C18.3897 18.671 18.1989 18.75 18 18.75H6C5.80109 18.75 5.61032 18.671 5.46967 18.5303C5.32902 18.3897 5.25 18.1989 5.25 18V11.25H18.75V18Z"
                        fill="#FB7D5B"
                      />
                    </svg>
                    March 20, 2021
                  </Box>
                  <Box className="flex font-light">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                        fill="#FCC43E"
                      />
                      <path
                        d="M15 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H15C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11Z"
                        fill="#FCC43E"
                      />
                    </svg>
                    09.00 - 10.00 AM
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="bg-[#FB7D5B] w-[386px] my-5 rounded-3xl overflow-hidden h-[186px] flex flex-col justify-center items-end text-start">
              <Box className="w-[362px] h-[186px] bg-white flex flex-col justify-around items-start text-start">
                <Box className="ml-2 text-xl text-[#303972] font-bold">
                  Ancient History
                  <Typography className="font-extralight">
                    Class VII-B
                  </Typography>
                </Box>
                <Box className="text-[#303972] flex ml-2 gap-3 flex-col items-center justify-around">
                  <Box className="flex -ml-2 font-light">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M18 5.25H16.5V4.5C16.5 4.30109 16.421 4.11032 16.2803 3.96967C16.1397 3.82902 15.9489 3.75 15.75 3.75C15.5511 3.75 15.3603 3.82902 15.2197 3.96967C15.079 4.11032 15 4.30109 15 4.5V5.25H12.75V4.5C12.75 4.30109 12.671 4.11032 12.5303 3.96967C12.3897 3.82902 12.1989 3.75 12 3.75C11.8011 3.75 11.6103 3.82902 11.4697 3.96967C11.329 4.11032 11.25 4.30109 11.25 4.5V5.25H9V4.5C9 4.30109 8.92098 4.11032 8.78033 3.96967C8.63968 3.82902 8.44891 3.75 8.25 3.75C8.05109 3.75 7.86032 3.82902 7.71967 3.96967C7.57902 4.11032 7.5 4.30109 7.5 4.5V5.25H6C5.40326 5.25 4.83097 5.48705 4.40901 5.90901C3.98705 6.33097 3.75 6.90326 3.75 7.5V18C3.75 18.5967 3.98705 19.169 4.40901 19.591C4.83097 20.0129 5.40326 20.25 6 20.25H18C18.5967 20.25 19.169 20.0129 19.591 19.591C20.0129 19.169 20.25 18.5967 20.25 18V7.5C20.25 6.90326 20.0129 6.33097 19.591 5.90901C19.169 5.48705 18.5967 5.25 18 5.25ZM5.25 7.5C5.25 7.30109 5.32902 7.11032 5.46967 6.96967C5.61032 6.82902 5.80109 6.75 6 6.75H7.5V7.5C7.5 7.69891 7.57902 7.88968 7.71967 8.03033C7.86032 8.17098 8.05109 8.25 8.25 8.25C8.44891 8.25 8.63968 8.17098 8.78033 8.03033C8.92098 7.88968 9 7.69891 9 7.5V6.75H11.25V7.5C11.25 7.69891 11.329 7.88968 11.4697 8.03033C11.6103 8.17098 11.8011 8.25 12 8.25C12.1989 8.25 12.3897 8.17098 12.5303 8.03033C12.671 7.88968 12.75 7.69891 12.75 7.5V6.75H15V7.5C15 7.69891 15.079 7.88968 15.2197 8.03033C15.3603 8.17098 15.5511 8.25 15.75 8.25C15.9489 8.25 16.1397 8.17098 16.2803 8.03033C16.421 7.88968 16.5 7.69891 16.5 7.5V6.75H18C18.1989 6.75 18.3897 6.82902 18.5303 6.96967C18.671 7.11032 18.75 7.30109 18.75 7.5V9.75H5.25V7.5ZM18.75 18C18.75 18.1989 18.671 18.3897 18.5303 18.5303C18.3897 18.671 18.1989 18.75 18 18.75H6C5.80109 18.75 5.61032 18.671 5.46967 18.5303C5.32902 18.3897 5.25 18.1989 5.25 18V11.25H18.75V18Z"
                        fill="#FB7D5B"
                      />
                    </svg>
                    March 20, 2021
                  </Box>
                  <Box className="flex font-light">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                        fill="#FCC43E"
                      />
                      <path
                        d="M15 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H15C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11Z"
                        fill="#FCC43E"
                      />
                    </svg>
                    09.00 - 10.00 AM
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="bg-[#FCC43E] w-[386px] my-5 rounded-3xl overflow-hidden h-[186px] flex flex-col justify-center items-end text-start">
              <Box className="w-[362px] h-[186px] bg-white flex flex-col justify-around items-start text-start">
                <Box className="ml-2 text-xl text-[#303972] font-bold">
                  Ancient History
                  <Typography className="font-extralight">
                    Class VII-B
                  </Typography>
                </Box>
                <Box className="text-[#303972] flex ml-2 gap-3 flex-col items-center justify-around">
                  <Box className="flex -ml-2 font-light">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M18 5.25H16.5V4.5C16.5 4.30109 16.421 4.11032 16.2803 3.96967C16.1397 3.82902 15.9489 3.75 15.75 3.75C15.5511 3.75 15.3603 3.82902 15.2197 3.96967C15.079 4.11032 15 4.30109 15 4.5V5.25H12.75V4.5C12.75 4.30109 12.671 4.11032 12.5303 3.96967C12.3897 3.82902 12.1989 3.75 12 3.75C11.8011 3.75 11.6103 3.82902 11.4697 3.96967C11.329 4.11032 11.25 4.30109 11.25 4.5V5.25H9V4.5C9 4.30109 8.92098 4.11032 8.78033 3.96967C8.63968 3.82902 8.44891 3.75 8.25 3.75C8.05109 3.75 7.86032 3.82902 7.71967 3.96967C7.57902 4.11032 7.5 4.30109 7.5 4.5V5.25H6C5.40326 5.25 4.83097 5.48705 4.40901 5.90901C3.98705 6.33097 3.75 6.90326 3.75 7.5V18C3.75 18.5967 3.98705 19.169 4.40901 19.591C4.83097 20.0129 5.40326 20.25 6 20.25H18C18.5967 20.25 19.169 20.0129 19.591 19.591C20.0129 19.169 20.25 18.5967 20.25 18V7.5C20.25 6.90326 20.0129 6.33097 19.591 5.90901C19.169 5.48705 18.5967 5.25 18 5.25ZM5.25 7.5C5.25 7.30109 5.32902 7.11032 5.46967 6.96967C5.61032 6.82902 5.80109 6.75 6 6.75H7.5V7.5C7.5 7.69891 7.57902 7.88968 7.71967 8.03033C7.86032 8.17098 8.05109 8.25 8.25 8.25C8.44891 8.25 8.63968 8.17098 8.78033 8.03033C8.92098 7.88968 9 7.69891 9 7.5V6.75H11.25V7.5C11.25 7.69891 11.329 7.88968 11.4697 8.03033C11.6103 8.17098 11.8011 8.25 12 8.25C12.1989 8.25 12.3897 8.17098 12.5303 8.03033C12.671 7.88968 12.75 7.69891 12.75 7.5V6.75H15V7.5C15 7.69891 15.079 7.88968 15.2197 8.03033C15.3603 8.17098 15.5511 8.25 15.75 8.25C15.9489 8.25 16.1397 8.17098 16.2803 8.03033C16.421 7.88968 16.5 7.69891 16.5 7.5V6.75H18C18.1989 6.75 18.3897 6.82902 18.5303 6.96967C18.671 7.11032 18.75 7.30109 18.75 7.5V9.75H5.25V7.5ZM18.75 18C18.75 18.1989 18.671 18.3897 18.5303 18.5303C18.3897 18.671 18.1989 18.75 18 18.75H6C5.80109 18.75 5.61032 18.671 5.46967 18.5303C5.32902 18.3897 5.25 18.1989 5.25 18V11.25H18.75V18Z"
                        fill="#FB7D5B"
                      />
                    </svg>
                    March 20, 2021
                  </Box>
                  <Box className="flex font-light">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                        fill="#FCC43E"
                      />
                      <path
                        d="M15 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H15C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11Z"
                        fill="#FCC43E"
                      />
                    </svg>
                    09.00 - 10.00 AM
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="bg-[#303972] w-[386px] mt-5 rounded-3xl overflow-hidden h-[186px] flex flex-col justify-center items-end text-start">
              <Box className="w-[362px] h-[186px] bg-white flex flex-col justify-around items-start text-start">
                <Box className="ml-2 text-xl text-[#303972] font-bold">
                  Ancient History
                  <Typography className="font-extralight">
                    Class VII-B
                  </Typography>
                </Box>
                <Box className="text-[#303972] flex ml-2 gap-3 flex-col items-center justify-around">
                  <Box className="flex -ml-2 font-light">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M18 5.25H16.5V4.5C16.5 4.30109 16.421 4.11032 16.2803 3.96967C16.1397 3.82902 15.9489 3.75 15.75 3.75C15.5511 3.75 15.3603 3.82902 15.2197 3.96967C15.079 4.11032 15 4.30109 15 4.5V5.25H12.75V4.5C12.75 4.30109 12.671 4.11032 12.5303 3.96967C12.3897 3.82902 12.1989 3.75 12 3.75C11.8011 3.75 11.6103 3.82902 11.4697 3.96967C11.329 4.11032 11.25 4.30109 11.25 4.5V5.25H9V4.5C9 4.30109 8.92098 4.11032 8.78033 3.96967C8.63968 3.82902 8.44891 3.75 8.25 3.75C8.05109 3.75 7.86032 3.82902 7.71967 3.96967C7.57902 4.11032 7.5 4.30109 7.5 4.5V5.25H6C5.40326 5.25 4.83097 5.48705 4.40901 5.90901C3.98705 6.33097 3.75 6.90326 3.75 7.5V18C3.75 18.5967 3.98705 19.169 4.40901 19.591C4.83097 20.0129 5.40326 20.25 6 20.25H18C18.5967 20.25 19.169 20.0129 19.591 19.591C20.0129 19.169 20.25 18.5967 20.25 18V7.5C20.25 6.90326 20.0129 6.33097 19.591 5.90901C19.169 5.48705 18.5967 5.25 18 5.25ZM5.25 7.5C5.25 7.30109 5.32902 7.11032 5.46967 6.96967C5.61032 6.82902 5.80109 6.75 6 6.75H7.5V7.5C7.5 7.69891 7.57902 7.88968 7.71967 8.03033C7.86032 8.17098 8.05109 8.25 8.25 8.25C8.44891 8.25 8.63968 8.17098 8.78033 8.03033C8.92098 7.88968 9 7.69891 9 7.5V6.75H11.25V7.5C11.25 7.69891 11.329 7.88968 11.4697 8.03033C11.6103 8.17098 11.8011 8.25 12 8.25C12.1989 8.25 12.3897 8.17098 12.5303 8.03033C12.671 7.88968 12.75 7.69891 12.75 7.5V6.75H15V7.5C15 7.69891 15.079 7.88968 15.2197 8.03033C15.3603 8.17098 15.5511 8.25 15.75 8.25C15.9489 8.25 16.1397 8.17098 16.2803 8.03033C16.421 7.88968 16.5 7.69891 16.5 7.5V6.75H18C18.1989 6.75 18.3897 6.82902 18.5303 6.96967C18.671 7.11032 18.75 7.30109 18.75 7.5V9.75H5.25V7.5ZM18.75 18C18.75 18.1989 18.671 18.3897 18.5303 18.5303C18.3897 18.671 18.1989 18.75 18 18.75H6C5.80109 18.75 5.61032 18.671 5.46967 18.5303C5.32902 18.3897 5.25 18.1989 5.25 18V11.25H18.75V18Z"
                        fill="#FB7D5B"
                      />
                    </svg>
                    March 20, 2021
                  </Box>
                  <Box className="flex font-light">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                        fill="#FCC43E"
                      />
                      <path
                        d="M15 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H15C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11Z"
                        fill="#FCC43E"
                      />
                    </svg>
                    09.00 - 10.00 AM
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Button className="font-semibold py-3 w-full rounded-full bg-[#4D44B5]/10 text-[#4D44B5]">
            View More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TeachersDetails;
