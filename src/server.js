import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config(); // gọi đến file config.env
import connectDB from "./config/connectDB";
let app = express();

//config app
viewEngine(app);
initWebRoutes(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

let PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  //callback
  console.log(`App is running on port ${PORT}`);
});
