"use server";

import { AUTH} from "@/constants/apis";
// import {
//   HUMANTREE_ACCESS_TOKEN,
//   HUMANTREE_REFRESH_TOKEN,
//   HUMANTREE_ROLE,
// } from "@/constants/cookie";
import { LoginResponse } from "@/interfaces/general/fetch_response";
import { LoginSchema } from "@/schemas/user";
import { set_cookies } from "@/utils/cookie/setCookie";
import { http } from "@/utils/http";
import { z } from "zod";

export const login = async (data: z.infer<typeof LoginSchema>) => {
  const res = (await http.post(AUTH.LOGIN, new URLSearchParams(data), {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  })) as LoginResponse;
  return await set_cookies(res);
};



// export const register = async (data: registerDto) => {
//   return await http.post(AUTH.REGISTER, data);
// };

// export const forgotPassword = async (data: forgotPasswordDto) => {
//   return await http.post(AUTH.FORGOT_PASSWORD, data);
// };

// export const resetPassword = async (data: resetPasswordDto) => {
//   return await http.post(AUTH.RESET_PASSWORD, {
//     token: data.token,
//     password: data.password,
//   });
// };

// export const logout = async () => {
//   // delete refresh token from server
//   await http.post(USER.LOGOUT, undefined, {}, true);
//   cookies().delete(HUMANTREE_ACCESS_TOKEN);
//   cookies().delete(HUMANTREE_REFRESH_TOKEN);
//   cookies().delete(HUMANTREE_ROLE);
// };
