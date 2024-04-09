import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
export default function Footer() {
  let navigate = useNavigate();
  let pages = [
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Shop",
      path: "/shop",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
  ];
  let support = [
    { title: "Support", path: "/" },
    { title: "Knowledge Base", path: "/" },
    { title: "Live Chat", path: "/" },
  ];
  let jobs = [
    { title: "Jobs", path: "/" },
    { title: "Out Team", path: "/" },
    { title: "Leadership", path: "/" },
    { title: "Privacy Policy", path: "/" },
  ];
  return (
    <footer style={{ padding: "100px 0px 0px 0px" }}>
      <Box sx={{ padding: { xs: "0px 32px", md: "0px 70px" } }}>
        <Box
          sx={{
            color: "#3b5d50",
            fontFamily: "Arial",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <EmailIcon />{" "}
          <h2 style={{ fontSize: "22px" }}>Subscribe To Newsletter</h2>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            sx={{ width: "230px" }}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            sx={{ width: "230px" }}
          />
          <Button
            sx={{}}
            onClick={() => {
              navigate("/");
            }}
          >
            <SendIcon
              sx={{
                backgroundColor: "#3b5d50",
                color: "#fff",
                padding: "15px",
                borderRadius: "15px",
              }}
            />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          borderBottom: "1px solid black",
          p: { xs: "30px 32px", md: "30px 70px" },
        }}
      >
        <h1 style={{ color: "#3b5d50", fontFamily: "Arial" }}>Furni.</h1>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "calc(100% / 4)" },
              borderBottom: { xs: "1px solid #111", md: "none" },
              mb: { xs: "5px", md: "0px" },
            }}
          >
            <p
              style={{
                fontFamily: "Arial",
                fontSize: "13px ",
                lineHeight: "1.5",
                letterSpacing: "0.75px",
              }}
            >
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant
            </p>
          </Box>
          <Box
            sx={{
              borderBottom: { xs: "1px solid #111", md: "none" },
              mb: { xs: "5px", md: "0px" },
            }}
          >
            {pages.map((ele) => {
              return (
                <Typography
                  sx={{ mb: "20px", cursor: "pointer", fontSize: "15px" }}
                  onClick={() => {
                    navigate(ele.path);
                  }}
                >
                  {ele.title}
                </Typography>
              );
            })}
          </Box>
          <Box
            sx={{
              borderBottom: { xs: "1px solid #111", md: "none" },
              mb: { xs: "5px", md: "0px" },
            }}
          >
            {support.map((ele) => {
              return (
                <Typography
                  sx={{ mb: "20px", cursor: "pointer", fontSize: "15px" }}
                  onClick={() => {
                    navigate(ele.path);
                  }}
                >
                  {ele.title}
                </Typography>
              );
            })}
          </Box>
          <Box
            sx={{
              borderBottom: { xs: "1px solid #111", md: "none" },
              mb: { xs: "5px", md: "0px" },
            }}
          >
            {jobs.map((ele) => {
              return (
                <Typography
                  sx={{ mb: "20px", cursor: "pointer", fontSize: "15px" }}
                  onClick={() => {
                    navigate(ele.path);
                  }}
                >
                  {ele.title}
                </Typography>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial",
          fontSize: { xs: "9px", md: "15px" },
          fontWeight: "100",
          color: "#555",
        }}
      >
        <p>
          Copyright ©2024. All Rights Reserved. — Designed with love by
          Untree.co
        </p>
        <p>Developed By Mustafa Ramady</p>
      </Box>
    </footer>
  );
}
