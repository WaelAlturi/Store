import mongoose, { Schema } from "mongoose";

const saveGame = new Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
});
export default mongoose.model("Cart", saveGame);
