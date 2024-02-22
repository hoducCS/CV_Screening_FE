// import { AUTH } from "@/constants/apis";
// import { REFRESH_TOKEN } from "@/constants/cookie";
// import { LoginResponse } from "@/interfaces/general/fetch_response";
// import { getCookie } from "@/utils/cookie/getCookie";
// import { set_cookies } from "@/utils/cookie/setCookie";
// import { getRequestURL } from "@/utils/http";

// export const refreshToken = async (): Promise<LoginResponse> => {
//   const res = await fetch(getRequestURL(AUTH.REFRESH_TOKEN), {
//     method: "POST",
//     body: new URLSearchParams({
//       grant_type: "refresh_token",
//       refresh_token: getCookie(REFRESH_TOKEN)!,
//     }),
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//   });
//   if (!res.ok) {
//     throw new Error("Refresh token request failed");
//   }
//   const body = await res.json();
//   set_cookies(body);
//   return body;
// };
