import express from 'express';
import mongoose from 'mongoose';
import User from './db/users.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const saltRounds = 10;

function checkUser(req) {
    if (!req.user) {
        throw new Error('User not authenticated');
    }
    console.log(req.user);
}

export default express.Router()
    // Auth Routes
    .post('/auth/signup', async (req, res,next) => {
        try {
            let user = req.body;
            if(!user.username || !user.password){
                throw new Error("Username e password sono obbligatori");
            }
            let hash = bcrypt.hashSync(user.password, saltRounds);
            user.password = hash; //salviamo l'hash della password

            let result = await User.create(user)
            delete result.password; // non vogliamo che la password venga restituita al client

            // handle sign up logic here
            res.send({token: result});
        } catch (error) {
            next(error);s
        }
    })
    .post('/auth/signin', async (req, res,next) => {
        try {
            let {username,password} = req.body;
            if(!username || !password){
                throw new Error("Username e password sono obbligatori");
            }

            let tm = await User.findOne({username: username.toLowerCase()});

            if (!tm?._id){
                throw new Error("Password errata o utente non presente. Ti invitiamo a cambiare password o a regitrarsi");
            }
            if (!bcrypt.compareSync(password, tm.password)){ // confrontiamo i due hash delle password in modo tale che siano uguali, una hashata durante il signup e l'altro è in chiaro e le confronta
                throw new Error("Password errata"); 
            }
            
            let token = jwt.sign({id: tm._id}, process.env.JWT_SECRET, {expiresIn: 3600*48}); //dopo un giorno devi rifare il login


            res.send({token,username:tm.username,firstname:tm.firstname,lastname:tm.lastname}); //tutte le informazioni dell'utente più il token per collegare tutti i vari servizi se sono autorizzati

        } catch (error) {
            setTimeout(() => {
                next(error);
            }, 1000); // per evitare attacchi brute force
        }
    })
    
    // Budget Routes
    .get('/budget/', async (req, res,next) => {
        try {
            checkUser(req);
            db.query('SELECT nome,cognome from utenti', function (error, results, fields) {
                if (error) throw error;
                res.send(JSON.stringify({results,fields}))
              });
            // handle getting all budgets logic here
        } catch (error) {
            next(error);
        }
    })
    
    .get('/budget/:year', async (req, res,next) => {
        try {
            checkUser(req);
            const { year } = req.params;
            // handle getting budgets by year logic here
            res.send(`Get budgets for year: ${year}`);
        } catch (error) {
            next(error);
        }
    })
    
    .get('/budget/:year/:month', async (req, res,next) => {
        try {
            checkUser(req);
            const { year, month } = req.params;
            // handle getting budgets by year and month logic here
            res.send(`Get budgets for year: ${year}, month: ${month}`);
        } catch (error) {
            next(error);
        }
    })
    
    .get('/budget/:year/:month/:id', async (req, res,next) => {
        try {
            checkUser(req);
            const { year, month, id } = req.params;
            // handle getting a specific budget logic here
            res.send(`Get budget for year: ${year}, month: ${month}, id: ${id}`);
        } catch (error) {
            next(error);
        }
    })
    
    .post('/budget/:year/:month', async (req, res,next) => {
        try {
            checkUser(req);
            const { year, month } = req.params;
            // handle creating a new budget logic here
            res.send(`Create budget for year: ${year}, month: ${month}`);
        } catch (error) {
            next(error);
        }
    })
    
    .put('/budget/:year/:month/:id', async (req, res,next) => {
        try {
            checkUser(req);
            const { year, month, id } = req.params;
            // handle updating a specific budget logic here
            res.send(`Update budget for year: ${year}, month: ${month}, id: ${id}`);
        } catch (error) {
            next(error);
        }
    })
    
    .delete('/budget/:year/:month/:id', async (req, res,next) => {
        try {
            checkUser(req);
            const { year, month, id } = req.params;
            // handle deleting a specific budget logic here
            res.send(`Delete budget for year: ${year}, month: ${month}, id: ${id}`);
        } catch (error) {
            next(error);
        }
    })
    
    // Balance Routes
    .get('/balance', async (req, res,next) => {
        try {
            checkUser(req);
            // handle getting balance summary logic here
            res.send('Get balance summary');
        } catch (error) {
            next(error);
        }
    })
    
    .get('/balance/:id', async (req, res,next) => {
        try {
            checkUser(req);
            const { id } = req.params;
            // handle getting balance by id logic here
            res.send(`Get balance for id: ${id}`);
        } catch (error) {
            next(error);
        }
    })
    
    // Budget Search
    .get('/budget/search', async (req, res,next) => {
        try {
            checkUser(req);
            const { q: query } = req.query;
            // handle budget search logic here
            res.send(`Search budgets with query: ${query}`);
        } catch (error) {
            next(error);
        }
    })
    
    // User Info
    .get('/budget/whoami', async (req, res,next) => {
        try {
            checkUser(req);
            // handle getting user info logic here
            res.send('Get user info');
        } catch (error) {
            next(error);
        }
    })
    
    // User Search
    .get('/users/search', async (req, res,next) => {
        try {
            checkUser(req); 
            const {q}= req.query;
            let query;
            if (q) {
                query = new RegExp(q, 'i'); // ricerca parziale all'interno di username, firstname, lastaname
            }
            var users = query? await User.find({    $or: [
                { username: query },
                { firstname: query },
                { lastname: query }
            ]}) : await User.find();
            // handle user search logic here
            res.send(users);
        } catch (error) {
            next(error);
        }
    });
