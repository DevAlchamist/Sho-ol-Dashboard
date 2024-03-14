"use client";
import StudentCard from "@/components/StudentCard";
import usePagination from "@/components/pagination/PaginationComponent";
import {
  Add,
  ExpandMore,
  NotificationsActiveOutlined,
  Search,
} from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  FormControl,
  Menu,
  MenuItem,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
  subject: string;
}

const AllTeachers = () => {
  // more dropdown logic
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const demoData: Item[] = Array.from({ length: 48 }, (_, index) => ({
    id: index + 1,
    name: `Dimitres Viga ${index + 1}`,
    subject: `Mathematics ${index + 1}`,
  }));
  const itemsPerPage: number = 8;

  const { displayItems, totalPages, currentPage, setPage, handleChange } =
    usePagination<Item>(demoData, itemsPerPage);

  const renderItems = (items: Item[]): JSX.Element[] => {
    return items.map((item) => (
      <StudentCard key={item.id} subject={item.subject} name={item.name} />
    ));
  };
  return (
    <Box className="p-5 h-screen overflow-y-auto ">
      <Box className="p-5 flex justify-between items-center">
        <Box className="lg:text-4xl text-lg text-[#363B64] font-bold">
          Teachers
        </Box>
        <Box>
          <Box className="lg:flex hidden justify-around ">
            <Box className=" mx-3 w-[60px] h-[60px] flex items-center justify-center ">
              <Badge
                className="text-[#A098AE]"
                badgeContent={4}
                color="primary"
              >
                <NotificationsActiveOutlined className="h-[32px] w-[32px]" />
              </Badge>
            </Box>
            <Box className="w-[60px] h-[60px] mx-4 flex items-center justify-center ">
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
            <Box className="h-[60px] w-[60px] ml-3 bg-[#C1BBEB] rounded-full"></Box>
          </Box>
        </Box>
      </Box>
      <Box className="px-5 flex justify-end lg:justify-between items-center">
        <Box className=" relative bg-white w-[350px] border border-gray-300 hidden lg:flex rounded-full overflow-hidden">
          <FormControl>
            <Search className="h-8 w-8 text-[#4D44B5] absolute top-3 left-5" />
            <input className=" pl-14 h-[60px] outline-none" />
          </FormControl>
        </Box>
        <Box className="flex justify-end items-center">
          <Box className="mx-5 flex items-center">
            {" "}
            <Button
              sx={{ border: 1 }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="font-semibold text-xs lg:text-base border-[#4D44B5] border-2 text-[#4D44B5] w-auto lg:w-[207px] lg:h-[60px] h-auto rounded-full hover:text-white hover:bg-[#4D44B5]"
              endIcon={<ExpandMore />}
            >
              Newest
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Oldest</MenuItem>
              <MenuItem onClick={handleClose}>Topper</MenuItem>
            </Menu>
          </Box>
          <Button
            sx={{ border: 1 }}
            className="font-semibold text-xs lg:text-base border-[#4D44B5]  hover:bg-white  hover:text-[#4D44B5] w-auto lg:w-[207px] lg:h-[60px]  h-auto rounded-full text-white bg-[#4D44B5]"
            startIcon={<Add />}
          >
            Delete
          </Button>
        </Box>
      </Box>
      {/* Pagination Part */}
      <Box className=" my-5 gap-5   p-5 grid grid-cols-12">
        {renderItems(displayItems)}
      </Box>
      <Box className="flex justify-center lg:justify-between items-center">
        <Box className="lg:flex hidden text-[#303972]">
          Showing From {currentPage} from {totalPages} data
        </Box>
        <Box className="">
          {/* Pagination component */}
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChange}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AllTeachers;
