/////////////////////////////////////////////
// Dependencies
/////////////////////////////////////////////

require('dotenv').config(); // Load ENV variables
const express = require('express'); // Import Express
const morgan = require('morgan'); // Import Morgan
const methodOverride = require('method-override'); // Import Method Override
const path = require('path');

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
// Server Listener
/////////////////////////////////////////////

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening to Port ${PORT}`));