const mongoose = require('./connection');

/////////////////////////////////////////////
// Models
/////////////////////////////////////////////

const { Schema, model } = mongoose; // Object Destructuring

// User Schema
const userSchema = new Schema({
    first_name: String,
    last_name: String,
    phone_number: String,
    city: String,
    image: String,
    interests: [String],
},
{
    timestamps: true,
});

// Create User Model
const User = model('User', userSchema);

module.exports = User;