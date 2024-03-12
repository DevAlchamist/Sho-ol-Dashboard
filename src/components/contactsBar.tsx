import { Box } from "@mui/material";
import React from "react";

const ContactsBar = () => {
  return (
    <Box className="flex mr-2 my-5 justify-between items-center">
      <Box className="flex items-center">
        <Box className="h-[60px] w-[60px] bg-[#C1BBEB] rounded-full"></Box>
        <Box className="ml-3 text-lg font-medium text-[#303972]">
          Samantha William
          <Box className="text-[#A098AE] font-extralight">class VII - A</Box>
        </Box>
      </Box>
      <Box className="">
        <Box className="h-[60px] hover:text-white hover:bg-[#4D44B5] w-[60px] flex items-center justify-center border-gray-300 border-3 rounded-full">
          <svg
            width="30"
            height="22"
            viewBox="0 0 30 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.6666 0.333252H4.33325C3.27239 0.333252 2.25497 0.754679 1.50482 1.50482C0.754679 2.25497 0.333252 3.27239 0.333252 4.33325V17.6666C0.333252 18.7274 0.754679 19.7449 1.50482 20.495C2.25497 21.2452 3.27239 21.6666 4.33325 21.6666H25.6666C26.7274 21.6666 27.7449 21.2452 28.495 20.495C29.2452 19.7449 29.6666 18.7274 29.6666 17.6666V4.33325C29.6666 3.27239 29.2452 2.25497 28.495 1.50482C27.7449 0.754679 26.7274 0.333252 25.6666 0.333252ZM26.9999 17.3333L20.4666 11.4666L26.9999 6.89325V17.3333ZM2.99992 6.89325L9.53325 11.4666L2.99992 17.3333V6.89325ZM11.7733 13.0399L14.2399 14.7599C14.4631 14.9148 14.7283 14.9977 14.9999 14.9977C15.2716 14.9977 15.5367 14.9148 15.7599 14.7599L18.2266 13.0399L24.8932 18.9999H5.13325L11.7733 13.0399ZM4.33325 2.99992H25.6666C25.9142 3.0019 26.1564 3.07281 26.366 3.20469C26.5756 3.33657 26.7443 3.52421 26.8532 3.74658L14.9999 12.0399L3.14658 3.74658C3.25553 3.52421 3.42426 3.33657 3.63385 3.20469C3.84345 3.07281 4.08563 3.0019 4.33325 2.99992Z"
              fill="#A098AE"
            />
          </svg>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactsBar;
