//models/logi.js
const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    Username:String,
    Password:String,
},{ collection: 'User' });
 
const Login = mongoose.model('Login', loginSchema);

module.exports = Login;