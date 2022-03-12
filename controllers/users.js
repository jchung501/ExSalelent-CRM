/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////

const express = require('express');
const User = require('../models/user.js');
const bcrypt = require('bcryptjs');

/////////////////////////////////////////////
// Create Route
/////////////////////////////////////////////

const router = express.Router();

/////////////////////////////////////////////
// Routes
/////////////////////////////////////////////

// Signup Route
router.get('/signup', (req, res) => {
    res.render('user/Signup');
});
router.post('/signup', async (req, res) => {
    // encrypt password
    User.password = await bcrypt.hash(
        req.body.password, bcrypt.genSalt(10)
    );
    // create New User
    User.create(req.body)
        .then((user) => {
            res.redirect('/user/login');
        })
        .catch((error) => {
            res.status(400).json({ error });
    });
});

// Login Route
router.get('/login', (req, res) => {
    res.render('user/Login');
});
router.post('/login', async (req, res) => {
    // get data from req body
    const { username, password } = req.body;
    // search for user
    User.findOne({ username })
        .then(async (user) => {
            if (user) {
                const result = await bcrypt.compare(password, user.password);
                if (result) {
                    req.session.username = username;
                    req.session.loggedIn = true;
                    res.redirect('/customers');
                } else {
                    res.json({ error: 'password doesn\'t match'});
                }
            } else {
                res.json({ error: 'user doesn\'t exist' });
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
});

// Logout
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/');
    });
});

module.exports = router;