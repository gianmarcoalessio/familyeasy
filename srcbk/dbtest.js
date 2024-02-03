import User from './db/users.js';
import Categories from './db/categories.js';
import Expenses from './db/expenses.js';
import sharedExpenses from './db/sharedexpenses.js';
import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

await mongoose.connect('mongodb://localhost/familyeasy')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// test data for users

const test_users = [{
    _id: ObjectId("65bd2f8079dc1782cc6142b3"),
    username: "jaker",
    firstname: "Jake",
    lastname: "Relling",
    password: "$2a$10$q0uZwRFyCjCIyt0N2.Sf1eS6qjxwX4LbZCMEfDK9WXUdQjwBbCkJe"
},
{
    _id: ObjectId("65bd2f8079dc1782cc6142b4"),
    username: "mikew",
    firstname: "Mike",
    lastname: "Wazowski",
    password: "$2a$10$q0uZwRFyCjCIyt0N2.Sf1eS6qjxwX4LbZCMEfDK9WXUdQjwBbCkJe"
},
{
    _id: ObjectId("65bd2f8079dc1782cc6142b5"),
    username: "sully",
    firstname: "James",
    lastname: "Sullivan",
    password: "$2a$10$q0uZwRFyCjCIyt0N2.Sf1eS6qjxwX4LbZCMEfDK9WXUdQjwBbCkJe"
},
{
    _id: ObjectId("65bd2f8079dc1782cc6142b6"),
    username: "randall",
    firstname: "Randall",
    lastname: "Boggs",
    password: "$2a$10$q0uZwRFyCjCIyt0N2.Sf1eS6qjxwX4LbZCMEfDK9WXUdQjwBbCkJe"
},
{
    _id: ObjectId("65bd2f8079dc1782cc6142b7"),
    username: "boo",
    firstname: "Mary",
    lastname: "Gibbs",
    password: "$2a$10$q0uZwRFyCjCIyt0N2.Sf1eS6qjxwX4LbZCMEfDK9WXUdQjwBbCkJe"
},
]

const test_categories = [
    {
        _id: ObjectId("65bd2f8079dc1782cc6142ba"),
        name: "Spesa",
    },
    {
        _id: ObjectId("65bd2f8079dc1782cc6142bb"),
        name: "Utilità",
    },
    {
        _id: ObjectId("65bd2f8079dc1782cc6142bc"),
        name: "Affitto",
    },
    {
        _id: ObjectId("65bd2f8079dc1782cc6142bd"),
        name: "Trasporti",
    },
    {
        _id: ObjectId("65bd2f8079dc1782cc6142be"),
        name: "Altro",
    },
    {
        _id: ObjectId("65bd2f8079dc1782cc6142bf"),
        name: "Salute"
    }
]

let test_expenses = [
    {
        _id: ObjectId("65bd310ab04aaa8ca00db7f8"),
        "usercrea":"65bd2f8079dc1782cc6142b3",
        "date": "2023-06-01",
        "category": "65bd2f8079dc1782cc6142ba", // spesa
        "description": "Spesa settimanale al supermercato",
        "quote": [{
            "user": "65bd2f8079dc1782cc6142b4", //jake
            "cost": 95,
            "rimborso":"True",
        }
        ]
    },
    {
        _id: ObjectId("65bd310ab04aaa8ca00db7f9"),
        "user": "65bd2f8079dc1782cc6142b3", //jake
        "totalcost": 50,
        "date": "2023-06-10",
        "category": "65bd2f8079dc1782cc6142be", // altro
        "description": "Libri e materiale di lettura"
    },
    {
        _id: ObjectId("65bd310ab04aaa8ca00db7fa"),
        "user": "65bd2f8079dc1782cc6142b3", //jake
        "totalcost": 20,
        "date": "2023-06-09",
        "category": "65bd2f8079dc1782cc6142bd", //trasporti
        "description": "Biglietti per viaggi occasionali"
    }
]

let test_shared_expenses = [
    {
        _id: ObjectId("65bd49102f56b5be53e59680"),
        expense:"65bd310ab04aaa8ca00db7f8", // spesa settimanle al supermercato
        user:"65bd2f8079dc1782cc6142b4", //mikew
        share: 20,
    },
    {
        _id: ObjectId("65bd49ff287764d6b05eed49"),
        expense:"65bd310ab04aaa8ca00db7f8", // spesa settimanle al supermercato
        user:"65bd2f8079dc1782cc6142b5", //sully
        share: 20,
    },
    {
        _id: ObjectId("65bd49ff287764d6b05eed4a"),
        expense:"65bd310ab04aaa8ca00db7f8", // spesa settimanle al supermercato
        user:"65bd2f8079dc1782cc6142b6", //Randal
        share: 20,
    },
    {
        _id: ObjectId("65bd49ff287764d6b05eed4b"),
        expense:"65bd310ab04aaa8ca00db7f8", // spesa settimanle al supermercato
        user:"65bd2f8079dc1782cc6142b3", //Jake
        share: 35,
    }

]


async function insertTestData() {
    try {
        // await User.insertMany(test_users, { ordered: false });
        // await Categories.insertMany(test_categories, { ordered: false });
        // await Expenses.insertMany(test_expenses, { ordered: false });
        await sharedExpenses.insertMany(test_shared_expenses, { ordered: false });
        console.log("Test data inserted successfully.");
    } catch (error) {
        console.error("Error inserting test data:", error);
    }
}

async function removeTestData() {
    try {
        const expenses = test_expenses.map(expense => expense.description);
        const usernames = test_users.map(user => user.username);
        const categories = test_categories.map(category => category.name);
        const shared_expenses = test_shared_expenses.map(sharedexpense => sharedexpense.user);
        
        await sharedExpenses.deleteMany({ user: { $in: shared_expenses } });
        await Expenses.deleteMany({ description: { $in: expenses } });
        await Categories.deleteMany({ name: { $in: categories } });
        await User.deleteMany({ username: { $in: usernames } });
        console.log("Test Data removed successfully.");
    } catch (error) {
        console.error("Error removing test Data:", error);
}
}

insertTestData()
// removeTestData() // comment out this line to keep test data in the database


