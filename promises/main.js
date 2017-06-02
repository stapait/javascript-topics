'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const util = require('util');

app.use(bodyParser.urlencoded({ extended: false }));

const validateParams = (params) => {
  return new Promise((resolve, reject) => {
    console.log(`validating params ${util.inspect(params)}`);
    resolve();
  });
}

const searchDatabase = (req) => {
  return new Promise((resolve, reject) => {
    console.log('got id 1 from database');
    reject("error");
  });
}

const processUser = (id) => {
  return new Promise((resolve, reject) => {
    console.log(`processing user with id ${id}`);
    resolve({ name: 'john', money: 12345 });
  });
}

const sendResult = (res, user) => {
  return new Promise((resolve, reject) => {
    console.log(`sending result for user ${util.inspect(user)}`);
    res.end(JSON.stringify(user))
    resolve();
  });
}

const handleError = (err, res) => {
  res.end(JSON.stringify(err))
}

const loginRequest = (req, res, next) => {
  validateParams(req.params)
    .then(searchDatabase(req))
    .then(id => processUser(id))
    .then(user => sendResult(res, user))
    //.catch(err => handleError(err, res));
    .catch(function (err) { console.log("aaaaaaaaaas") });
}

app.get('/user/:id', loginRequest);

const port = 3000;
app.listen(port, console.log(`listening on port ${port}`));
