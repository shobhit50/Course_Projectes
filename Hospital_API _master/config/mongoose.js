const mongoose = require('mongoose');


//connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/test');
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function () {
    console.log("Successfully connected to db");
});