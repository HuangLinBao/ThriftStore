import { supabase } from "../databaseConnection.js";
import { createServer } from "http";

import Router from "express";
const router = new Router();

router.post('/SignUser/sign', (req, res, next) => {
    supabase
      .from("User") 
      .select("*")
      .then((value) => {
        value.data.forEach((element2) => {
          if (element2.Email_Address == req.body.Email && element2.Password == req.body.Password) {
           res.setHeader('Content-Type', 'application/json');
             return res.send(element2);
          }
        });
       //// return res.send("Check Email Or Password ");

      })
      .catch("error");
});

export default router;
