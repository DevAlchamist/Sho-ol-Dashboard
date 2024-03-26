"use client";
import type { Metadata } from "next";
import "./globals.css";
import { Box, Button, Drawer } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import { Provider, useSelector } from "react-redux";
import store from "@/Store/store";
import Register from "./register/page";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      // If token exists, set isLoggedIn to true
      setIsLoggedIn(true);
    } else {
      // If token does not exist, redirect to the register page
      router.push("/register");
    }
  }, [router]);
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          {isLoggedIn ? (
            <Box className="grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-1 h-screen">
              <Box className="col-span-2 xl:flex lg:flex hidden flex-col w-full justify-start items-center bg-[#4D44B5]">
                <Sidebar />
              </Box>
              <Box className=" col-span-10 bg-[#F3F4FF]">{children}</Box>
            </Box>
          ) : <Register/>}
        </body>
      </html>
    </Provider>
  );
}
