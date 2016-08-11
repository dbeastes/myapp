var express = require('express');
var path = require('path');
var app = express();
var name = "Dustin Eastes";
var bodyParser = require('body-parser');

app.use(express.static('routes'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
  var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('Database is accessed');
      // we're connected!
    });

var kittySchema = mongoose.Schema({
    name: String,
    weight: String
});
var cat = mongoose.model('cat', kittySchema);

app.get('/', function(req,res){
    var kittens;
    
    cat.find(function (err, cat) {
        if (err) return console.error(err);
        kittens = cat;
        console.log(kittens);
        
        
         res.render('home', {
        message:    "Add Your Kittens Here!",
        kittens: kittens,
        oneLastThing: "",
        layout:     "Dig in the on this!"
    });
    });

   
});
app.post('/', function(req,res){
    var message = 'New Cat Added!';
    console.log('A Post on the home page');
    console.log(req.body);
    cat.findOne({name: req.body.name}, function(err, thor) {
        if (err) return console.error(err);
        console.log(req.body.name);
        console.log(thor);
        if(thor){
            
            message = 'That Kitten Already Exists.';
            console.log('Changing message.');
            console.log(message);
            renderPage(res, message);
            
        }
        else{
            
            renderPage(res, message);
            var newKitten = new cat({
                name:req.body.name,
                weight:req.body.weight
            });
            newKitten.save();
        }
        
    });
});

app.get('/kitten', function(req,res){
    cat.find(function (err, cat) {
        if (err) return console.error(err);
        var kittens = cat;
        console.log(kittens);
        
        res.render('kitten', {
        message:'The Kittens!',
        kittens:kittens
        }); 
    });
});
   


function renderPage(res, message){
    res.render('home', {
        message:message
    });
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});