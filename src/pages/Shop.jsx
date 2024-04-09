import React, { useEffect, useState } from "react";
import Landing from "./landing/landing";
import { Helmet } from "react-helmet-async";
import prodcut1 from "../images/product-1.png";
import prodcut2 from "../images/product-4.jpg";
import prodcut3 from "../images/product-3.png";
import accent from "../images/accent-chair.jpg";
import hq from "../images/hq.jpg";
import normal from "../images/product-5.jpg";
import twist from "../images/product-6.jpg";
import mini from "../images/img-grid-3.jpg";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  IconButton,
  Typography,
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";

export default function Shop() {
  let [myData, setMyData] = useState([]);
  useEffect(() => {
    window.localStorage.Product != null
      ? setMyData(JSON.parse(window.localStorage.Product))
      : setMyData([]);
  }, [myData]);
  let product = [
    { title: "Nordic Chair", price: 50, img: prodcut1 },
    { title: "Kruzo Aero Chair", price: 78, img: prodcut2 },
    { title: "Ergonomic Chair", price: 43, img: prodcut3 },
    { title: "Accent Chair", price: 44, img: accent },
    { title: "Normal Chair", price: 30, img: normal },
    { title: "Hq Chair", price: 25, img: hq },
    { title: "Twist Chair", price: 53, img: twist },
    { title: "Mini Table", price: 13, img: mini },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Shop - Furni</title>
      </Helmet>
      <Landing text="Shop" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#eff2f1",
        }}
      >
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
          {product.map((ele) => {
            return (
              <>
                <Card>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image={ele.img}
                    sx={{
                      width: { xs: "100%", md: "250px" },
                      height: "300px",
                      cursor: "pointer",
                    }}
                    onClick={handleClickOpen}
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
                  <CardActions
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <IconButton
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
                    </IconButton>
                    <Button sx={{ color: "#555" }} onClick={handleClickOpen}>
                      More Info
                    </Button>
                  </CardActions>
                </Card>
                <Dialog
                  fullScreen
                  open={open}
                  onClose={handleClose}
                  sx={{ padding: "150px" }}
                >
                  <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                    sx={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      m: "20px",
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography sx={{ p: "50px", mt: "25px", fontSize: "30px" }}>
                    {ele.title}
                  </Typography>
                  <DialogContent
                    sx={{
                      display: "flex",
                      p: "0px 50px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "50px",
                    }}
                  >
                    <Box>
                      <img
                        src={ele.img}
                        alt=""
                        style={{ width: " 300px", height: "300px" }}
                      />
                    </Box>
                    <DialogContentText
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <p
                        style={{
                          fontFamily: "Arial",
                          lineHeight: "1.5",
                          color: "#444",
                          letterSpacing: "1px",
                        }}
                      >
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                        aliquet velit. Aliquam vulputate velit imperdiet dolor
                        tempor tristique.
                      </p>
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{ fontSize: "30px ", fontWeight: "bold" }}
                      >
                        ${ele.price}.00
                      </Typography>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions sx={{ p: "50px" }}>
                    <Button onClick={handleClose}>
                      <AddShoppingCartOutlinedIcon />
                    </Button>
                  </DialogActions>
                </Dialog>
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
