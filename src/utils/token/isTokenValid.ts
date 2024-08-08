import { JwtPayload, jwtDecode } from "jwt-decode";

export const isTokenValid = (token: string | null): boolean => {
  if (!token) {
    return false;
  }

  try {
    const decodedToken = jwtDecode<JwtPayload & { exp: number }>(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken.exp ? decodedToken.exp > currentTime : false;
  } catch (error) {
    console.error("Invalid token", error);
    return false;
  }
};
