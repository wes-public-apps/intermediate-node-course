//import libraries
const mongo = require('mongoose');

//define a schema or object to represent a user
const UserSchema = new mongo.Schema({
    name: { type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: { type: String, required: true}
})

//Make schema available to rest of project
module.exports = mongo.model('User',UserSchema);