
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var Note         = require('./note');



var blogSchema   = mongoose.Schema({
  blogger: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  notes: {
    id : Number,
   title: String
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

var Blog = module.exports = mongoose.model('Blog', blogSchema);


// get blogs
module.exports.getBlogs = function(callback, limit){
  Blog.find(callback).limit(limit);
}
//get blog
module.exports.getBlogById = function(id, callback){
  Blog.findById(id, callback);
}