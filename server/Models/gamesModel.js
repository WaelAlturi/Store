import mongoose, { Schema } from "mongoose";

const newGame = new Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
  genres: [],
});
export default mongoose.model("Games", newGame);
