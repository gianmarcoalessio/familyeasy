import mongoose from "mongoose";
let Schema = mongoose.Schema;

const ExpensesSchema = new mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    date:{
        type: Date,
        required: true,
        default: () => Date.now()
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: Schema.Types.ObjectId, 
        ref: 'Categories',
        required: true
    },
    totalcost: {
        type: Number,
        required: true
    },
    createAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
})

ExpensesSchema.pre('deleteMany', function(next) {
    sharedExpenses.deleteMany({ user: this._id }, err => {
        if (err) {
            next(err);
        } else {
            next();
        }
    })

});

export default mongoose.model("Expenses", ExpensesSchema)