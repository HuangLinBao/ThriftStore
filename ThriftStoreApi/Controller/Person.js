import { supabase } from "../databaseConnection.js";

import Router from "express";

const router = new Router();


router.post("/:User_ID", (req, res, next) => {
    const User_ID = req.params.User_ID;
    console.log("id: " + User_ID);
    supabase
        .from("User")
        .update()
        .eq("User_ID", User_ID)
        .then((value) => {
            const { error } = supabase
                .from("User")
                .update({
                    Username: req.body.Username,
                    Email_Address: req.body.Email_Address,
                    Password: req.body.Password,
                    Phone_Num: req.body.Phone_Num,
                })
                .eq("User_ID", User_ID)
                .then((value) => {
                    res.status(200).send("Edit successfully");
                });
        });
});
module.exports = router;