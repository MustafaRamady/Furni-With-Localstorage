import React from "react";
import Header from "./MUI Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./MUI Components/Footer";
import { Box } from "@mui/material";
import Drrawer from "./MUI Components/Drawer";

export default function Root() {
  return (
    <>
      <Header icon={<Drrawer />} />

      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
