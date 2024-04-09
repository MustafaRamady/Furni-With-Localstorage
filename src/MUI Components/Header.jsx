import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useNavigate } from "react-router-dom";
export default function Header({ icon }) {
  let [myData, setMyData] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:3000/myData")
    //   .then((res) => res.json())
    //   .then((data) => setMyData(data));
    // setMyData(JSON.parse(window.localStorage.Product));
    window.localStorage.Product != null
      ? setMyData(JSON.parse(window.localStorage.Product))
      : setMyData([]);
  }, [myData]);
  let nav = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "About Us", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Contact Us", path: "/contact" },
  ];
  let navigate = useNavigate();

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          padding: { xs: "0px 10px", md: "0px 45px" },
          backgroundColor: "#3b5d50",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontSize: "35px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Furni.
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {nav.map((ele) => {
              return (
                <Typography
                  sx={{
                    textDecoration: "none",
                    fontSize: "18px",
                    margin: "0px 10px",
                    color: "rgba(255, 255, 255, .55)",
                    fontFamily: "Arial",
                    transition: "0.5s",
                    "&:hover": {
                      color: "#fff",
                    },
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate(ele.path);
                  }}
                >
                  {ele.title}
                </Typography>
              );
            })}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              edge="end"
              aria-haspopup="true"
              color="inherit"
              sx={{
                mr: { xs: "3px", md: "10px" },
                display: { xs: "block", md: "none" },
                p: "0px",
              }}
            >
              {icon}
            </IconButton>
            <IconButton
              edge="end"
              aria-haspopup="true"
              color="inherit"
              sx={{ mr: { xs: "3px", md: "10px" }, p: "0px" }}
            >
              <PersonOutlinedIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ position: "relative" }}
              onClick={() => {
                navigate("/cart");
              }}
            >
              <ShoppingBagOutlinedIcon />
              <span
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  fontSize: "15px",
                  backgroundColor: "red",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                {myData.length}
              </span>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
