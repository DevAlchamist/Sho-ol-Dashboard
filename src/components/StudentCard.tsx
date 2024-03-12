import {
  MoreHoriz,
  MoreVert,
  MoreVertTwoTone,
  Phone,
} from "@mui/icons-material";
import Mail from "@mui/icons-material/Mail";
import { Box, IconButton } from "@mui/material";
import React from "react";

interface StudentCardProps {
  name: string;
  subject: string;
  images?: ImageData;
}

const StudentCard = ({name,subject,images}:StudentCardProps) => {
  return (
    <Box className="h-[352px] col-span-3 rounded-lg w-[338px] bg-white p-2 flex items-center relative justify-center">
      <MoreHoriz className="absolute top-5 right-5" />
      <Box className="flex flex-col items-center justify-center">
        <Box className="h-[120px] w-[120px] bg-[#C1BBEB] rounded-full" />
        <Box className="text-center font-bold text-xl text-[#303972] mt-3">
          {name}
        </Box>
        <Box className="text-center font-extralight text-[#303972]">
          {subject}
        </Box>
        <Box className="flex mt-5 justify-center items-center gap-5">
          <IconButton
            sx={{ border: 1 }}
            className="bg-[#4D44B5] text-white hover:text-[#4D44B5] hover:bg-white border-[#4D44B5]"
          >
            <Phone />
          </IconButton>
          <IconButton
            sx={{ border: 1 }}
            className="bg-[#4D44B5] text-white hover:text-[#4D44B5] hover:bg-white border-[#4D44B5]"
          >
            <Mail />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default StudentCard;
