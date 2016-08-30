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

var gardenSchema = mongoose.Schema({
    date: String,
    type: String,
    amount: String
});

var gardenPost = mongoose.model('gardenPost', gardenSchema);

router.get('/', function(req, res){
        res.render('garden', {
        message:'The Ink Blot',
        }); 
    
});

module.exports = router;
