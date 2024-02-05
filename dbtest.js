import User from './srcbk/db/users.js';
import Categories from './srcbk/db/categories.js';
import Expenses from './srcbk/db/expenses.js';
import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
import fs from "fs";

var users = {};
var cats = {};
const DBCONN = 'mongodb://localhost/familyeasy'


function getuserid(u) {
    return users[u.toLowerCase()];
}
function getcatid(c) {
    return cats[c.toLowerCase()];
}

async function insertTestData() {
    try {
        await mongoose.connect(DBCONN)
        console.log("connesso...");

        var dbtest = JSON.parse(fs.readFileSync("dbtest.json"));
        console.log("cancellazione....");
        await User.deleteMany();
        await Categories.deleteMany();
        await Expenses.deleteMany();
        console.log("inserimento utenti...");
        for (var u of dbtest.users) {
            u.password = dbtest.pass;
            var tm = await User.create(u);
            users[tm.username.toLocaleLowerCase()] = tm._id;
        }
        console.log("inserimento categorie...");
        for (var c of dbtest.cats) {
            var tm = await Categories.create(c);
            cats[tm.name.toLowerCase()] = tm._id;
        }
        for (var e of dbtest.expenses) {
            e.usercrea = getuserid(e.usercrea);
            e.category = getcatid(e.category);
            if (!e.quote) e.quote = [];
            for (var q of e.quote) {
                q.user = getuserid(q.user)
            }
            await Expenses.create(e);
        }
    } catch (e) {
        console.log("ERRORE", e.message);
    }
    process.exit(0);

}

async function readData() {
    try {
        await mongoose.connect(DBCONN)
        console.log("connesso...");

        var e = await Expenses.find({
            usercrea: `65bf2d36cf230628a59e16ee`
        })
        console.log("total", e.totalcost)
        fs.writeFileSync('out.json', JSON.stringify(e, null, 2));
    } catch (e) {
        console.log("ERRORE", e.message);
    }
    process.exit(0);


}

async function budget(username, year, month, id) {
    try {
        await mongoose.connect(DBCONN)
        console.log("connesso...");
        const user = await User.findOne({ username: username }).exec();
        if (!user) {
            throw new Error("Utente non trovato");
        }

        const expenses = await Expenses.find({
            usercrea: user._id,
        }).exec();



    } catch (e) {
        console.log("ERRORE", e.message);
    }
    process.exit(0);
}

insertTestData()
// speseSully();

