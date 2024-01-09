const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Credentials = require('./models/credentials');

const app = express();
const PORT = process.env.PORT || 6463; // Choose the desired port
const url = 'mongodb+srv://luckyowlzz:ACrp4yzP7RNscpgq@cluster0.7mgu4ox.mongodb.net/';

// Connect to MongoDB
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'taskmanagement',
});

// Middleware
app.use(cors()); // Add this line for CORS
app.use(bodyParser.json());

// Registration route
app.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Validate the data if needed

    // Create a new credentials instance
    const newCredentials = new Credentials({ username, password, email });

    // Specify the database and collection when saving
    await newCredentials.save({ database: 'taskmanagement', collection: 'credentials' });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to list all collections
app.get('/collections', async (req, res) => {
  try {
    const collectionsList = await mongoose.connection.db.listCollections().toArray();
    const collectionNames = collectionsList.map(collection => collection.name);
    res.status(200).json({ collections: collectionNames });
  } catch (error) {
    console.error('Error listing collections:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
