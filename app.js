/* Primary Application interface

Date                            notes       
8-16-16                         Initial Create.

*/

var express = require('express');
var path = require('path');
var app = express();
var name = "Dustin Eastes";
var bodyParser = require('body-parser');
var kittenRoutes = require('./kittenRoutes');
var gardenRoutes = require('./gardenRoutes');

app.use(express.static('routes'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 

// use the routing logic here.
app.use('/', kittenRoutes);
// connect to the mongoos database.
app.use('/garden', gardenRoutes);

function renderPage(res, message){
    res.render('home', {
        message:message
    });
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});