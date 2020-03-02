const path = require('path');
var VerifyToken = require('../services/requireLogin.js');
var role = require("../services/role.js");
const routes = require('express').Router();

const admin = require("./admin");
//routes.use('/admin', VerifyToken, role.hasAdminRole, admin);
routes.use('/admin', admin); //temp - delete after creating admin 2/29/20

const user = require('./user');
routes.use('/user', VerifyToken, role.hasUserRole, user);

const public = require('./public');
routes.use('/', public);

module.exports = routes;
