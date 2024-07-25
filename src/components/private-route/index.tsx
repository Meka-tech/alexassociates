import React, { ReactNode } from "react";
import { useAuth } from "../../context/authContext";
import { Navigate, redirect } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/" replace={true} />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
