//var color = "green";
//let color = "red";
//color =  "blue";
//console.log(color);

//const val = "RED"; //In const reassignment not allowed;//
//val =  "yellow";
//console.log(val);

let obj = {
    name: "sai",
    age : 25,
}
console.log("obj", obj);

let keys = Object.keys(obj);
console.log("keys", keys);

let value = Object.values(obj);
console.log("value", value);

console.log(obj.name);
console.log(obj.age);
obj['age'] = 30;
obj['name'] = 'kumar';
obj.gender = 'male';

console.log("obj", obj);


const obj1 = {  //in const reassignment not allowed//
    name: "sai",
    age : 25
}
console.log("obj1", obj1);

//obj1 ={  // Reassignment not allowed in const//
    //name: "sai",
    //age : 25
//}
//console.log("obj1", obj1);


obj1.color = "red";  // update the object is allowed//
console.log("obj1", obj1);



// scope of  const and let is block scopes//
{ // it is block//
    let v = 10;

}
//console.log(v);

//var is functional scope//
// variable without let,const,var keywords is called global varible 

// example of global varible//
x = 10;
console.log("x",x); 

//function//
function sum(n1,n2){
    let num = n1+n2;
    console.log(sum);
    var data = 100;
}
sum(1,2);

// using let and const in function//

//let//
// let data = 200;
// function print(n1,n2){
//     let num = n1+n2;
//     console.log(data);
//     let data = 100;
// }
//print(1,2);

//const//
let data1 = 200;
function print(n1,n2){
    const num1 = n1+n2;
    console.log(data1);
    const data = 100;
}
print(1,2);



// Array Function//
//syntax//
// ( )=>expression
// parameter => Expression

//normal function//
function such(name) {
    console.log(`sai ${name}`);   
}
//Arrow function//
var see =(name)=> {
    console.log(`sai ${name}`);   
}

//1.Arrow Function with No Parameters//
    var greet = () => {
    console.log("Hello, World!");
    };
    greet();

//2.Arrow Function with a Single Parameter//
    var square = x => {
    return x * x;
    };
    console.log(square(2));
    
//3.Arrow Function with Multiple Parameters//
    var add = (a, b) => {
    return a + b;
    };
    console.log(add(3, 5)); 

//4.Arrow Function with Implicit Return//
    var multi = (a, b) => a * b;
    console.log(multi(2, 3)); 

//5.Arrow Function Returning an Object//
    const User = (name, age) => ({
    name: name,
    age: age
    });
    console.log(User("sai", 25)); 

//6.Arrow Function with Rest Parameters//
    const All = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
    };
    console.log(All(1, 2, 3, 4));

//7.Arrow Function and this//  
//(Arrow functions are often used in situations where you need to preserve the this context from the enclosing scope:)

 



//Rest Operator (...)// 
//(The rest operator allows you to represent an indefinite number of arguments as an array. It's used in function parameter lists.)

//Syntax of rest operator//
    function functionName(...parameters) {
    // function body
    }

// Examples //

    var [a,...b] = [5,4,3,2,1];
    console.log(a);
    console.log(b);


//Example with Function Parameters//
    function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
    }
    console.log(sum(1, 2, 3)); 
    console.log(sum(4, 5, 6, 7));

//Example with Destructuring//
    const [first, second, ...rest] = [1, 2, 3, 4, 5];
    console.log(first);  
    console.log(second); 
    console.log(rest);  



//Spread Operator//
//(The spread operator allows you to spread elements of an array or object.) 

//Syntax//
// For arrays
//const newArray = [...iterable];
// For objects
//const newObject = {...iterable};

//Examples of Spread Operator//
    var D = ["sai","challa",12,55,"uday"];
    var S = ["Anjan","kumar",44,55, ...D];
    console.log("S",S);  
 
    var yellow = ["challa",12,55,];
    var RED = ["Anjan","kumar",44,55];
    var Pink = ["kumar",88,66,...RED];
    console.log("Pink",Pink);  

//Example with Arrays//
    var arr1 = [5, 6, 7];
    var arr2 = [8, 9, 10];
    var combined = [...arr1, ...arr2];
    console.log(combined); 

//Example with Objects//
    const obj2 = {
        "name": "saikumar",
        "age": 25
    };
    const obj3 = {
        c: 3,
        d: 4
    };
    const SObject = {...obj2, ...obj3};
    console.log(SObject); 



// Destructuring //
//(Destructuring is a convenient way to extract values from arrays or properties from objects into distinct variables.)   

//Examples//
    const car ={
    name:"Suziki",
    color:"grey",
    tyres : 8,
    seats : 4
    }
    console.log(car.name); 
    console.log(car.color); 
    console.log(car.tyres); 
    console.log(car.seats); 



    const person ={
    name:"sai",
    Gender:"male",
    age: 25
    }
    let {name,Gender,age} = person;
    console.log(person);
    const ag = keys;
    console.log(ag);
    const ak = value;
    console.log(ak);


//Array Destructuring//
//(Array destructuring allows you to unpack values from arrays into distinct variables.)
    const numbers = [5, 4, 6];
    const [one, two, three] = numbers;
    console.log(one);   
    console.log(two);   
    console.log(three); 

//Skipping Elements//
//(You can skip elements by leaving gaps in the destructuring pattern.)
    const number = [1, 2, 3, 4];
    const [A, , C] = number;
    console.log(A);  
    console.log(C);

//Using Rest Operator with Destructuring//
//(The rest operator can be used to collect the remaining elements into an array.)
    const num = [1, 2, 3, 4, 5];
    const [X, Y, ...restS] = num;
    console.log(X);  
    console.log(Y); 
    console.log(restS);   

//Object Destructuring//
//(Object destructuring allows you to unpack properties from objects into distinct variables.)
    var parent = {
    names: 'sai',
    ages: 26,
    city: 'New York'
    };
    var { names, ages, city } = parent;
    console.log(names); 
    console.log(ages);  
    console.log(city); 

//Nested Destructuring//
//(You can destructure nested arrays and objects.)    
    const numb = [1, [2, 3], 4];
    const [E, [F,G],H] = numb;
    console.log(E);  
    console.log(F); 
    console.log(G);  
    console.log(H); 

//Nested Object Destructuring//
    const carS ={
    namees:"BENZ",
    color:"grey",
    tyres :{
      Tyres : 4,
      Wheels : 6
    }
    }
    let {namees,color,tyres:{Tyres,Wheels}} = carS;
    console.log(namees);
    console.log(color);
    console.log(Tyres);
    console.log(Wheels);

//import//

// import { add, subtract } from './ob.js';
// console.log(add(2, 3));      
// console.log(subtract(5, 2)); 


// Import named exports
// import { add, subtract } from './math.js';
// import greet from './utils.js';
// console.log(add(2, 3));          // Output: 5
// console.log(subtract(5, 2));     // Output: 3
// console.log(greet('Alice'));     // Output: Hello, Alice!


//export//
// Default export//
    // export default function greet(name) {
    // return `Hello, ${name}!`;
    // }
  

// Class//
    class cars {
    constructor(name){
    this.name = name
    }
    }
    const firstcar =new cars('volvo');
    const secondcar =new cars('Benz');

    console.log("firstcar",firstcar);
    console.log(firstcar.name);
    console.log("secondcar",secondcar);
    console.log(secondcar.name);

//default parameter//
 function get(name="vivek") {
    console.log (`hello ${name}`)
 }   
 get ();
 get ("mahesh");
    

   



  




    


  
  


  
    
  
    

  

  
  


