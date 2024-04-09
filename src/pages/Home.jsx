import React, { useEffect, useState } from "react";
import Landing from "./landing/landing";
import prodcut1 from "../images/product-1.png";
import prodcut2 from "../images/product-2.png";
import prodcut3 from "../images/product-3.png";
import whyChooseUs from "../images/why-choose-us-img.jpg";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MiscellaneousServicesOutlinedIcon from "@mui/icons-material/MiscellaneousServicesOutlined";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import { Helmet } from "react-helmet-async";
export default function Home() {
  let [myData, setMyData] = useState([]);
  useEffect(() => {
    window.localStorage.Product != null
      ? setMyData(JSON.parse(window.localStorage.Product))
      : setMyData([]);
  }, [myData]);
  let txt = `Modern Interior`;
  let product = [
    { title: "Nordic Chair", price: 50, img: prodcut1 },
    { title: "Kruzo Aero Chair", price: 78, img: prodcut2 },
    { title: "Ergonomic Chair", price: 43, img: prodcut3 },
  ];
  let chooseUs = [
    { title: "Fast & Free Shipping", icon: LocalShippingOutlinedIcon },
    { title: "Easy to Shop", icon: ShoppingBagOutlinedIcon },
    { title: "24/7 Support", icon: MiscellaneousServicesOutlinedIcon },
    { title: "Hassle Free Returns", icon: KeyboardReturnOutlinedIcon },
  ];
  return (
    <>
      <Helmet>
        <title>Home - Furni</title>
      </Helmet>
      <Landing text={txt} />
      <Box sx={{ backgroundColor: "#eff2f1" }}>
        <Box
          sx={{
            p: { xs: "100px 32px", md: "100px 70px" },
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <Box>
            <h1 style={{ fontFamily: "Arial", letterSpacing: "1px" }}>
              Crafted with excellent material.
            </h1>
            <p
              style={{
                fontFamily: "Arial",
                lineHeight: "1.5",
                color: "#444",
                letterSpacing: "1px",
              }}
            >
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <Button
              style={{
                backgroundColor: "#333",
                color: "#fff",
                padding: "8px 20px",
                borderRadius: "25px",
                outline: "none",
                border: "1px solid rgba(255, 255, 255, .55)",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "18px",
              }}
              onClick={() => {}}
            >
              Explore
            </Button>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1 , auto)",
                lg: "repeat(3 , auto)",
              },
            }}
          >
            {product.map((ele) => {
              return (
                <Card
                  sx={{
                    width: { xs: "100%", lg: "220px" },
                    m: { xs: "8px 0px", lg: "0px 25px" },
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image={ele.img}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography gutterBottom variant="h5">
                      {ele.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{ fontSize: "18px ", fontWeight: "bold" }}
                    >
                      ${ele.price}.00
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{ color: "#333" }}
                      onClick={() => {
                        // fetch("http://localhost:3000/myData", {
                        //   method: "POST",
                        //   headers: {
                        //     "Content-Type": "application/json",
                        //   },
                        //   body: JSON.stringify({
                        //     title: ele.title,
                        //     price: +ele.price,
                        //     img: ele.img,
                        //   }),
                        // });
                        let newProduct = {
                          title: ele.title,
                          price: ele.price,
                          img: ele.img,
                        };
                        myData.push(newProduct);
                        window.localStorage.setItem(
                          "Product",
                          JSON.stringify(myData)
                        );
                      }}
                    >
                      <AddShoppingCartOutlinedIcon />
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </Box>
        </Box>
        <Box
          sx={{
            padding: { xs: "50px 32px", md: "50px 70px" },
            display: "flex",
            justifyContent: { xs: "normal", md: "space-between" },
            flexDirection: { xs: "column", md: "row" },
            gap: "30px",
          }}
        >
          <Box>
            <Box sx={{ mb: "25px" }}>
              <h2
                style={{ color: "#444", fontFamily: "Arial", fontSize: "30px" }}
              >
                Why Choose Us
              </h2>
              <p
                style={{
                  color: "#444",
                  fontFamily: "Arial",
                  letterSpacing: "0.75px",
                  lineHeight: "1.5",
                }}
              >
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(1 , auto)",
                  md: "repeat(2 , auto)",
                },
                gridGap: "25px",
              }}
            >
              {chooseUs.map((ele) => {
                return (
                  <Box sx={{ fontFamily: "Arial" }}>
                    <ele.icon sx={{ fontSize: "40px" }} />
                    <h4 style={{ color: "#444" }}>{ele.title}</h4>
                    <p
                      style={{
                        color: "#555",
                        letterSpacing: "1px",
                        lineHeight: "1.6",
                      }}
                    >
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </p>
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <img
              src={whyChooseUs}
              alt=""
              style={{
                width: "500px",
                heigh: "900px",
                borderRadius: "30px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
