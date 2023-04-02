import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import ProductCardTop from "./ProductCardTop";
import Flickity from "react-flickity-component";
import "../style/flickity.scss";
import { useState, useEffect } from "react";
import axios from "axios";

// TODO Also we'd need to tinker with the request methods since there is a bit of a delay foth the thing to arrive anyways :/

const flickityOptions = {
  initialIndex: 2,
  freeScroll: true,
  wrapAround: true,
  autoPlay: true,
  adaptiveHeight: true,
};
export default function TopProductSlider() {
  const postFetchUrl = "http://localhost:3000/post/getTop";

  const [topItems, setTopItems] = useState([]);

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get(postFetchUrl)
      .then((response) => {
        setTopItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const Promisses = [];
    topItems.forEach(async (item) => {
      const pr = axios.get("http://localhost:3000/product/getOne/" + item.Prod_ID);
      Promisses.push(pr);
    });

    Promise.all(Promisses).then((response) => {
      setProductList(response.map((item) => item.data[0]));
    });
  }, [topItems]);

  return (
    <Paper
      elevation={8}
      sx={{
        mr: "20px",
        ml: "20px",
        width: "90%",
        height: "400px",
        mt: "50px",
      }}
    >
      <Typography sx={{ ml: "10%", padding: 2 }} align="left" variant="h5" fontWeight={"bold"}>
        Our Top Listings
      </Typography>
      <Box sx={{ height: "100%", pl: 10, pr: 10 }}>
        <Flickity
          className={"carousel"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          {productList &&
            productList.length > 0 &&
            productList.map((postObj, i) => (
              <Box sx={{ mr: 10 }} key={i}>
                <ProductCardTop
                  id={postObj.Prod_ID}
                  name={postObj.Prod_name}
                  img={postObj.Prod_Image}
                  cat={postObj.Prod_Category}
                  price={postObj.Price}
                ></ProductCardTop>
              </Box>
            ))}
        </Flickity>
      </Box>
    </Paper>
  );
}
