
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/client'));

Note     = require('./app/models/note.js');
Blog     = require('./app/models/blog.js');



mongoose.connect('mongodb://127.0.0.1:27017/mydb' , { useMongoClient: true });



// create a new user called chris
//var kkk = new Blog({
   // blogger: 'asma',
   // title: 'blog2',
   // notes:{id: 2,
   // title: "note2"
    //}
    //});


 //call the built-in save method to save to the database
//kkk.save(function(err) {
    //if (err) throw err;

   // console.log('Blog saved successfully!');
//});


var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}

app.use(myLogger)


app.get('/', function(req, res) {

    res.json({ message: 'hooray! welcome to our api!' });


});

app.post('/', function (req, res) {
    res.send('POST request to the homepage');
});



app.get('/api/notes', function(req, res) {
        Note.getNotes(function(err, notes) {
            if (err) {
                throw err;
            }
            res.json(notes);
        });
    });

app.get('/api/notes/:_id', function(req, res) {
    Note.getNoteById(req.params._id, function(err, note) {
        if (err) {
            throw err;
        }
        res.json(note);
    });
});



app.post('/api/notes', function(req, res) {
    var note = req.body;
    Note.postNote(note,function(err, note) {
        if (err) {
            throw err;
        }
        res.json(note);
    });
});

app.delete('/api/notes/:_id', function(req, res) {
    var id = req.params._id;
    Note.deleteNote(id,function(err, note) {
        if (err) {
            throw err;
        }
        res.json(note);
    });
});

app.get('/api/blogs', function(req, res) {
    Blog.getBlogs(function(err, blogs) {
        if (err) {
            throw err;
        }
        res.json(blogs);
    });
});

app.get('/api/blogs/:_id', function(req, res) {
    Blog.getBlogById(req.params._id, function(err, blog) {
        if (err) {
            throw err;
        }
        res.json(blog);
    });
});


var port = process.env.PORT || 8080;
app.listen(port);
console.log('Magic happens on port ' + port);