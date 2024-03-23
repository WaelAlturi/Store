import mongoose, { Schema } from "mongoose";

const Register = new Schema({
  fullName: String,
  email: String,
  password: String,
});
export default mongoose.model("Accounts", Register);
