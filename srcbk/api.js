import express from 'express';
import User from './db/users.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Categories from './db/categories.js';
import Expenses from './db/expenses.js';

const saltRounds = 10;

function checkUser(req) {
    if (!req.user) {
        throw new Error('User not authenticated');
    }
}

export default express.Router()
    // Auth Routes
    .post('/auth/signup', async (req, res, next) => {
        try {
            let user = req.body;
            if (!user.username || !user.password) {
                throw new Error("Username e password sono obbligatori");
            }
            let hash = bcrypt.hashSync(user.password, saltRounds);
            user.password = hash; //salviamo l'hash della password

            let result = await User.create(user)
            delete result.password; // non vogliamo che la password venga restituita al client

            // handle sign up logic here
            res.send({ token: result });
        } catch (error) {
            next(error); s
        }
    })
    .post('/auth/signin', async (req, res, next) => {
        try {
            let { username, password } = req.body;
            if (!username || !password) {
                throw new Error("Username e password sono obbligatori");
            }

            let tm = await User.findOne({ username: username.toLowerCase() });

            if (!tm?._id) {
                throw new Error("Password errata o utente non presente. Ti invitiamo a cambiare password o a regitrarsi");
            }
            if (!bcrypt.compareSync(password, tm.password)) { // confrontiamo i due hash delle password in modo tale che siano uguali, una hashata durante il signup e l'altro è in chiaro e le confronta
                throw new Error("Password errata");
            }

            let token = jwt.sign({ _id: tm._id }, process.env.JWT_SECRET, { expiresIn: 3600 * 48 }); //dopo un giorno devi rifare il login


            res.send({ token, username: tm.username, firstname: tm.firstname, lastname: tm.lastname }); //tutte le informazioni dell'utente più il token per collegare tutti i vari servizi se sono autorizzati

        } catch (error) {
            setTimeout(() => {
                next(error);
            }, 1000); // per evitare attacchi brute force
        }
    })

    // Budget Routes
    .get('/budget/', async (req, res, next) => {
        try {
            checkUser(req);
            const user = req.user
            res.send(await Expenses.find({usercrea: user._id}).exec());
        } catch (error) {
            next(error);
        }
    })

    // User Info
    .get('/budget/whoami', async (req, res, next) => {
            try {
                checkUser(req);
                const user = await User.findById(req.user._id);
                if(user){
                    const userinfo = {
                        _id: user._id,
                        username: user.username,
                        firstname: user.firstname,
                        lastname: user.lastname
                    }
                    res.send(userinfo);
                }else{
                    throw new Error("Informazioni utente non disponbili");
                }
            } catch (error) {
                next(error);
            }
        })

    .get('/budget/:year', async (req, res, next) => {
        try {
            checkUser(req);
            const { year } = req.params;
            const user = req.user;
    
            // Creare le date di inizio e fine per l'anno specificato
            const startDate = new Date(year, 0, 1); // 1 gennaio dell'anno
            const endDate = new Date(year, 11, 31, 23, 59, 59); // 31 dicembre dell'anno
    
            // Eseguire la query filtrando per usercrea e intervallo di date
            const budgets = await Expenses.find({
                usercrea: user._id,
                date: {
                    $gte: startDate,
                    $lte: endDate
                }
            }).exec();
    
            res.send(budgets);
        } catch (error) {
            next(error);
        }
    })

    .get('/budget/:year/:month', async (req, res, next) => {
        try {
            checkUser(req);
            const { year, month } = req.params;
            const user = req.user;
    
            // Convertire l'anno e il mese dai parametri in numeri
            const yearNum = parseInt(year, 10);
            const monthNum = parseInt(month, 10) - 1; // I mesi in JavaScript partono da 0
    
            // Calcolare la data di inizio e fine del mese specificato
            const startDate = new Date(yearNum, monthNum, 1);
            const endDate = new Date(yearNum, monthNum + 1, 0, 23, 59, 59); // L'ultimo giorno del mese
    
            // Eseguire la query filtrando per usercrea e intervallo di date
            const budgets = await Expenses.find({
                usercrea: user._id,
                date: {
                    $gte: startDate,
                    $lte: endDate
                }
            }).exec();
    
            res.send(budgets);
        } catch (error) {
            next(error);
        }
    })
    

    .get('/budget/:year/:month/:id', async (req, res, next) => {
        try {
            checkUser(req);
            const { year, month, id } = req.params;
            const user = req.user;
    
            // Trova la spesa specifica per ID
            const expense = await Expenses.findById(id).exec();
    
            // Verifica se la spesa appartiene all'utente, all'anno e al mese specificati
            if (!expense) {
                return res.status(404).send({ message: "Spesa non trovata." });
            }
            res.send(expense);
        } catch (error) {
            next(error);
        }
    })
    

    .post('/budget/:year/:month', async (req, res, next) => {
        try {
            checkUser(req);
            const { year, month } = req.params;
            const data = req.body;

            if(!data){
                throw new Error("Dati mancanti");
            }

            data.usercrea = req.user._id;
            // data.date = new Date(year, month - 1, 1); // Creare una data per il primo giorno del mese specificato
            const expense = await Expenses.create(data);
            let letto = await Expenses.findById(expense._id).exec(); // perché me lo torna indietro già formattato 

            res.send(letto);
        } catch (error) {
            next(error);
        }
    })

    .put('/budget/:year/:month/:id', async (req, res, next) => {
        try {
            checkUser(req);
            const { year, month,id } = req.params;
            const data = req.body;

            if(!data){
                throw new Error("Dati mancanti");
            }
            if(data._id!=id){
                throw new Error("ID non corrispondente");
            }


            data.usercrea = req.user._id;
            // data.date = new Date(year, month - 1, 1); // Creare una data per il primo giorno del mese specificato
            const expense = await Expenses.findByIdAndUpdate(id, data, { new: true }).exec();
            let letto = await Expenses.findById(expense._id).exec(); // perché me lo torna indietro già formattato 

            res.send(letto);
        } catch (error) {
            next(error);
        }
    })

    .delete('/budget/:year/:month/:id', async (req, res, next) => {
        try {
            checkUser(req);
            const { id } = req.params; // L'anno e il mese non sono necessari per l'eliminazione diretta
            const user = req.user;
    
            // Cerca e elimina la spesa, assicurandoti che appartenga all'utente
            const result = await Expenses.findOneAndDelete({
                _id: id,
                usercrea: user._id // Assicurati che la spesa appartenga all'utente che fa la richiesta
            }).exec();

            if (!result) {
                throw new Error("Spesa non trovata.");
            }
    
            // Se tutto va bene, invia una conferma dell'eliminazione
            res.send(result);
        } catch (error) {
            next(error);
        }
    })

    // Balance Routes
    .get('/balance', async (req, res, next) => {
        try {
            checkUser(req);
            const user = req.user
            let spese = await Expenses.find({"quote.user": user._id}).exec()
            let bilancio = {
                "dare":0,
                "avere":0
            }

            if(spese){
                for (let spesa of spese){
                    for(let quota of spesa.quote){
                        if(quota.user._id == user._id){
                            if(quota.rimborso){
                                bilancio.avere += quota.cost;
                            }else{
                                bilancio.dare += quota.cost;
                            }
                        }
                    }
                }
            }

            res.send(bilancio);
        } catch (error) {
            next(error);
        }
    })

    .get('/balance/:id', async (req, res, next) => {
        try {
            checkUser(req);
            const user = User.findById(req.params.id);
            if(!user){
                throw new Error("Utente non trovato");
            }
            // handle getting balance by id logic here
            res.send(user);
        } catch (error) {
            next(error);
        }
    })

    // Budget Search
    .get('/budget/search', async (req, res, next) => {
        try {
            checkUser(req);
            const { q: query } = req.query;
            // handle budget search logic here
            res.send(`Search budgets with query: ${query}`);
        } catch (error) {
            next(error);
        }
    })

    // User Search
    .get('/users/search', async (req, res, next) => {
        try {
            checkUser(req);
            const { q } = req.query;
            let query;
            if (q) {
                query = new RegExp(q, 'i'); // ricerca parziale all'interno di username, firstname, lastaname
            }
            var users = query ? await User.find({
                $or: [
                    { username: query },
                    { firstname: query },
                    { lastname: query }
                ]
            }) : await User.find();
            // handle user search logic here
            res.send(users);
        } catch (error) {
            next(error);
        }
    })
    .get('/categories' , async (req, res, next) => {
        try {
            let categories = await Categories.find().select('_id name');
            res.send(categories);
        } catch (error) {
            next(error);
        }
    });
