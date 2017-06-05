// https://nodejs.org/api/util.html#util_util_inherits_constructor_superconstructor

var util = require('util');

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function () {
    console.log("Hello", this.name);
  }
}

function Employee(name, age, salary) {
  Person.call(this);
  this.salary = salary;

  this.constructor.super_(name, age);

  this.saySalary = function () {
    console.log("The salary of", name, "is", salary)
  }
}

util.inherits(Employee, Person);

var employee = new Employee("John", 40, 5000);

employee.saySalary();