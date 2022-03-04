/////////////////////////////////////////////
// Dependencies
/////////////////////////////////////////////

require('dotenv').config(); // Load ENV variables
const express = require('express'); // Import Express
const morgan = require('morgan'); // Import Morgan
const methodOverride = require('method-override'); // Import Method Override
const mongoose = require('mongoose'); // Import Mongoose
const path = require('path');

/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////

const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG);

// Events Open/Disconnect/Errors
mongoose.connection
    .on('open', () => console.log('You\'re connected!'))
    .on('close', () => console.log('You are disconnected!'))
    .on('error', (error) => console.log(error));

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

/////////////////////////////////////////////
// App Object Setup
/////////////////////////////////////////////

const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

/////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////

app.use(morgan('tiny')); // For debugging purposes
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

/////////////////////////////////////////////
// Routes
/////////////////////////////////////////////

app.get('/', (req, res) => {
    res.send('Welcome to ExSalelent!!');
});

// Seed 
app.get('/users/seed', (req, res) => {
    const starterUsers = [
        { first_name: 'John', last_name: 'Smith', phone_number: '1234567890', city: 'Kansas City', image: '', interests: ['Mazda', 'Toyota', 'Acura'] },
        { first_name: 'Zach', last_name: 'Smith', phone_number: '1234567890', city: 'Cool City', image: '', interests: ['Mercedes', 'Audi', 'Lexus'] },
        { first_name: 'Reginald', last_name: 'Smith', phone_number: '1234567890', city: 'London', image: '', interests: ['Lamborghini', 'Ferrari', 'McLaren'] }
    ];

    // Delete all fruits
    User.deleteMany({}).then((data) => {
        // Seed starter users
        User.create(starterUsers).then((data) => {
            res.json(data)
        });
    })
    .catch((err) => {
        res.status(400).send(err);
    });
});

// Index
app.get('/database', (req, res) => {
    User.find({}).then((users) => {
        res.render('users/Index', { users })
    })
    .catch((error) => {
        res.status(400).json({ error });
    });
});

// New

// Delete

// Update

// Create

// Edit

// Show


/////////////////////////////////////////////
// Server Listener
/////////////////////////////////////////////

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening to Port ${PORT}`));