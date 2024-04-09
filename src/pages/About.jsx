import React from "react";
import Landing from "./landing/landing";
import { Helmet } from "react-helmet-async";
import whyChooseUs from "../images/why-choose-us-img.jpg";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MiscellaneousServicesOutlinedIcon from "@mui/icons-material/MiscellaneousServicesOutlined";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import person1 from "../images/person_1.jpg";
import person2 from "../images/person_2.jpg";
import person3 from "../images/person_3.jpg";
import person4 from "../images/person_4.jpg";
import testimonials from "../images/person-1.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function About() {
  let chooseUs = [
    { title: "Fast & Free Shipping", icon: LocalShippingOutlinedIcon },
    { title: "Easy to Shop", icon: ShoppingBagOutlinedIcon },
    { title: "24/7 Support", icon: MiscellaneousServicesOutlinedIcon },
    { title: "Hassle Free Returns", icon: KeyboardReturnOutlinedIcon },
  ];

  let team = [
    { name: "Lawson Arnold", img: person1 },
    { name: "Jeremy Walker", img: person2 },
    { name: "Patrik White", img: person3 },
    { name: "Kathryn Ryan", img: person4 },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Furni</title>
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
      <Landing text="About Us" />
      <Box sx={{ backgroundColor: "#eff2f1" }}>
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
        <Box sx={{ padding: { xs: "70px 32px", md: "70px" } }}>
          <Typography
            sx={{ textAlign: "center", mb: "40px", fontSize: "30px" }}
          >
            Our Team
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(1 , auto)",
                  md: "repeat(4 , auto)",
                },
              }}
            >
              {team.map((ele) => {
                return (
                  <Card
                    sx={{
                      width: { xs: "100%", md: "230px" },
                      m: { xs: "5px 0px", md: "0px 25px" },
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
                        {ele.name}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="p"
                        sx={{ fontSize: "14px ", fontFamily: "Arial" }}
                      >
                        CEO, Founder, Atty.
                      </Typography>
                      <p
                        style={{
                          fontFamily: "Arial",
                          lineHeight: "1.5",
                          color: "#444",
                          letterSpacing: "1px",
                        }}
                      >
                        Separated they live in. Separated they live in
                        Bookmarksgrove right at the coast of the Semantics, a
                        large language ocean.
                      </p>
                    </CardContent>
                    <CardActions>
                      <Link
                        style={{
                          fontFamily: "Arial",
                          lineHeight: "1.5",
                          color: "#444",
                          letterSpacing: "1px",
                        }}
                        href="#"
                      >
                        Learn More
                      </Link>
                    </CardActions>
                  </Card>
                );
              })}
            </Box>
          </Box>
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
