import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import loginRegisterApi from "./Api/loginRegisterApi.js";
import Game from "./Api/gameApi.js";

const app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect("mongodb+srv://wael:1234@storedb.me2lodu.mongodb.net/")
  .then(console.log("MongoDB:ON"))
  .catch((e) => {
    console.log("MongoDB:OFF => " + e.message);
  });
app.use("/account", loginRegisterApi);
app.use("/", Game);

app.listen("3000", (req, res) => {
  console.log("Server IS ON Port 3000");
});
