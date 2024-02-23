import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";

export function ProtectedRoutesForAdmin({ children }) {
  const { isLogin } = useContext(MyContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (isLogin === true || token) {
    return <div>{children}</div>;
  } else {
    useEffect(() => navigate("/panel"), []);
    return null;
  }
}

export function ProtectedRoutesForNonAdmin({ children }) {
  const { isLogin } = useContext(MyContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (!isLogin === true && !token) {
    return <div>{children}</div>;
  } else {
    useEffect(() => navigate("/admin"), []);
    return null;
  }
}
