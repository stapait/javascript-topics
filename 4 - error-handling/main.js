// https://www.joyent.com/node-js/production/design/errors
const fs = require('fs');
const util = require('util');

// callbacks
fs.readFile('main.js', (err, data) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(`Data: ${data.toString()}`);
  }
});

// Promises
const readFilePromisified = util.promisify(fs.readFile);

readFilePromisified('main.js')
  .then((data) => console.log(data.toString()))
  .catch((err) => console.log(`Error: ${err}`));

// async-await
const readFileAsync = async(fileName) => {
  try {
    const data = await readFilePromisified(fileName);
    console.log(data.toString());
  } catch (err) {
    console.log(`Error: ${err}`)
  }
}

readFileAsync('main.js');