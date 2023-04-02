import { supabase } from "../databaseConnection.js";

import Router from "express";

const router = new Router();

router.get("/cat/items", (_req, res, next) => {
    supabase
        .from("Category")
        .select("*")
        .then((val) => {
            res.setHeader("Content-Type", "application/json");
            return res.send(val.data);
        })
        .catch("error");
});

router.get("/cat/:id", (_req, res, next) => {
    supabase
        .from("Category")
        .select("Cat_Name")
        .eq("Cat_ID", _req.params.id)
        .then((val) => {
            res.setHeader("Content-Type", "application/json");
            return res.send(val.data);
        })
        .catch("error");
});

export default router;