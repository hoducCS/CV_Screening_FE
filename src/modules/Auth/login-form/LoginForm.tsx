"use client";

import { Button, Checkbox, FormControlLabel, IconButton, InputAdornment, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,  
} from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex justify-center">
      <div className="w-3/4 flex flex-col items-center gap-12">
        <Image
          className="mt-16"
          alt="Logo"
          src={"/images/auth/logo.svg"}
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-5">
          <TextField
            id="username"
            className="rounded-md w-full bg-white"
            size="small"
            type={"text"}
            placeholder={"Username"}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={handleClickShowPassword} edge="start">
                    <PersonOutlineOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="password"
            className="rounded-md w-full bg-white"
            size="small"
            type={showPassword ? "text" : "password"}
            placeholder={"Password"}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={handleClickShowPassword} edge="start">
                    <LockOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel control={<Checkbox/>} label="Save password" />
          <Button variant="outlined" sx={{backgroundColor: '#264eca !important', color:'white' }}>Login</Button>
          <Link href="#" className="text-end italic text-primary hover:opacity-70">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
}
