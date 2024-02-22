export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";
export const ROLE = "role";
export const ACCESS_TOKEN_EXPIRED = "accessTokenExpiredIn";

export const cookie_config = {
  path: "/",
  secure: true,
  sameSite: "strict" as "lax" | "strict" | "none" | undefined,
  httpOnly: true,
};