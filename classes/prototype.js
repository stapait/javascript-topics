function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function () {
    console.log("Hello", this.name);
  }
}

person = new Person("John");
person.sayHello();

person.salary = 5000;
Person.prototype.saySalary = function () {
  console.log("The salary of", this.name, "is", this.salary)
}

person.saySalary();