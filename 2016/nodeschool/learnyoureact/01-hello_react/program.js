/*
 * HELLO_REACT - Exercise 1 of 11
 * First things first, let's print Hello World!
 *
 * -------------------------------------------------------
 * Synopsis - for an explanation and details, see task.txt
 * -------------------------------------------------------
 *
 * $ mkdir learnyoureact; cd learnyoureact; npm init -y;
 * $ npm install --save react react-dom express body-parser express-react-views@0.9.0 babel@5.8.23
 *
 * The code [below] creates a small Express server that renders our React components.
 * If someone navigates to /, views/index.jsx will be rendered.
 * This program uses the express-react-views module.
 */
var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
   ignore: false
});

app.use('/', function(req, res) {
   res.render('index', '');
});

app.listen(app.get('port'), function() {});
