const mongoose = require('mongoose');

const url = 'mongodb+srv://luckyowlzz:ACrp4yzP7RNscpgq@cluster0.7mgu4ox.mongodb.net/taskmanagement';

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(url, connectionParams)
  .then(async () => {
    console.log('Connected to the taskmanagement database');

    // Fetch the list of collections in the taskmanagement database
    const collectionsList = await mongoose.connection.db.listCollections().toArray();

    console.log('Collections:');
    collectionsList.forEach(collection => console.log(` - ${collection.name}`));

    // Close the connection after listing collections
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(`Error connecting to the taskmanagement database.\n${err}`);
  });
