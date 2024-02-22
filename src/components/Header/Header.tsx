"use client"

import { Button, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event : any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log("abc")
    setAnchorEl(null);
  };
  return (
    <>
      <div className="flex justify-between">
        <Image
          alt="Logo"
          src={"/images/auth/logo.svg"}
          width={100}
          height={100}
        />
        <div className="flex gap-5 items-center">
          <Button >CV-JD Matching</Button>
          <Button
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            History
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Matching History</MenuItem>
            <MenuItem onClick={handleClose}>Extracting History</MenuItem>
          </Menu>
          <Button >Dashborad</Button>
          <Button
            className="rounded-2xl "
          >
            Signup
          </Button>
          <Button
            className="rounded-2xl"
            variant="contained"
            sx={{backgroundColor: '#264eca !important', paddingX: '2rem'}}
          >
            Login   
          </Button>
        </div>
      </div>
    </>
  );
}
