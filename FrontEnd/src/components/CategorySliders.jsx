import React from "react";
import SliderView from "./SliderView";
import { useState, useEffect } from "react";
import axios from "axios";

//TODO for me I'll just add a function that'll organize each product to its category

export default function CategorySliders() {
  const postFetchUrl = "http://localhost:3000/post/all";

  const [posts, setPosts] = useState([]);
  const [products, setProductsByCategory] = useState([]);

  useEffect(() => {
    axios
      .get(postFetchUrl)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const promises = [];
    posts.forEach(async (item) => {
      const pr = axios.get("http://localhost:3000/product/getOne/" + item.Prod_ID);
      promises.push(pr);
    });
    Promise.all(promises)
      .then((response) => {
        let productsByCategory = [];
        response.forEach(async (res) => {
          if (res.data.length > 0) {
            const product = res.data[0];
            const category = product.Prod_Category;
            if (category in productsByCategory) {
              productsByCategory[category].push(product);
            } else {
              productsByCategory[category] = [product];
            }
          }
          setProductsByCategory(productsByCategory);
        });
      })
      .catch((error) => console.error(error));
  }, [posts]);

  return (
    <>
      {products &&
        products.length > 0 &&
        products.map((postObj, i) => <SliderView key={i} product={postObj}></SliderView>)}
    </>
  );
}
