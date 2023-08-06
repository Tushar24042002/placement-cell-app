
const mongoose = require('mongoose');
const env = require('./environment');
//connect to database
// mongoose.connect(`mongodb+srv://tushargupta24042002:Tushar24042002@cluster0.h9cmx1x.mongodb.net/placementapp?retryWrites=true&w=majority`);
mongoose.connect(`mongodb://localhost/${env.db}`);

//acquire the connection to check if the connection is established successfully
const db = mongoose.connection;

//validate if error connecting
db.on('error', console.error.bind('error in connecting to the db'));

//validate if connected successfully
db.once('open', function(){
  console.log('Successfully connected to the database');
});