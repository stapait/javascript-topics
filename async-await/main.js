'use strict';

var Ajv = require('ajv');
const fs = require('fs');

const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));

const loadSchema = async file => {
  return new Promise((resolve, reject) => {
    console.log(`loaded schema ${file}`);
    var ajv = new Ajv({ allErrors: true });
    resolve(ajv);
  });
}

const validateSchema = async (ajv, schema) => {
  return new Promise((resolve, reject) => {
    console.log(`validated schema ${schema}`);
    resolve();
  });
}

const doRequest = async (req) => {
  return new Promise((resolve, reject) => {
    console.log(`Doing the request`);
    resolve({ message: 'hello world from doRequest' });
  });
}

const handleError = async (err, res) => {
  res.end(JSON.stringify(err))
}

// const loginRequest = (req, res) => {
//   loadSchema('./loginrequest.json')
//     .then(ajv => validateSchema(ajv, 'loginrequest'))
//     .then(doRequest(req))
//     .then(responseData => res.end(JSON.stringify(responseData)))
//     .catch(err => handleError(err, res));
// }

const asyncConsole = async => {
  console.log("aaaaaaa")
}

const loginRequest = async (req, res) => {
  try {
    var ajv = await loadSchema('./loginrequest.json');
    await validateSchema(ajv, 'loginrequest');
    var responseData = await doRequest(req);
    await res.end(JSON.stringify(responseData));
  } catch (err) {
    handleError(err, res);
  }
}

app.get('/login', loginRequest);

app.listen(3000, () => { console.log('listening') });

console.log("xxxxxxxxxxxxxx")