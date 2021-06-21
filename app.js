
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require('express-session');
var mysql=require('mysql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin.js');

// venue
var venueRouter = require('./routes/venue');

var app = express();

app.use(session({
    secret: 'lala land',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var dbConnectionPool=mysql.createPool({host:'localhost', database: 'PROJECT'});
app.use(function(req,res,next) {
    req.pool= dbConnectionPool;
    next();
});

// app.use('/dashboard_user.html',function (req, res, next) {
//     console.log("rq path =");
//     console.log(req.path);

//     if(req.session.user.role !== 'individual'){
//             res.redirect('/login');
//     }else{
//         next();
//     }
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin',adminRouter);

//venue
app.use('/venue', venueRouter);


module.exports = app;