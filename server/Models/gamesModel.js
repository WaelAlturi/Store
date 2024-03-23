import mongoose, { Schema } from "mongoose";

const newGame = new Schema({
  name: String,
  image: String,
  description: String,
});
export default mongoose.model("Games", newGame);