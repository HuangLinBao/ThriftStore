import React from "react";
import ProductCardHome from "./ProductCardHome";
import { Box, Paper, Typography } from "@mui/material";
import Flickity from "react-flickity-component";
import "../style/flickity.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const flickityOptions = {
  initialIndex: 0,
  freeScroll: true,
  pageDots: false,
  cellAlign: "left",
};

export default function SliderView(props) {
  const { product } = props;

  const [itemsCategory, setItemsCategory] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/category/cat/" + product[0].Prod_Category)
      .then((response) => {
        setItemsCategory(response.data[0].Cat_Name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Paper
      elevation={8}
      sx={{
        mr: "20px",
        ml: "20px",
        width: "90%",
        height: 220,
        mt: "50px",
      }}
    >
      <Typography sx={{ ml: "10%", padding: 1 }} align="left" variant="h5" fontWeight={"bold"}>
        {itemsCategory}
      </Typography>
      <Box sx={{ height: "100%", pl: 10, pr: 10, pt: 2 }}>
        <Flickity
          className={"carousel"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
        >
          {product.map((postObj, i) => (
            <Box sx={{ minWidth: 290, mr: 1 }} key={i}>
              <ProductCardHome
                id={postObj.Prod_ID}
                name={postObj.Prod_name}
                img={postObj.Prod_Image}
                cat={postObj.Prod_Category}
                price={postObj.Price}
              ></ProductCardHome>
            </Box>
          ))}
        </Flickity>
      </Box>
    </Paper>
  );
}
