import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345 }} id="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://c4.wallpaperflare.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-preview.jpg"
        />
        <CardContent>
          <Typography align="left" gutterBottom variant="h5" component="div">
            Hola!
          </Typography>
          <Typography align="left" variant="body2" color="text.secondary">
            $999
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
