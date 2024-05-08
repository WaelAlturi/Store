import express from "express";
import game from "../Models/gamesModel.js";

const route = express.Router();

route.post("/addgame", (req, res) => {
  try {
    game.findOne({ name: req.body.name }).then((response) => {
      // if (response) {
      //   res.status(409).json({
      //     message: "This Games Is Already In The Store ",
      //   });
      // } else {
      const newGame = new game(req.body);
      newGame
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
      // }
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});
route.get("/game", (req, res) => {
  try {
    game
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
route.get("/game/:id", (req, res) => {
  try {
    game
      .findById(req.params.id)
      .then((game) => {
        res.status(200).json(game);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Game Not Found",
        });
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
route.put("/game/:id", (req, res) => {
  try {
    game
      .findByIdAndUpdate(req.params.id, req.body)
      .then(() =>
        res.status(200).json({ message: "Game updated successfully" })
      )
      .catch((err) => res.status(500).json({ message: err.message }));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

route.delete("/game/:id", (req, res) => {
  try {
    game
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
