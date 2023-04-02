import * as React from "react";
import "./style/App.scss";
import Navitems from "./components/NavItems";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CategoryList from "./components/CategoryList";
import PostForm from "./components/PostForm";

import { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./components/Home";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const url = "http://localhost:3000/category/cat/items";
  const [category, setCategory] = useState([]);
  const components = [<HomePage />];

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Box sx={{ height: "100vh", flexGrow: 1 }}>
        <Grid container spacing={0} sx={{ height: "100%" }}>
          <Grid item xs={12}>
            <Navitems
              isOpen={open}
              setIsOpen={setOpen}
              handleDrawerChange={() => {
                setIsDrawerOpen((preState) => {
                  console.log(preState);
                  return !preState;
                });
              }}
            ></Navitems>
          </Grid>
          <PostForm open={open} setOpen={setOpen}></PostForm>

          <Grid item xs={12} sx={{ display: "inline", height: "100%", overflowY: "auto" }}>
            <CategoryList
              categories={category}
              handleDrawerChange={() => {
                setIsDrawerOpen((preState) => {
                  console.log(preState);
                  return !preState;
                });
              }}
              drawerChange={isDrawerOpen}
            ></CategoryList>

            <Grid container spacing={0} sx={{ pl: 2 }}>
              <Box
                sx={{
                  maxWidth: "100%",
                  height: "100%",
                  flexGrow: 1,
                }}
              >
                <Grid item xs={true}>
                  {" "}
                  {/* main showspace */}
                  <Box
                    sx={{
                      height: "80vh",
                    }}
                  >
                    <HomePage></HomePage>
                  </Box>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
