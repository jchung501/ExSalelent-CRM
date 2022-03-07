const mongoose = require('./connection');

/////////////////////////////////////////////
// Models
/////////////////////////////////////////////

const { Schema, model } = mongoose; // Object Destructuring

// User Schema
const customerSchema = new Schema({
    first_name: String,
    last_name: String,
    phone_number: String,
    email: String,
    city: String,
    state: String,
    image: String,
    interests: [String],
},
{
    timestamps: true,
});

// Create User Model
const Customer = model('customer', customerSchema);

module.exports = Customer;