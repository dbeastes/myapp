/* Primary Application interface

Date                            notes       
8-16-16                         Initial Create.

*/

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();
// connect to the mongoos database.

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

router.get('/', function(req,res){
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

router.post('/', function(req,res){
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
            res.render('home', {
                message:   message,
                oneLastThing: "",
                layout: "Dig in the on this!"
            });  
        }
        else{
            var newKitten = new cat({
                name:req.body.name,
                weight:req.body.weight
            });
            newKitten.save();
            res.render('home', {
                message:   message,
                oneLastThing: "",
                layout: "Dig in the on this!"
            });
        }
        
    });
});

router.get('/kitten', function(req,res){
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

router.get('/inkblot', function(req,res){
    
        res.render('inkBlot_home', {
        message:'The Ink Blot',
        }); 
   
});


module.exports = router;