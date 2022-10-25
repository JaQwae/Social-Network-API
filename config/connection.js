const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkingDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Export connection 
module.exports = mongoose.connection;


// For Heroku deployment
// const { connect, connection } = require('mongoose');

// const connectionString =
//     process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkingDB';

// connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// module.exports = connection;