import * as React from "react";
import Box from "@mui/material/Box";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <ProductCard></ProductCard>
    </Box>
  );
}
