var obj = {}
console.log('obj',obj);
console.log(typeof(obj));

// add and modify properties in object//
var obj1 = {name:"sai",age:"25"};
console.log('obj1',obj1);
obj1.city = 'Alamuru'       // existing obj you add another we use it
console.log('obj1',obj1);
obj1['contact'] = '5466555454' //newly created object we use it
console.log('obj1',obj1);
console.log( 'typeof obj1',typeof(obj1));
obj1.number = '54665554523234'
console.log('obj1',obj1);
// access property of an obj1//
console.log(obj.name);
console.log('name');

//Array//
var b = [1,2,3,4,5];
console.log(b);
b[1] = 10;
console.log(b);
//strings in array//

let system = 'laptop';
system[2] = 'o';
console.log(system);
console.log(system[1]);
console.log(system);

//Date//
var dateTime = new Date();
console.log('datetime',dateTime);
console.log(dateTime.getFullYear());
console.log(dateTime.getDate());
console.log(dateTime.getTime());











