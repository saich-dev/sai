// const await = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:'vikas', age : 25});

//     },2000)

// })
// promise.then(data=>console.log(data));

// async function getpromise(){
//     const respones = await promise;
//     console.log("respones",respones)
// }
// getpromise()

async function getUser1(){
    const respones = await fetch('./https://jsonplaceholder.typicode.com/users');
    const data = await respones.json();
    console.log("respones async await",data)
}
getUser1();

function getUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log("Fetch", data);
            // If you need to use the data outside this block, you need to handle it here
            console.log("Then response", data);
        })
    }

getUser();

// Async/Await //
  //A syntactic sugar built on top of promises that allows writing asynchronous code in a synchronous-like manner.//
// example1 //
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: 'vikas', age: 25 });
    }, 2000);
});

myPromise.then(data => console.log(data));

// async function getpromise(){
//     const response = await myPromise;
//     console.log("response", response);
// }
// getpromise();

// async function getUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log("response", data);
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//     }
// }

// getUser();



// Example2 //
async function fetchData() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data fetched');
      }, 1000);
    });
  
    let data = await promise;
    console.log(data);
  }
  
  fetchData();
  


  //setTimeout and setInterval://
  setTimeout(() => {
    console.log('Executed after 1 second');
  }, 1000);
  
  setInterval(() => {
    console.log('Executed every 2 seconds');
  }, 2000);

  

  //XHR (XMLHttpRequest)://
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
  xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
  };
 xhr.send();



 // axios //
 //Axios is a popular JavaScript library used to make HTTP requests from both the browser and Node.js//

 // Import Axios (only necessary in a Node.js environment)
// const axios = require('axios');

// Making a GET request
// axios.get('https://jsonplaceholder.typicode.com/users')
// .then(response => {
//   console.log(response.data); // Handle the response data
// })
// .catch(error => {
//   console.error('Error:', error); // Handle the error
// });

