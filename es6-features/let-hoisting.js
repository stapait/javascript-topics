// hoisting
const printMessage = (x) => {
  if (x > 10) {
    var message = "x > 10";
  } else {
    var errorMessage = "x <= 10"
  }

  console.log(message);
}

printMessage(15);

for (let i = 0; i < 10; i++);
console.log(i);