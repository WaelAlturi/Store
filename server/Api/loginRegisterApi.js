import express from "express";
import register from "../models/registerModel.js";

const route = express.Router();

route.post("/register", (req, res) => {
  try {
    register.findOne({ email: req.body.email }).then((cheack) => {
      if (cheack) {
        res.status(409).json({
          message: "Wrong Email OR Password",
        });
      } else {
        const newAccount = new register(req.body);
        newAccount
          .save()
          .then(() => {
            return res.status(201).json({
              message: "Register Succefully",
            });
          })
          .catch((e) => {
            return res.status(500).json({
              message: "Error",
            });
          });
      }
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
});

route.post("/login", (req, res) => {
  register
    .findOne({ email: req.body.email })
    .then((account) => {
      if (account) {
        if (account.password == req.body.password) {
          return res.status(200).json({
            message: "Welcome",
          });
        } else {
          return res.status(401).json({
            message: "Password not match",
          });
        }
      } else {
        return res.status(500).json({
          message: "Acount Not Exist",
        });
      }
    })
    .catch((e) => {
      res.status(500).json({
        message: e.message,
      });
    });
});
export default route;
