/////////////////////////////////////////////
// Dependencies
/////////////////////////////////////////////

require('dotenv').config(); // Load ENV variables
const express = require('express'); // Import Express
const morgan = require('morgan'); // Import Morgan
const methodOverride = require('method-override'); // Import Method Override
const UserRouter = require('../controllers/users')
const CustomerRouter = require('../controllers/customers')
const path = require('path');
const MongoStore = require('connect-mongo');
const session = require('express-session');

/////////////////////////////////////////////
// Middleware Function
/////////////////////////////////////////////

const middleware = (app) => {
    app.use(morgan('tiny')); // For debugging purposes
    app.use(express.urlencoded({ extended: true }));
    app.use(methodOverride('_method'));
    app.use(express.static('public'));
    app.use(session({
        secret: process.env.SECRET,
        store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
        saveUninitialized: true,
        resave: false,
        })
    );
};

module.exports = middleware;