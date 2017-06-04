// http://exploringjs.com/es6/ch_promises.html

'use strict';

const util = require('util');

const validateParams = (params, callback) => {
  console.log("validating params", util.inspect(params))
  callback(params.id);
}

const searchDatabase = (id, callback) => {
  console.log("searching database for id", id);
  callback({
    id: id,
    name: 'john'
  });
}

const printResult = (user) => {
  console.log(`The user: ${util.inspect(user)}`);
}

const requestService = (user, callback) => {
  console.log(`requesting more data fom user: ${util.inspect(user)}`);
  user.money = 1500;
  callback(user);
}

const handleErrors = (err) => {
  console.log(`Error detected: ${err}`);
}

const params = {
  id: 42
}

const doRequest = () => {
  validateParams(params, (id) => {
    searchDatabase(id, (user) => {
      requestService(user, (user) => {
        printResult(user);
      });
    });
  });
}

console.log("waiting for request");

doRequest();

console.log("end request");