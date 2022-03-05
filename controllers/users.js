

/////////////////////////////////////////////
// Routes
/////////////////////////////////////////////

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
app.get

// Show