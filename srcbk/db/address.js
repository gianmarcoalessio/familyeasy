import mongoose from "mongoose";

export const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    cap: Number,
    nation: String,
})
export default mongoose.model("Address", addressSchema)    