import React from "react";
import Landing from "./landing/landing";
import { Helmet } from "react-helmet-async";
import { Box, Button, TextField } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  let navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Contact Us - Furni</title>
      </Helmet>
      <Landing text="Contact Us" />
      <Box
        sx={{
          backgroundColor: "#eff2f1",
          p: { xs: "50px 32px", md: "100px 70px" },
          display: "flex ",
          alignItems: "center",
          justifyContent: { xs: "flex-start", md: "center" },
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" },
            gap: "50px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Arial",
              gap: "15px",
            }}
          >
            <LocationOnIcon
              sx={{
                backgroundColor: "#3b5d50",
                color: "#fff",
                padding: "15px",
              }}
            />
            <Box sx={{ fontSize: "14px", color: "#555" }}>
              <p>43 Raymouth Rd. Baltemoer, London 3910</p>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",

              fontFamily: "Arial",
            }}
          >
            <EmailIcon
              sx={{
                backgroundColor: "#3b5d50",
                color: "#fff",
                padding: "15px",
              }}
            />
            <Box sx={{ fontSize: "14px", color: "#555" }}>
              <p>info@yourdomain.com</p>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
              fontFamily: "Arial",
            }}
          >
            <LocalPhoneIcon
              sx={{
                backgroundColor: "#3b5d50",
                color: "#fff",
                padding: "15px",
              }}
            />
            <Box sx={{ fontSize: "14px", color: "#555" }}>
              <p>+1 294 3925 3939</p>
            </Box>
          </Box>
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "100%" },
            p: "50px 0px",
            display: "flex",
            flexDirection: "column",
          }}
          noValidate
          autoComplete="off"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "25px", md: "0px" },
            }}
          >
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              sx={{ width: { xs: "100%", md: "350px" } }}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              sx={{ width: { xs: "100%", md: "350px" } }}
            />
          </Box>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            component="input:email"
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
          />
          <Button
            style={{
              color: "#fff",
              backgroundColor: "#2f2f2f",
              padding: "8px 20px",
              borderRadius: "25px",
              outline: "none",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: { xs: "12px", md: "18px" },
              marginRight: "15px",
              width: "fit-content",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </>
  );
}
