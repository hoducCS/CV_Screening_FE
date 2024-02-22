"use client";

import { Button } from "@mui/material";

import Image from "next/image";
import { useRef } from "react";

export default function OtpForm() {
  const list = [...Array(6)];
  const inputRef = useRef([]);

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
        <p className="text-primary text-lg font-bold">OTP AUTHENTICATION</p>
        <span>
          Sent to <span className="text-primary">a@gmail.com </span>
        </span>
        <div className="w-full">
          <p className="text-primary">OTP</p>
          <div
            id="otp"
            className="flex flex-row justify-center text-center px-2 mt-5"
          >
            {list.map((item, index) => (
              <input
                key={index}
                placeholder="-"
                className="m-2 border h-10 w-10 text-center form-control rounded"
                type="text"
                maxLength={1}
              />
            ))}
          </div>
          <div className="w-full mt-5">
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#264eca !important",
                color: "white",
                width: "100%",
              }}
            >
              NEXT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
