import {
    ACCESS_TOKEN,
    ACCESS_TOKEN_EXPIRED,
    REFRESH_TOKEN,
  } from "@/constants/cookie";
//   import { refreshToken } from "@/services/refresh/refresh";
  import { cookies } from "next/headers";
  import { getCookie } from "../cookie/getCookie";
  const MAX_TIME_REFRESH = 60 * 1000; // Use this to determine when to refresh tokens
  let isRefreshed = false;
  
  export const getRequestURL = (url: string) => {
    if (!url.startsWith("/")) {
      url = `/${url}`;
    }
    return `${process.env.API_URL}${url}`;
  };
  
  const httpRequest = async <TEntity>(
    url: string,
    method: string,
    data: TEntity,
    options: RequestInit = {},
    isNeedAuth = false
  ) => {
    if (isNeedAuth && !isRefreshed) {
      isRefreshed = true;
      const tokenExpired = getCookie(ACCESS_TOKEN_EXPIRED);
      // if (
      //   (!tokenExpired ||
      //     parseInt(tokenExpired) - (Date.now() + MAX_TIME_REFRESH) < 0) &&
      //   getCookie(REFRESH_TOKEN)
      // ) {
      //   try {
      //     await refreshToken();
      //   } catch (error) {
      //     cookies().delete(ACCESS_TOKEN);
      //     cookies().delete(REFRESH_TOKEN);
      //   }
      //   isRefreshed = false;
      // }
    }
    let request_body = data;
    if (!options.headers && method !== "GET") {
      options.headers = {
        "Content-Type": "application/json",
      };
      request_body = JSON.stringify(data) as any;
    }
    const headers = {
      Accept: "application/json",
      ...options.headers,
      ...(isNeedAuth &&
        getCookie(ACCESS_TOKEN) && {
          Authorization: `Bearer ${getCookie(ACCESS_TOKEN)}`,
        }),
    };
    const requestOptions: RequestInit = {
      method,
      ...(method !== "GET" && { cache: "no-store" }),
      //credentials: "include", must be removed if we want to cache the response
      headers,
      body: request_body as any,
      ...options,
    };
    const res = await fetch(getRequestURL(url), requestOptions);
    const body = await res.json();
  
    if (!res.ok) {
      throw new Error(body.detail);
    }
    return body;
  };
  
  export const http = {
    get: (url: string, options?: RequestInit, isNeedAuth: boolean = false) =>
      httpRequest(url, "GET", undefined, options, isNeedAuth),
    post: <TEntity>(
      url: string,
      data: TEntity,
      options?: RequestInit,
      isNeedAuth: boolean = false
    ) => httpRequest(url, "POST", data, options, isNeedAuth),
    put: <TEntity>(
      url: string,
      data: TEntity,
      options?: RequestInit,
      isNeedAuth: boolean = false
    ) => httpRequest(url, "PUT", data, options, isNeedAuth),
    delete: (url: string, options?: RequestInit, isNeedAuth: boolean = false) =>
      httpRequest(url, "DELETE", undefined, options, isNeedAuth),
    patch: <TEntity>(
      url: string,
      data: TEntity,
      options?: RequestInit,
      isNeedAuth: boolean = false
    ) => httpRequest(url, "PATCH", data, options, isNeedAuth),
  };
  