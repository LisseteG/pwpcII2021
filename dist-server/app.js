"use strict";var _httpErrors=_interopRequireDefault(require("http-errors")),_express=_interopRequireDefault(require("express")),_path=_interopRequireDefault(require("path")),_cookieParser=_interopRequireDefault(require("cookie-parser")),_morgan=_interopRequireDefault(require("morgan")),_routes=_interopRequireDefault(require("./routes")),_users=_interopRequireDefault(require("./routes/users"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}/*var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express(); */ //Importar dependencias
var app=(0,_express.default)();// view engine setup
// catch 404 and forward to error handler
// error handler
app.set("views",_path.default.join(__dirname,"views")),app.set("view engine","hbs"),app.use((0,_morgan.default)("dev")),app.use(_express.default.json()),app.use(_express.default.urlencoded({extended:!1})),app.use((0,_cookieParser.default)()),app.use(_express.default.static(_path.default.join(__dirname,"public"))),app.use("/",_routes.default),app.use("/users",_users.default),app.use(function(a,b,c){c((0,_httpErrors.default)(404))}),app.use(function(a,b,c){// set locals, only providing error in development
// render the error page
c.locals.message=a.message,c.locals.error="development"===b.app.get("env")?a:{},c.status(a.status||500),c.render("error")}),module.exports=app;