var letters = {
  a: 10,
  b: 2,
  c: 5
}

console.log(`Total letters a: ${letters['a']}`);
console.log(`Total letters b: ${letters['b']}`);
console.log(`Total letters c: ${letters['c']}`);

// var letters = new Map();
// letters.set('a', 10);
// letters.set('b', 2);
// letters.set('c', 5);

// console.log(`Total letters a: ${letters.get('a')}`);
// console.log(`Total letters b: ${letters.get('b')}`);
// console.log(`Total letters c: ${letters.get('c')}`);

// objects como chaves:
// var user1 = {
//   id: 1,
//   name: "paulo"
// }
// var user2 = {
//   id: 2,
//   name: "bruna"
// }

// var passwords = {};
// passwords[user1] = '123456';
// passwords[user2] = 'teste123';

// console.log(passwords[user1]);
// console.log(passwords[user2]);

///// objects como chaves em um Map
// var passwords = new Map();
// passwords.set(user1, '123456');
// passwords.set(user2, 'teste123');

// // console.log(passwords.get(user1));
// // console.log(passwords.get(user2));

/////// maps podem ser iterados
// for (let [key, value] of passwords) {
//   console.log(key.name, value)
// }