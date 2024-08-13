//magiee making process
//chop onians
//chop carrot
//boil water 5 mins
//add onians  2mins boil
//add carrot 2 mins boil
//add masala 4 mins boil
//add magiee 4 mins boil

//Browser ---> Fetch data, Settimeout, intervel, accepting input from user , file handling .



console.log ("start making magiee");
boilwater(5000,'Starting stage');
console.log ("chop onians");
console.log ("add onians");
console.log ("chop carrot");
console.log ("add carrot");
console.log ("add masala")
console.log ("add magiee");
boilwater(15000,'Ending stage ');



function boilwater(time,msg){
    console.log ("boling water....",msg)
    setTimeout(()=>{
        console.log ("Boiling Done")
    },time)
  
}


//Promise//
// An object representing the eventual completion or failure of an asynchronous operation.//

//promite Asyncronus type //

var func1 =function(resolve,reject){
    setTimeout(function(){
        console.log ("in settimeout func1");
        resolve(10);
    },5000)
    resolve(10);
}

var callbackfn = function(value){
    console.log("in callbackfn print value")
    console.log("value",value)
    return value +1
}


var callbackfn1 = function(value){
    console.log("in callbackfn1 print value");
    console.log("value",value);
    return value +1;
}

var promise = new Promise(func1);
promise.then(callbackfn).then(callbackfn1).then(val=>{
    console.log("end value", val);
});



//promite syncronus type //
var func2 =function(resolve,reject){
    // setTimeout(function(){
    //     console.log ("in settimeout func1");
    //     resolve(10);
    // },5000)
   resolve(10);
}

var callbackfn2 = function(value){
    console.log("in callbackfn2 print value")
    console.log("value",value)
    return value + 1;
}

var callbackfn3 = function(value){
    console.log("in callbackfn3 print value");
    console.log("value",value);
    return value + 1;
}

var pro = new Promise(func2);
pro.then(callbackfn2).then(callbackfn3).then(val=>{
    console.log("end value", val);
});



// promite another example //

let promises = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });
  
  promises.then((data) => {
    console.log(data);
  });
  


  

 
  


  // Fetch API://
  // A modern way to make asynchronous HTTP requests, returning promises.//
  
//   fetch('./persons.json').then((response)=>{
//     return response.json();
//   }).then(data=>{

//     console.log ('Fetch',data)

//   });

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  

