/////////////////////////////////////////////
// Dependencies
/////////////////////////////////////////////

require('dotenv').config(); // Load ENV variables
const express = require('express'); // Import Express
const path = require('path');
const middleware = require('./utilities/middleware.js');
const UserRouter = require('./controllers/users')
const CustomerRouter = require('./controllers/customers')

/////////////////////////////////////////////
// App Object Setup
/////////////////////////////////////////////

const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

/////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////

middleware(app);

/////////////////////////////////////////////
// Routes
/////////////////////////////////////////////

app.use('/user', UserRouter);
app.get('/notloggedin', (req, res) => {
    res.render('Index');
});
app.use('/', CustomerRouter);

/////////////////////////////////////////////
// Server Listener
/////////////////////////////////////////////

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening to Port ${PORT}`));