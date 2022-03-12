/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////

const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

/////////////////////////////////////////////
// Create Route
/////////////////////////////////////////////

const router = express.Router();

/////////////////////////////////////////////
// Routes
/////////////////////////////////////////////

// Create User
router.get('/signup', (req, res) => {
    res.render('customer/Signup');
});
router.post('/signup', (req, res) => {
    res.send('signup');
});

// Show
router.get('/:id', (req, res) => {
    const { id } = req.params;

    Customer.findById(id)
        .then((customer) => {
            res.render('customer/Show', { customer });
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
});

// Show Login
router.get('/login', (req, res) => {
    res.render('customer/Login');
});
router.post('/login', (req, res) => {
    res.send('login');
});


// router.get('/search', (req, res) => {
//     const {searchFor} = req.params;
//     Customer.find({$search: searchFor})
//         .then((customer) => {
//             res.render('customer/Results', { customer });
//         })
//         .catch((error) => {
//             res.status(400).json({ error });
//         });
// });



module.exports = router;