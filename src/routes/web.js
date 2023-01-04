import { raw } from "body-parser";
import express from "express";
import db from "../database/models/index";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", async (req, res) => {
    const allUsers = await db.User.findAll();
    res.send(JSON.stringify(allUsers));
    console.log(allUsers, { raw: true });
  });

  return app.use("/", router);
};

module.exports = initWebRoutes;
