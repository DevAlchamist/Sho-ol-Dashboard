import { PlusOne, Search } from "@mui/icons-material";
import { Box, Button, FormControl } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ContactsBar from "./contactsBar";
import MessageBox from "./MessageBox";

const Contacts = () => {
  return (
    <Box className="gap-10 mx-5 flex justify-around items-center">
      <Box className="w-full p-5 bg-white h-[773px] rounded-3xl flex-col items-center">
        <Box className="flex p-5 justify-between items-center">
          <Box className="text-xl flex text-[#303972] font-bold flex-col">
            Contacts
            <span className="text-[#A098AE] text-sm">
              You have
              <span className="text-[#303972] font-bold"> 741 </span>
              contacts
            </span>
          </Box>
          <Box className="w-[60px] h-[60px] bg-[#4D44B5] rounded-full flex items-center justify-center text-white">
            <AddIcon />
          </Box>
        </Box>
        <Box className="flex justify-center items-center">
          <Box className="relative w-[390px] border border-gray-300 hidden lg:flex rounded-full overflow-hidden">
            <FormControl>
              <Search className="h-8 w-8 absolute top-3 left-5" />
              <input className=" pl-14 h-[50px] outline-none" />
            </FormControl>
          </Box>
        </Box>
        <Box className="h-[428px] w-full overflow-y-auto ml-3 mt-8 mb-4">
          <ContactsBar />
          <ContactsBar />
          <ContactsBar />
          <ContactsBar />
          <ContactsBar />
          <ContactsBar />
          <ContactsBar />
          <ContactsBar />
          <ContactsBar />
        </Box>
        <Box>
          <Button className="w-full my-5 py-5 rounded-full text-lg font-semibold text-[#4D44B5] bg-[#4D44B51A]">
            View More
          </Button>
        </Box>
      </Box>
      <Box className="w-full p-5 flex-col bg-white h-[773px] rounded-3xl flex items-center">
        <Box className="text-xl text-[#303972] text-start w-full p-5 font-semibold">Messages</Box>
        <Box className=" flex justify-center items-center">
          <Box className=" relative w-[390px] border border-gray-300 hidden lg:flex rounded-full overflow-hidden">
            <FormControl>
              <Search className="h-8 w-8 absolute top-3 left-5" />
              <input className=" pl-14 h-[50px] outline-none" />
            </FormControl>
          </Box>
        </Box>
        <Box className="h-[480px] w-full px-2 overflow-y-auto ml-3 mt-8 mb-4">
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
        </Box>
      <Box className="w-full">
          <Button className="w-full my-5 py-5 rounded-full text-lg font-semibold text-[#4D44B5] bg-[#4D44B51A]">
            View More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contacts;
