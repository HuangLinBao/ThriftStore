import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Box } from "@mui/material";
import { CardActionArea } from "@mui/material";

export default function ProductCardTop(props) {
  const { name, img, cat, price } = props;

  // TODO we'll have to modify the card size and make the slider a bit more respinsive

  return (
    <Card sx={{ maxWidth: 260, height: 260 }} id="card">
      <CardActionArea sx={{ height: "100%" }}>
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column", width: 1000 }}>
          <CardMedia
            component="img"
            sx={{
              position: "absolute",
              right: 0,
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
              width: "100%",
            }}
            height="150"
            image={img}
          />
          <CardContent sx={{ width: "100%", height: "50%" }}></CardContent>
          <CardContent sx={{ width: "100%" }}>
            <Typography fontWeight={"bold"} align="left" component="div" variant="h5">
              {name}
            </Typography>
            <Typography align="left" variant="subtitle2" color="text.secondary" component="div">
              {price}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}
