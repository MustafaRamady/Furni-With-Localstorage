import React from "react";
import Landing from "./landing/landing";
import { Helmet } from "react-helmet-async";
import { Box, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MiscellaneousServicesOutlinedIcon from "@mui/icons-material/MiscellaneousServicesOutlined";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import testimonials from "../images/person-1.png";
import person1 from "../images/person_1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function Services() {
  let chooseUs = [
    { title: "Fast & Free Shipping", icon: LocalShippingOutlinedIcon },
    { title: "Easy to Shop", icon: ShoppingBagOutlinedIcon },
    { title: "24/7 Support", icon: MiscellaneousServicesOutlinedIcon },
    { title: "Hassle Free Returns", icon: KeyboardReturnOutlinedIcon },
    { title: "Fast & Free Shipping", icon: LocalShippingOutlinedIcon },
    { title: "Easy to Shop", icon: ShoppingBagOutlinedIcon },
    { title: "24/7 Support", icon: MiscellaneousServicesOutlinedIcon },
    { title: "Hassle Free Returns", icon: KeyboardReturnOutlinedIcon },
  ];
  return (
    <>
      <Helmet>
        <title>Services - Furni</title>
        <style type="text/css">{`
        

        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background-color : transparent ;
        
          /* Center slide text vertically */
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        
        
                `}</style>
      </Helmet>
      <Landing text="Services" />
      <Box sx={{ backgroundColor: "#eff2f1" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1 , auto)",
              sm: "repeat(2 , auto)",
              md: "repeat(4 , auto)",
            },
            gridGap: "25px",
            p: { xs: "50px 32px", md: "100px 70px" },
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
        <Box
          sx={{
            p: { xs: "100px 32px", md: "100px 70px " },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            fontFamily: "Arial",
          }}
        >
          <Typography variant="h4">Testimonials</Typography>

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Box>
                <p
                  style={{
                    color: "#555",
                    letterSpacing: "1px",
                    lineHeight: "1.6",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  “Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                  Aliquam vulputate velit“
                </p>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "30px 0px",
                  }}
                >
                  <img
                    src={testimonials}
                    alt=""
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                  />
                  <h4>Roqia Magdi</h4>
                  <p
                    style={{
                      color: "#555",
                      letterSpacing: "1px",
                      lineHeight: "1.6",
                    }}
                  >
                    CEO, Co-Founder, XYZ Inc.
                  </p>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <p
                  style={{
                    color: "#555",
                    letterSpacing: "1px",
                    lineHeight: "1.6",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  “Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                  Aliquam vulputate velit“
                </p>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "30px 0px",
                  }}
                >
                  <img
                    src={person1}
                    alt=""
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                  />
                  <h4>Mustafa Magdi</h4>
                  <p
                    style={{
                      color: "#555",
                      letterSpacing: "1px",
                      lineHeight: "1.6",
                    }}
                  >
                    CEO, Co-Founder, XYZ Inc.
                  </p>
                </Box>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </>
  );
}
