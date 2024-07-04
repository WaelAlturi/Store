import express from "express";
import cart from "../Models/cartModel.js";

const route = express.Router();

route.get("/inCart", (req, res) => {
  try {
    cart
      .find({})
      .then((games) => {
        res.status(200).json(games);
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
route.post("/addToCart", (req, res) => {
  try {
    cart.findOne({ name: req.body.name }).then((response) => {
      if (response) {
        res.status(409).json({
          message: "This Games Is Already In The Store ",
        });
      } else {
        const saveGame = new cart(req.body.gameData);
        console.log(req.body);
        saveGame
          .save()
          .then(() => {
            res.status(200).json({
              message: "Succefully Add The Game",
            });
          })
          .catch(() => {
            res.status(500).json({
              message: "ERROR!!! The Game is not added to the store ",
            });
          });
      }
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});
route.delete("/delete/:id", (req, res) => {
  try {
    console.log(req.params.id);
    cart
      .findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).json({
          message: "Game Deleted",
        });
      })
      .catch(() => {
        res.status(500).json({
          message: "Game Not Found",
        });
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
export default route;
