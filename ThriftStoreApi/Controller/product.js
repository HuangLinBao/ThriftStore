import { supabase } from "../databaseConnection.js";

import Router from "express";

const router = new Router();

router.get("/getOne/:ID", (_req, res) => {
    supabase
        .from("Product") // selecting product table
        .select("Prod_name,Prod_Category,Price,Prod_Image")
        .eq("Prod_ID", _req.params.ID)
        .then((value) => {
            // Attributes to be found on the product in the home page
            res.status(200).send(value.data); // send the result from executing the query
            console.log("GET /then is working");
        })
        .catch((error) => {
            console.log("GET /catch has been fucked");
            res.status(500).send(error.message);
        });
});

router.get("/items", (_req, res) => {
    supabase
        .from("Product") // selecting product table
        .select("Prod_name,Prod_Category,Price,Prod_Image")
        .then((value) => {
            // Attributes to be found on the product in the home page
            res.status(200).send(value.data); // send the result from executing the query
            console.log("GET /then is working");
        })
        .catch((error) => {
            console.log("GET /catch has been fucked");
            res.status(500).send(error.message);
        });
});
// this api will be responsible to retrieve all the products found in the database

router.get("/category/:Cat_ID", (req, res) => {
    supabase
        .from("Product")
        .select("Prod_name , Price , Prod_Image , Prod_Category")
        .eq("Prod_Category", req.params.Cat_ID)
        .then((Product) => {
            res.status(200).send(Product.data);
        })
        .catch("error");
});
// this api will be responsible to retrieve the products based on specific category

export default router;