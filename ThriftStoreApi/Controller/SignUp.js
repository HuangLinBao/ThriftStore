import { supabase } from "../databaseConnection.js";

import Router from "express";

const router = new Router();
var existsAccount = 0;
router.post("/", (req, res, next) => {
   supabase
    .from("User")
    .select("*")
    .then((value) => {
      value.data.forEach((element) => {
        if (element.Email_Address == req.body.Email_Address) {
          console.log("This account exists");
          existsAccount = 1;
        }
      });
    })
    .then((value) => {
      if (existsAccount == 0) {
         supabase
          .from("User")
          .insert({
            Username: req.body.Username,
            Email_Address: req.body.Email_Address,
            Password: req.body.Password,
            Phone_Num: req.body.Phone_Num,
          })
          .select()
          .then((value) => {
            console.log(value.data.User_ID);
            value.data.forEach((element) => {
              console.log(element.User_ID);
              const { error } = supabase
                .from("Client")
                .insert({
                  User_ID: element.User_ID,
                })
                .select()
                .then((value) => {
                  console.log("Sign up ");
                });
            });
          });
      }
    });
});

export default router;
