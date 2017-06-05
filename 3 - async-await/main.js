const util = require('util');

const validateParams = async (params) => {
  console.log("validating params", util.inspect(params))
  return new Promise((resolve, reject) => {
    resolve(params.id)
  });
}

const searchDatabase = async (id) => {
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

const requestService = async (user) => {
  console.log(`requesting more data fom user: ${util.inspect(user)}`);
  return new Promise((resolve, reject) => {
    user.money = 1500;
    resolve(user);
  });
}

const handleErrors = (err) => {
  console.log(err);
}

const params = {
  id: 42
}

const doRequest = async () => {
  try {
    var id = await validateParams(params);
    var user = await searchDatabase(id);
    user = await requestService(user);
    printResult(user);
  } catch (err) {
    handleErrors(err);
  }
}

console.log("waiting for request");

doRequest();

console.log("end request")