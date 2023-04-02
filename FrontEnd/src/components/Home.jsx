import * as React from "react";
import { Typography } from "@mui/material";
import TopProductSlider from "./TopProductSlider";
import CategorySliders from "./CategorySliders";

export default function HomePage() {
  return (
    <>
      <Typography fontWeight={"semi-bold"} variant="h4" align="left" sx={{ mt: 5, ml: 20 }}>
        Explore New Products
      </Typography>
      <TopProductSlider></TopProductSlider>
      <CategorySliders></CategorySliders>
    </>
  );
}
