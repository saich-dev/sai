var count = 0;
while(count <5){
    console.log("count",count++);
}
console.log("program end with count",count);

//for Loop//
//for loop syntax//
//for (initialization; condition; increment){}

//ex1//
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log("program end with count",count);
//ex2// 
for (let k = 0; k < 10; k++) {
    console.log(k);
}


//while Loop//
//while Loop syntax//
//while (condition) {code block to be executed}

//ex1//
let u = 0;
while (u < 8) {
  console.log(u);
  u++;
}
//ex2//
let o = 1;
while (o < 8) {
  console.log(o);
  o++;
}
//ex3//
let a = 4;
while (a < 8) {
  console.log(a);
  a++;
}


//do-while//
//do-while syntax//
//do {
  // code block to be executed
//} while (condition);


//ex1//
let t = 0;
do {
  console.log(t);
  t++;
} while (t < 5);
console.log("program end with count",count);
//ex2//
let p = 2;
do {
  console.log(p);
  p++;
} while (p < 5);
console.log("program end with count",count);
//ex2//
let r = 4;
do {
  console.log(r);
  r++;
} while (r < 5);
console.log("program end with count",count);


//for/in Loop//
//for/in Loop  syntax// 
//for (variable in object) {
  // code block to be executed
//}

//ex1//
const person = {fname: "John", lname: "Doe", age: 25};
for (let key in person) {
  console.log(key + ": " + person[key]);
}

//ex2//
let numbers = [10, 20, 30, 40];

for (let index in numbers) {
  console.log(index + ": " + numbers[index]);
}


// for/of Loop//
//for/of Loop syntax//
//for (variable of iterable) {
  // code block to be executed
//}

//ex1//
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
  console.log(fruit);
}
//ex2//
let greeting = "Hello";
for (let char of greeting) {
  console.log(char);
}

//foreach loop//
//ex//
let num = [1, 2, 3, 4, 5];
num.forEach(function(number) {
console.log(number);
});










//continue statement//
//ex1//
for (let i = 1; i < 5; i++) {
  if (i === 4 ) {
    continue; 
  }
  console.log(i);
}
//ex2//
for (let j = 0; j < 10; j++) {
  if (j % 2 === 0) {
    continue; 
  }
  console.log(j);
}


//break//
//ex1//
for (let e = 0; e < 5; e++) {
  if (e === 2) {
    break; 
  }
  console.log(e);
}
//ex2//
let i = 0;
while (i < 5) {
  if (i === 3) {
    break; 
  }
  console.log(i);
  i++;
}


//Combining continue and break //
//ex///
for (let i = 0; i < 10; i++) {
  if (i === 1) {
    continue;
  }
  if (i === 4) {
    break; // 
  }
  console.log(i);
}






