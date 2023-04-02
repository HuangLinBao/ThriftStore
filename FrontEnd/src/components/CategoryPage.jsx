import InnerAppBar from "./InnerAppBar";
import ProductsList from "./ProductsList";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as React from "react";

export default function CategoryPage() {
  return (
    <Grid container spacing={0}>
      <Box sx={{ height: "100%", flexGrow: 1 }}>
        <Grid item xs={12}>
          <InnerAppBar></InnerAppBar>
        </Grid>
        <Grid item xs={12}>
          <ProductsList></ProductsList>
        </Grid>
      </Box>
    </Grid>
  );
}
