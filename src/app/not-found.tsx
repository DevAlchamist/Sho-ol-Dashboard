import { Box } from "@mui/material";
import Image from "next/image";
import Img from "@/assets/Group.png";

function NotFound() {
  return <Box className="overflow-y-auto h-screen">
    <Image src={Img} alt="Not-Found-Image" className=""/>
  </Box>;
}

export default NotFound;
