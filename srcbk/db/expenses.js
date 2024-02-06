import mongoose from "mongoose";
let Schema = mongoose.Schema;


export const QuoteSchema = new mongoose.Schema({
    user: {
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

export const ExpensesSchema = new mongoose.Schema({
    usercrea: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: () => Date.now()
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    },
    quote: [{
        type: QuoteSchema // Un vettore di quote all'interno della tabella come campo per ciascuna spesa
    }],
    createAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
})

ExpensesSchema.virtual('totalcost').get(function () {
    return this.quote.reduce((acc, quote) => acc + (quote.rimborso ? -quote.cost : quote.cost), 0);
});

ExpensesSchema.set('toJSON', {
    virtuals: true, // Assicurati che i campi virtuali siano inclusi in JSON.stringify
});

ExpensesSchema.pre(['find', 'findOne','findById'], function (next) {
    this.populate([{
        path: 'usercrea',
        select: '_id lastname firstname username' // Specifica i campi da includere
    }, {
        path: 'quote.user',
        select: '_id lastname firstname username' // Specifica i campi da includere
    }, {
        path: "category",
        select: '_id name' // Specifica i campi da includere
    }]);
    next();
});

export default mongoose.model("Expenses", ExpensesSchema)