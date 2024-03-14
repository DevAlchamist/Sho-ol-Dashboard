import { Box } from "@mui/material";
import React from "react";

const MessageBox = () => {
  return (
    <div>
      {" "}
      <Box className="flex mr-2 my-5 justify-between items-center">
        <Box className="flex items-center">
          <Box className="lg:h-[60px] h-[30px] w-[30px] lg:w-[60px] bg-[#C1BBEB] rounded-full"></Box>
          <Box className="ml-3 text-sm lg:text-lg font-medium text-[#303972]">
            Samantha William
            <Box className="text-[#A098AE] font-extralight">class VII - A</Box>
          </Box>
        </Box>
        <Box className="lg:text-base text-xs flex flex-col items-end">
          <Box className="font-extralight ">
          12:45 Pm
          </Box>
          <Box className="lg:h-[24px] lg:w-[24px] h-[12px] w-[12px] lg:text-xs text-[8px] rounded-full flex items-center justify-center bg-[#FB7D5B]">2</Box>
        </Box>
      </Box>
    </div>
  );
};

export default MessageBox;
