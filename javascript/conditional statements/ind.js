//conditional statements//

//if statement//
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
}

//else statement//
let ages = 16;

if (ages >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

//elseif statement//
let score = 75;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

//Ternary Operator(The ternary operator (? :) is a shorthand for the if-else statement. It assigns a value based on a condition.)//
let value = 20;
let Vote = (value >= 18) ? "Yes" : "No";
console.log(Vote); 

//switch case//
let fruit = 'Banana';
switch (fruit) {
  case 'Apple':
    console.log("This is an apple")
    break;
  case 'Banana':
    console.log("This is an Banana")
    //break;
  case 'Grapes':
    console.log("This is an Grapes")
    break;
  default:
    console.log("This is no fruits")
   
}

let fruits = 'Grapes';
switch (fruits) {
  case 'Apple':
    console.log("This is an apple")
    //break;
  case 'Banana':
    console.log("This is an Banana")
    //break;
  case 'Grapes':
    console.log("This is an Grapes")
    //break;
  default:
    console.log("There is no fruits")
   
}


//Array//
var arr = [22,33,44,55,66];
arr[1]= 34;
console.log("arr", arr)

var arr0 = [15,38,89,74,68];
var arr1 = new Array();
var arr2 = [];
var arr3 = new Array(55); // Length of the array//
var arr4 = new Array(55,18); //if more than one item is treted as Array items//

console.log(arr0,arr1,arr2,arr3,arr4)

//index of array//
var val = [38,79,64,58,44,75];
val[2] = 50;
console.log(val[2]);
console.log(val);


//add to prototype //
Array.prototype.arr = [1,2,3,4];
console.log(Array.prototype);

Array.prototype.name = 'sai';
Array.prototype.age  = 25;
console.log(Array.prototype);
console.log(Array.prototype);
console.log(Array.prototype.length);

//multi-dimentional array//
//ex1//
var arr = [["Van", 3000], ["car", 1000], ["bike", 500]];
 arr [0][1] = 5200;
 arr [1][1] = 50000;
 arr [2][1] = 6000;
 console.log(arr);
 arr[0][0] = 'cycle';
 console.log(arr);
 arr[1][0] = 'ola';
 console.log(arr);
 arr[2][0] = 'rapido';
 console.log(arr);

//ex2//
var mul_arr = [
  [25, 88, 99],
  [65, 47, 57],
  [44, 32, 77]
] 
for(var v=0; v<mul_arr.length; v++){
  console.log(mul_arr[v][0]);
  console.log(mul_arr[v][1]);
  console.log(mul_arr[v][2]);
}
console.log("complete");
for(var v=0; v<mul_arr.length; v++){
  for(var sv=0; sv<mul_arr[v].length; sv++){
    console.log(mul_arr[v][sv]);
  }
}
console.log('mul_arr.prototype',mul_arr);





 





