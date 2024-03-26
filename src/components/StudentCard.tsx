import {
  MoreHoriz,
  MoreVert,
  MoreVertTwoTone,
  Phone,
} from "@mui/icons-material";
import Mail from "@mui/icons-material/Mail";
import { Box, IconButton } from "@mui/material";
import Link from "next/link";
import React from "react";

interface StudentCardProps {
  _id: any;
  name: string;
  subject: string;
  images?: ImageData;
}

const StudentCard = ({ _id, name, subject, images }: StudentCardProps) => {
  return (
    <Box className="h-fit lg:h-[352px] lg:col-span-3 col-span-12 rounded-lg w-full lg:w-[338px] bg-white p-2 flex items-center relative justify-center">
      <Link href={`/teachers/details/${_id}`}>
        <MoreHoriz className="absolute top-5 right-5" />
        <Box className="flex flex-col items-center justify-center">
          <Box className="lg:h-[120px] lg:w-[120px] w-[80px] h-[80px] bg-[#C1BBEB] rounded-full" />
          <Box className="text-center font-bold text-xl text-[#303972] mt-3">
            {name}
          </Box>
          <Box className="text-center mt-3 font-extralight text-[#303972]">
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
      </Link>
    </Box>
  );
};

export default StudentCard;
