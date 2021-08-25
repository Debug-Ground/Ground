'use strict';

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require("express-session");
var helmet = require('helmet');
var fs = require('fs');

const passport = require('passport')

var indexRouter = require('./routes/');
var authRouter = require('./routes/auth');
var companyRouter = require('./routes/company');
var faqRouter = require('./routes/faq');
var noticeRouter = require('./routes/notice');
var questionRouter = require('./routes/question');
var manualRouter = require('./routes/manual');
var groupRouter = require('./routes/group');
var dashRouter = require('./routes/dash');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/company', companyRouter);
app.use('/faq', faqRouter);
app.use('/notice', noticeRouter);
app.use('/question', questionRouter);
app.use('/manual', manualRouter);
app.use('/group',groupRouter);
app.use('/dash',dashRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.use(helmet());
app.disable('x-powered-by'); //HELMET으로 X-powerde-by 안보이게 수정

app.use(function(req,res,next){
  var dir = './public/images';
    if(!fs.existsSync(dir)) fs.mkdirSync(dir);
});

module.exports = app;

