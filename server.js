import express from 'express'  // ES6 syntax instead of using const express = require('express')
import api from './srcbk/api.js'
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import "dotenv/config";

const app = express()
app.use(cors()); //per chiamare localhost8000 da localhost3000, controllo che fanno i browser per la sicurezza solo per il debug perché quando siamo in RUN cors non serve più
app.use(express.json());
app.use(express.urlencoded({ extended: false }))  // It parses incoming requests with URL-encoded payloads and is based on a body parser
app.use(bodyParser.json({ limit: '4mb' })); //middleware per leggere i parametri passati in post, sicurezze per il servizio
app.use(bodyParser.urlencoded({
  limit: '20mb',
  extended: true
})); // middleware sicurezza per il servizio, massimo 20mb


app.use((req, res, next) => {
  req.user = undefined;
  if (req.headers && req.headers.authorization) {
    if (req.headers.authorization.split(' ')[0] === 'Bearer') {
      let jwtToken = req.headers.authorization.split(' ')[1];
      if (jwtToken) {
        jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET, (err, decode) => {
          if (!err) {
            req.user = decode;
          };
        });
      }
    }
  }
  next();
});


app.use('/api', api);
app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
    res.status(500).send(err.message);
  } else {
    next();
  }
})
app.use('/', express.static("./public"));

app.listen(3000, async () => {
  console.log('Server running on port 3000')
  await mongoose.connect('mongodb://localhost/familyeasy')
  console.log("connected");
})