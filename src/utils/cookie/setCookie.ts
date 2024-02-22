"use server";
import {
  ACCESS_TOKEN,
  ACCESS_TOKEN_EXPIRED,
  REFRESH_TOKEN,
  ROLE,
  cookie_config,
} from "@/constants/cookie";
import { LoginResponse } from "@/interfaces/general/fetch_response";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const set_cookies = async (
  res: LoginResponse,
  response?: NextResponse
) => {
  if (response) {
    // response.cookies.set(
    //   ACCESS_TOKEN_EXPIRED,
    //   `${Date.now() + res.access_token_max_age * 1000}`,
    //   {
    //     maxAge: res.access_token_max_age,
    //   }
    // );
    response.cookies.set(ACCESS_TOKEN, res.access_token, {
      ...cookie_config,
    });
    // response.cookies.set(REFRESH_TOKEN, res.refresh_token, {
    //   maxAge: res.refresh_token_max_age,
    //   ...cookie_config,
    // });
    // response.cookies.set(ROLE, res.user.role, {
    //   maxAge: res.refresh_token_max_age,
    //   ...cookie_config,
    // });

    response;
  } else {
    // cookies().set(
    //   ACCESS_TOKEN_EXPIRED,
    //   `${Date.now() + res.access_token_max_age * 1000}`,
    //   {
    //     maxAge: res.access_token_max_age,
    //   }
    // );
    // cookies().set(ACCESS_TOKEN, res.access_token, {
    //   maxAge: res.access_token_max_age,
    //   ...cookie_config,
    // });
    // cookies().set(REFRESH_TOKEN, res.refresh_token, {
    //   maxAge: res.refresh_token_max_age,
    //   ...cookie_config,
    // });
    // cookies().set(ROLE, res.user.role, {
    //   maxAge: res.refresh_token_max_age,
    //   ...cookie_config,
    // });
  }
};
