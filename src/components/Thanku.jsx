import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function Thanku() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#ece6d8",
      }}
    >
      <h1>🎉</h1>
      <h1>Thank u Your Donation is recieved </h1>
      <Button onClick={() => navigate("/")}>Back To Home</Button>
    </div>
  );
}

export default Thanku;
