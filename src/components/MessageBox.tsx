import { Box } from "@mui/material";
import React from "react";

const MessageBox = () => {
  return (
    <div>
      {" "}
      <Box className="flex mr-2 my-5 justify-between items-center">
        <Box className="flex items-center">
          <Box className="h-[60px] w-[60px] bg-[#C1BBEB] rounded-full"></Box>
          <Box className="ml-3 text-lg font-medium text-[#303972]">
            Samantha William
            <Box className="text-[#A098AE] font-extralight">class VII - A</Box>
          </Box>
        </Box>
        <Box className=" flex flex-col items-end">
          <Box className="font-extralight">
          12:45 Pm
          </Box>
          <Box className="h-[24px] w-[24px] rounded-full flex items-center justify-center bg-[#FB7D5B]">2</Box>
        </Box>
      </Box>
    </div>
  );
};

export default MessageBox;
