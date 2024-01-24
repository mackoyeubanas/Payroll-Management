const mongoose = require('mongoose');
const mysql = require('mysql');
mongoose.set('useCreateIndex', 'useUnifiedTopology', true);
mongoose.connect('mongodb+srv://admin:admin131@zuitt.cfuxf.mongodb.net/Payroll_Online?retryWrites=true&w=majority');  //connect db
const db = mongoose.connection;  //acquire the connection



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Success db');
});





