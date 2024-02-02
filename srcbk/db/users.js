import mongoose from "mongoose";
import { addressSchema } from "./address.js";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
    },
    firstname: {
        type: String,
        capitalize: true,
    },
    lastname: String,
    // email: {
    //     type: String,
    //     required: true,
    //     validator: {
    //         validate: (value) => {
    //             return value.includes("@")
    //         },
    //         message: "email non valida"
    //     }
    // },
    password: {
        type: String,


    },
    createAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    modifiedAt: {
        type: Date,
        default: () => Date.now()
    },
    userlink: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema
})


export default mongoose.model("user", UserSchema)    