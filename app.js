var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var companyRouter = require('./routes/company');
var faqRouter = require('./routes/faq');
var noticeRouter = require('./routes/notice');
var questionRouter = require('./routes/question');
var noticewriteRouter = require('./routes/notice_write');
var noticedetailRouter = require('./routes/notice_detail');
var questionwriteRouter = require('./routes/question_write');
var manualRouter = require('./routes/manual');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/company', companyRouter);
app.use('/faq', faqRouter);
app.use('/notice', noticeRouter);
app.use('/question', questionRouter);
app.use('/noticewrite', noticewriteRouter);
app.use('/questionwrite', questionwriteRouter);
app.use('/noticedetail', noticedetailRouter);
app.use('/manual', manualRouter);

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

module.exports = app;
