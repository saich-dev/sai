//Object-Oriented Programming (OOP)//
//Object-Oriented Programming (OOP) encompasses various styles or approaches, each emphasizing different aspects of how objects and classes interact.//
//Types of Object-Oriented Programming (OOP)//
//1.Prototype-based OOP//
//2.Class-based OOP//
//3.Functional OOP//
//4.Aspect-oriented Programming (AOP)//
//5.Mixin-based Inheritance//


//1.Prototype-based OOP//
    let vehicle ={
        wheels:4
    }
    let car ={
        seats:5
    }
    let driver ={

    }
    console.log(`vehicle`,vehicle, vehicle.__proto__);
    console.log(`car`,car,car.__proto__);
    console.log(`driver`,driver,driver.__proto__);




    let vehicles ={
        wheels:4 
    }
    let cars ={
        seats:5
    }
    let drivers ={
        __proto__ : vehicles,
        wheels:10
    }
    console.log(`vehicles`,vehicles, vehicles.__proto__);
    console.log(`cars`,cars,cars.__proto__);
    console.log(`drivers`,drivers,drivers.wheels);


// Construtor Functions//
//(A constructor function in JavaScript is a special type of function used to create and initialize objects.)
    function Employee (namep,agep,designp){
    this.name = namep;
    this.age = agep;
    this.design = designp;
    this.setAge = function (newAge){
        this.age = newAge;
    }
    this.company = 'Microsoft';
    } 
    Employee.area ='india'
    var emp1 = new Employee('sai',25,'developer');
    var emp2 = new Employee('kumar',26,'manager');
    console.log("emp1",emp1);
    console.log("emp2",emp2);
    emp1.setAge(22);
    console.log("after set age of emp1",emp1);



    // Another Example of  constructor function
    function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
    console.log("Hello, my name is " + this.name);
    };
    }
    const person1 = new Person("Alice", 25);
    const person2 = new Person("Bob", 30);
    console.log(person1.name); 
    console.log(person2.age); 
    person1.sayHello(); 
    person2.sayHello(); 
  

//Class-Based using constructor function//
class user{
    constructor(namep,agep,designp){
    this.name = namep;
    this.age = agep;
    this.design = designp;
    this.setAge = function (newAge){
        this.age = newAge;
    }
}
static printage(){
    console.log(`${ this.name} is ${ this.age} old`); 
}
}
var user1 = new user('challa',25,'manager');
console.log("user1",user1); 
user.printage();



//Private Function//
    function Employee (namep,agep,designp,rating){
    var _rating = rating;
    this.name = namep;
    this.age = agep;
    this.design = designp;
    this.setAge = function (newAge){
        this.age = newAge;
    }
    this.setRating = function(newrating){
        _rating = rating;
    }
    } 
    var emp1 = new Employee('sai',25,'developer',5);
    var emp2 = new Employee('kumar',26,'manager',3);
    console.log("emp1",emp1);
    console.log("emp2",emp2);
    emp1.setRating();
    emp2.setRating();
//ways to write constructor function in javascript//
//1.Traditional Constructor Function//
    function numbers(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
    }
    const per1 = new numbers('sai', 23);
    per1.greet();  
    console.log ("per1",per1)

//2. ES6 Class Syntax //
    class sons {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    }
    const Primary = new sons('Jannu', 25);
    Primary.greet(); 

//3. Factory Function//
    function createPerson(name, age) {
    return {
    name: name,
    age: age,
    greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    };
    }
    const uno = createPerson('Alice', 28);
    uno.greet();  

//4.ES6 Class Expression//
    const Person5 = class {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    };
    const leo = new Person5('Emma', 22);
    leo.greet();  
  
    
  
  
  
  
  




//JSON => javscript object notation
//(JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is primarily used to transmit data between a server and a web application as text.)
