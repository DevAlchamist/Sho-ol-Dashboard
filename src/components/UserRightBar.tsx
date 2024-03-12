import {
  MoreHoriz,
  Notifications,
  NotificationsActiveOutlined,
} from "@mui/icons-material";
import { Badge, Box, Button } from "@mui/material";
import React from "react";
import bgImage from "@/assets/Masking.png";
import Image from "next/image";
import Timeline from "@mui/lab/Timeline";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

const UserRightBar = () => {
  return (
    <Box className="p-5 flex w-full flex-col items-start justify-start">
      <Box className="flex  w-full items-center justify-end">
        <Box className="w-[60px] h-[60px] flex items-center justify-center ">
          <Badge className="text-[#A098AE]" badgeContent={4} color="primary">
            <NotificationsActiveOutlined className="h-[32px] w-[32px]" />
          </Badge>
        </Box>
        <Box className="w-[60px] h-[60px] flex items-center justify-center ">
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
        <Box className="h-[60px] w-[60px] bg-[#C1BBEB] rounded-full"></Box>
      </Box>
      <Box className="relative bg-[#4D44B5] my-10 w-full rounded-3xl rounded-br-none">
        <Image src={bgImage} alt="bg-image" className="" />
        <Box className=" top-0 text-white w-full absolute p-5">
          <Box className="flex justify-between items-center">
            <Box>Your Plain</Box>
            <MoreHoriz />
          </Box>
          <Box className="text-4xl font-bold mt-3">Name</Box>
          <ul
            style={{ listStyle: "inside" }}
            className="mt-10 font-semibold text-xl"
          >
            <li>50 GB Storage</li>
            <li>Limited Features</li>
          </ul>
          <Box className="mt-5">
            Upgrade to Premium Plan to get more Features & Storage memory{" "}
          </Box>
          <Button className="bg-white text-[#363B64] py-2 px-4 rounded-full mt-5">
            Upgrade Plan
          </Button>
        </Box>
      </Box>
      <Box className="">
        <Box className="mb-5 text-[#363B64] text-3xl font-bold">
          Latest Activity
        </Box>
        <Box className="">
        </Box>
      </Box>
    </Box>
  );
};

export default UserRightBar;
