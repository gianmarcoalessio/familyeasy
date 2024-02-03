import mongoose from "mongoose";
let Schema = mongoose.Schema;

const QuoteSchema = new mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    cost: { 
        type: Number,
        required: true
    },
    rimborso: { // se attivo è un rimborso se è falso è una spesa, una quota negativa del partecipante è un rimborso da parte mia verso di lui. Una quota negativa mia è un rimborso da parte sua verso di me.
        type: Boolean,
        required: true,
        default: false
    },
})

const ExpensesSchema = new mongoose.Schema({
    usercrea:{
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
    quote:[{
        type: QuoteSchema // Un vettore di quote all'interno della tabella come campo per ciascuna spesa
    }],
    createAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
})

ExpensesSchema.virtual('totalcost').get(function() {
    return this.quote.reduce((acc, quote) => acc + quote.rimborso? - quote.cost : quote.cost , 0);
});

export default mongoose.model("Expenses", ExpensesSchema)