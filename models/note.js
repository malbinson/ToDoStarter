// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//fields for Note are configured here
var noteSchema = new Schema({
    name: String
});

//attach schema to model
var Note = mongoose.model('Note', noteSchema);

// make this available to our users in our Node applications
module.exports = Note;
