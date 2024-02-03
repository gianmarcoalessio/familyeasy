import mongoose from "mongoose";
let Schema = mongoose.Schema;

const sharedExpensesSchema = new mongoose.Schema({
    expense:{
        type: Schema.Types.ObjectId, // delete on cascade da fare
        ref: 'Expenses',
        required: true
    },
    user:{
        type: Schema.Types.ObjectId, //delete on cascade da fare
        ref: 'User',
        required: true
    },
    share:{
        type: Number,
        required: true
    },
})

// Ensure each user has only one share per expense
sharedExpensesSchema.index({ expense: 1, user: 1 }, { unique: true });



export default mongoose.model("sharedExpenses", sharedExpensesSchema)