import type { Metadata } from "next";
import "./globals.css";
import { Box, Button, Drawer } from "@mui/material";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Box className="grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-1 h-screen">
          <Box className="col-span-2 xl:flex lg:flex hidden flex-col w-full justify-start items-center bg-[#4D44B5]">
            <Sidebar />
          </Box>
          <Box className=" col-span-7 bg-[#F3F4FF]">{children}</Box>
          <Box className="col-span-3 bg-white xl:flex lg:flex hidden"></Box>
        </Box>
      </body>
    </html>
  );
}
