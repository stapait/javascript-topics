class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Hello", this.name);
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  saySalary() {
    console.log("The salary of", this.name, "is", this.salary)
  }
}

var employee = new Employee("John", 40, 5000);
employee.sayHello();
employee.saySalary();