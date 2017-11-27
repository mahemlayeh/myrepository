
var mongoose     = require('mongoose');


var noteSchema   = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Note =  module.exports = mongoose.model('Note', noteSchema);

// get notes
module.exports.getNotes = function(callback, limit){
    Note.find(callback).limit(limit);
}
//get note
module.exports.getNoteById = function(id, callback){
    Note.findById(id, callback);
}

//add note
module.exports.postNote = function(note,callback){
    Note.create(note,callback);
}

//add note
module.exports.deleteNote = function(id, callback){
    var query = {_id: id};
    Note.remove(query,callback);
}