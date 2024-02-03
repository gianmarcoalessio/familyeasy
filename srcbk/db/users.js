import mongoose from "mongoose";

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
    lastname: {
        type: String,
        capitalize: true,
    },
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
    }
})

//cascade remove of the expenses when a user is removed: da testare
UserSchema.pre('deleteMany', function(next) {
    // 'this' refers to the User document being removed
    Expense.deleteMany({ user: this._id }, err => {
        if (err) {
            next(err);
        } else {
            next();
        }
    });
    sharedExpenses.deleteMany({ user: this._id }, err => {
        if (err) {
            next(err);
        } else {
            next();
        }
    })

});

export default mongoose.model("User", UserSchema)   

