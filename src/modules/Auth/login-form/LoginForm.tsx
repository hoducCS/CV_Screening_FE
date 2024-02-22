"use client";

import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
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
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { LockSimple, User } from "@phosphor-icons/react/dist/ssr";
import { useLogin } from "@/services/auth";

export default function LoginForm() {
  const { login, isPending, error } = useLogin() as {
    login: (data: z.infer<typeof LoginSchema>) => Promise<void>;
    isPending: boolean;
    error: any;
  };
  
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    try {
      await login(data);
    } catch (error) {
      console.log(error);
    }
  };


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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5 w-full"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <User size={26} weight="thin" />
                      </div>
                      <Input
                        required
                        placeholder="Username"
                        {...field}
                        className=""
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              rules={{ required: "Username is require" }}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <LockSimple size={26} weight="thin" />
                      </div>
                      <Input
                        {...field}
                        placeholder="Password"
                        required
                        type="password"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Save password"
              className="text-primary-main"
            />
            <Button
              type="submit"
              variant="outlined"
              sx={{ backgroundColor: "#264eca !important", color: "white" }}
            >
              Login
            </Button>
            <Link
              href="#"
              className="text-end italic text-primary-main hover:opacity-70"
            >
              Forgot Password?
            </Link>
          </form>
        </Form>
        {/* 
          <Button variant="outlined" sx={{backgroundColor: '#264eca !important', color:'white' }}>Login</Button>
           */}
      </div>
    </div>
  );
}
