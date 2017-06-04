// http://exploringjs.com/es6/ch_promises.html

'use strict';

const util = require('util');

const validateParams = (params) => {
  console.log("validating params", util.inspect(params))
  return new Promise((resolve, reject) => {
    resolve(params.id)
  });
}

const searchDatabase = (id) => {
  console.log("searching database for id", id);
  return new Promise((resolve, reject) => {
    resolve({
      id: id,
      name: 'john'
    })
  });
}

const printResult = (user) => {
  console.log(`The user: ${util.inspect(user)}`);
}

const requestService = (user) => {
  console.log(`requesting more data fom user: ${util.inspect(user)}`);
  return new Promise((resolve, reject) => {
    user.money = 1500;
    resolve(user);
  });
}

const handleErrors = (err) => {
  console.log(`Error detected: ${err}`);
}

const params = {
  id: 42
}

validateParams(params)
  .then(searchDatabase)
  .then(user => requestService(user))
  .then(user => printResult(user))
  .catch(handleErrors)