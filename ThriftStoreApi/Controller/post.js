import { supabase } from "../databaseConnection.js";

import Router from "express";
const router = new Router();

//added this api to fetch all posts in general... i'll need it for the integration heh
router.get("/all", (req, res) => {
    console.log("Hello there!");
    supabase
        .from("Post")
        .select()
        .then((value) => {
            res.send(value.data);
        })
        .catch("error");
});

router.get("/fetch/:postId", (req, res) => {
    supabase
        .from("Post")
        .select("*")
        .then((value) => {
            value.data.forEach((element) => {
                if (element.Post_ID == req.params.postId) {
                    supabase
                        .from("Product")
                        .select("*")
                        .then((value2) => {
                            value2.data.forEach((element2) => {
                                if (element2.Prod_ID == element.Prod_ID) {
                                    res.status(200).send(element2);
                                }
                            });
                        })
                        .catch("error");
                }
            });
        })
        .catch("error");
});

router.get("/getTop", (req, res) => {
    console.log("Hello there!");
    supabase
        .from("Post")
        .select()
        .eq("Is_Premium", true)
        .then((value) => {
            res.send(value.data);
        })
        .catch("error");
});

router.post("/", (req, res) => {
    supabase
        .from("Product")
        .insert({
            Prod_name: req.body.Prod_name,
            Prod_Category: req.body.Prod_Category,
            Price: req.body.Price,
            Description: req.body.Description,
        })
        .select()
        .then((value) => {
            console.log(value.data.Prod_ID);
            value.data.forEach((element) => {
                console.log(element.Prod_ID);
                supabase
                    .from("Post")
                    .insert({
                        Prod_ID: element.Prod_ID,
                        Client_ID: 2, ///in sign we will handle it
                    })
                    .select()
                    .then(() => {
                        res.status(200).send("insert Succefully");
                    });
            });
        });
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    supabase
        .from("Post")
        .delete()
        .eq("Prod_ID", id)
        .then((value) => {
            console.log(value.data);
            supabase
                .from("Product")
                .delete()
                .eq("Prod_ID", id)

            .then(() => {
                res.status(200).send("delete Succefully");
            });
        });
});

router.post("/sold/item/:post_id", (req, res) => {
    supabase
        .from("Post")
        .update({ Sold: "true" })
        .eq("Post_ID", req.params.post_id)
        .select()
        .then(() => {
            res.status(200).send("Post has been sold");
        });
});

export default router;