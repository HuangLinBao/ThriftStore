import express from "express";
const app = express();
import cors from "cors";

app.use(cors());

import post_route from "./Controller/post.js";
import product_route from "./Controller/product.js";
import category_route from "./Controller/category.js";
import SignIn_route from "./Controller/SignIn.js";
import SignUp_route from "./Controller/SignUp.js";

app.use(express.json());

app.use("/post", post_route);
app.use("/product", product_route);
app.use("/category", category_route);
app.use("/SignIn", SignIn_route);
app.use("/SignUp", SignUp_route);

export default app;