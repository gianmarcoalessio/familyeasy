import mongoose from "mongoose";

const CategoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
})

// //cascade remove of the expenses and set null to all the schema da refers to that specific category: da testare
// CategoriesSchema.pre('deleteMany', function(next) {
//     const categoryId = this._id;
//     mongoose.model('Expense').updateMany(
//         { category: categoryId }, 
//         { $set: { category: null } }, 
//         next
//     );
// });

export default mongoose.model("Categories", CategoriesSchema)