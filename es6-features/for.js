const names = ["joao", "maria", "ze", "monica"];

for (let i in names) {
  console.log(names[i]);
}

for (let name of names) {
  console.log(name);
}