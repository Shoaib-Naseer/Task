const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');
const cors = require('cors');

app.use(cors());

// Config
dotenv.config({ path: './config/config.env' });
//Connectinf to Local Mongodb
connectDatabase();
//Importing Routes
const bookRoutes = require('./routes/bookRoutes');
//For Parsing Post Request and from Url
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//middleware for Book routes
app.use('/', bookRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server is Running at http://localhost:${process.env.PORT}`)
);
