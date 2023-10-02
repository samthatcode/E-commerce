import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";

const ProtectedRoute = ({ roles, children }) => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  const isAuthenticated = user;
  const role = user ? user.role : null;

  // console.log("Is authenticated:", isAuthenticated);
  // console.log("Role:", role);

  // if not authenticated, redirect to login
  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  // if authenticated but role not allowed, redirect to appropriate page
  if (!roles.includes(role)) {
    if (role === "user") {
      navigate("/login");
    }
    return null;
  }

  // if authenticated and role allowed, render children
  return children;
};

export default ProtectedRoute;
