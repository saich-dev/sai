// what is inheritance //
//Inheritance in JavaScript is a mechanism where one object can inherit the properties and methods of another object.//
//Types of Inheritance in JavaScript//

//1.Prototypal Inheritance://
//Example of Prototypal Inheritance
// Parent object
    const person = {
    name: 'kumar',
    greet: function() {
    console.log(`Hello, my name is ${this.name}`);
    }
    };
  
    // Child object inheriting from parent object//
    const student = Object.create(person);
    student.name = 'kumar';
    student.greet();  

//2. Class-based Inheritance
//Example of Class-based Inheritance//  
// Parent class//
    class Animal {
    constructor(name) {
    this.name = name;
    }
    speak() {
    console.log(`${this.name} makes a noise.`);
    }
    }
    // Child class inheriting from parent class
    class Dog extends Animal {
    constructor(name, breed) {
    super(name);  // Calls the parent class's constructor
    this.breed = breed;
    }
    speak() {
    console.log(`${this.name} barks.`);
    }
    }
    const dog = new Dog('Rex', 'German Shepherd');
    dog.speak();  

 //another example//
    function Human(name,age){
    this.name = name;
    this.age = age;
    this.arms = 2;
    this.legs = 2;
    }  

    function Employee(name, age, desig){
    Human.call(this,name,age);
    this.desig = desig;
    this.setage = function(newage){
        this.age = newage;

    }
    } 
    Employee.prototype = Object.create(Human.prototype);
    Employee.prototype.construtor = Employee;

    var emp = new Employee('kumar',24,"manager");
    var emp1 = new Employee('sai',23,"Developer");

    Human.prototype.feet = 2;
    Employee.prototype.gender = 'male'

    console.log("emp",emp);
    console.log("emp1",emp1);

  //ways to write Inheritance in JavaScript with examples//

  //1. Prototypal Inheritance using Object.create()//
  // Parent object//
    const parent = {
    greet() {
    console.log('Hello from parent');
    }
    };
    // Child object inheriting from parent object
    const childs = Object.create(parent);
    childs.greet(); 

  //2. Prototypal Inheritance by Setting the Prototype//
    function Parents() {
    this.name = 'Parent';
    }
    Parents.prototype.greet = function() {
    console.log('Hello from ' + this.name);
    };
    function Childs() {
    Parents.call(this);  // Call the parent constructor
    this.name = 'Child';
    }
    Childs.prototype = Object.create(Parents.prototype);
    Childs.prototype.constructor = Childs;
    const child = new Childs();
    child.greet();  
    

//3. Class-based Inheritance (ES6)//
    class rent {
    constructor(name) {
    this.name = name;
    }
    greet() {
      console.log(`Hello from ${this.name}`);
    }
    }
    class Chil extends rent {
    constructor(name) {
    super(name);  // Call the parent class's constructor
    }
    }
    const chil = new Chil('Child');
    chil.greet();  
  

//4.Using __proto__//
    const parentr = {
    greet() {
      console.log('Hello from parent');
    }
    };
    const childr = {};
    childr.__proto__ = parentr;
    childr.greet();  
  
//5. Mixins //
    const mixin = {
    greet() {
      console.log('Hello from mixin');
    }
    };
  
    const chi = Object.assign({}, mixin);
    chi.greet(); 
  

