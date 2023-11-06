const mongoose = require('mongoose');

const userScema = mongoose.Schema({
Name: { type : String , required: true},
Email: {type : String, required: true, unique: true},
Password: {type: String, required: true},
},{timestamps:true});

const UserModel = mongoose.model('User',userScema);

module.exports = UserModel;
