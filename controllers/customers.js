/////////////////////////////////////////////
// Import Dependencies
/////////////////////////////////////////////

const express = require('express');
const Customer = require('../models/customer.js');

/////////////////////////////////////////////
// Create Route
/////////////////////////////////////////////

const router = express.Router();

/////////////////////////////////////////////
// Routes
/////////////////////////////////////////////

// Seed 
router.get('/seed', (req, res) => {
    const starterCustomer = [
        { first_name: 'John', last_name: 'Smith', phone_number: '1234567890', email: 'johnnysmith@woohoo.com', city: 'Kansas City', image: 'https://pbs.twimg.com/profile_images/1096958021824073728/sXnh64ww_400x400.jpg', interests: ['Mazda', 'Toyota', 'Acura'] },
        { first_name: 'Zach', last_name: 'Smith', phone_number: '1234567890', email: 'zachariahcrypto@binance.com', city: 'Cool City', image: 'https://tracywrightcorvo.com/wp-content/uploads/2019/02/business_headshot-3.jpg', interests: ['Mercedes', 'Audi', 'Lexus'] },
        { first_name: 'Reginald', last_name: 'Smith', phone_number: '1234567890', email: 'reginaldsmith3rd@oldmoneyrich.com', city: 'London', image: 'https://i.pinimg.com/550x/0a/83/b2/0a83b279b00e78382a52706e7c6b7adc.jpg', interests: ['Lamborghini', 'Ferrari', 'McLaren'] }
    ];

    // Delete all fruits
    Customer.deleteMany({}).then((data) => {
        // Seed starter users
        Customer.create(starterCustomer).then((data) => {
            res.json(data)
        });
    })
    .catch((err) => {
        res.status(400).send(err);
    });
});

// Index
router.get('/', (req, res) => {
    Customer.find({}).then((customers) => {
        res.render('customer/Index', { customers })
    })
    .catch((error) => {
        res.status(400).json({ error });
    });
});

// New
router.get('/new', (req, res) => {
    res.render('customer/New');
});

// Delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Customer.findByIdAndDelete(id)
        .then (() => {
            res.redirect('/');
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
});

// Update
router.put('/:id', (req, res) => {
    const { id } = req.params;
    Customer.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => {
            res.redirect(`/${id}`);
        });
});

// Create
router.post('/', (req, res) => {
    Customer.create(req.body)
        .then((createdCust) => {
            res.redirect(`/${createdCust._id}`);
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
});

// Edit
router.get('/:id/edit', (req, res) => {
    const { id } = req.params;
    Customer.findById(id)
        .then((customer) => {
            res.render('customer/Edit', { customer });
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
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

module.exports = router;