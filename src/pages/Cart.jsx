import React, { useEffect, useState } from "react";
import Landing from "./landing/landing";
import { Helmet } from "react-helmet-async";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  DialogContentText,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
// window.localStorage.clear();
export default function Cart() {
  let [myData, setMyData] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:3000/myData")
    //   .then((res) => res.json())
    //   .then((data) => setMyData(data));
    window.localStorage.Product != null
      ? setMyData(JSON.parse(window.localStorage.Product))
      : setMyData([]);
  }, [myData]);

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
        <title>Cart - Furni</title>
      </Helmet>
      <Landing text="Cart" />
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#eff2f1",
          justifyContent: { xs: "center", md: "flex-start" },
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
          {myData.map((ele) => {
            return (
              <>
                <Card>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image={ele.img}
                    sx={{
                      width: "250px",
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
                    <Button sx={{ color: "#555" }} onClick={handleClickOpen}>
                      More Info
                    </Button>
                    <DeleteIcon
                      sx={{ color: "red", cursor: "pointer" }}
                      onClick={() => {
                        fetch(`http://localhost:3000/myData/${ele.id}`, {
                          method: "DELETE",
                        });
                      }}
                    />
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
                  <Typography
                    sx={{
                      p: "30px 50px 0px 50px",
                      mt: "25px",
                      fontSize: "30px",
                    }}
                  >
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
                </Dialog>
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
