"use client";

import { Button } from "@mui/material";

import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/controls/input";

export default function ForgotPasswordForm() {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 flex flex-col items-center gap-10">
        <Image
          className="mt-16"
          alt="Logo"
          src={"/images/auth/logo.svg"}
          width={100}
          height={100}
        />
        <p className="text-primary text-lg font-bold">FORGOT PASSWORD</p>
        <div className="flex flex-col gap-5 w-full ">
          <Input
            label="Email"
            placeholder="Please type here"
            className=""
          />
          <Button variant="outlined" sx={{backgroundColor: '#264eca !important', color:'white' }}>NEXT</Button>
        </div>
      </div>
    </div>
  );
}
