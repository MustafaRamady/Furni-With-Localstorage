import { Box, Button, Typography } from "@mui/material";
import couch from "../../images/couch.png";

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing({ text }) {
  let navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "#3b5d50",
        height: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: { xs: "0px 32px", md: "0px 70px" },
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "25px", md: "45px" },
            fontWeight: "bold",
          }}
        >
          {text}
        </Typography>

        <p
          style={{
            color: "rgba(255, 255, 255, .55)",
            marginBottom: "25px",
            fontFamily: "Arial",
            letterSpacing: "1px",
          }}
        >
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet <br />
          velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Button
            style={{
              backgroundColor: "#f9bf29",
              color: "#2f2f2f",
              padding: "8px 20px",
              borderRadius: "25px",
              outline: "none",
              border: "1px solid #2f2f2f",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "18px",
              marginRight: "15px",
              width: "160px",
            }}
            onClick={() => {
              navigate("/shop");
            }}
          >
            Shop Now
          </Button>
          <Button
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              padding: "8px 20px",
              borderRadius: "25px",
              outline: "none",
              border: "1px solid rgba(255, 255, 255, .55)",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "18px",
              width: "160px",
            }}
            onClick={() => {
              navigate("/shop");
            }}
          >
            Explore
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <img
          src={couch}
          alt=""
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
    </Box>
  );
}
