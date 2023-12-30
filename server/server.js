const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user'); // Assuming you have a User model

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect('mongodb://luckyowlzz:ACrp4yzP7RNscpgq@cluster0.7mgu4ox.mongodb.net/taskmanagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Registration route
app.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Validate the data if needed

    // Create a new user
    const newUser = new User({ username, password, email });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
