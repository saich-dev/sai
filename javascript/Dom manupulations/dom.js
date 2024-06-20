  
 /*
 window ---> root object,global object, 
 1.Dom(Document object model) ---> Elements
 2.Bom(Browser object model)  ---> Display,navigator,Location
 3.javascript ---> array,methods,objects,classes etc.

*/  
console.log(document)
console.log(document.firstChild)
console.log(document.lastChild)

document.getElementsByTagName('p')[0].innerHTML+='saikumar'
document.getElementsByTagName('div')[0].innerHTML='Es6 code'




// Selecting an element by ID
const tey = document.getElementById('title');
console.log(tey.textContent); 

// Selecting elements by class name
const para = document.getElementsByClassName('text');
console.log(para.textContent); 

// Selecting elements by tag name
const headings = document.getElementsByTagName('h1');
console.log(headings[0].textContent);

// Selecting an element using querySelector
const first= document.querySelector('.text');
console.log(first.textContent); 

// Selecting elements using querySelectorAll
const allParagraphs = document.querySelectorAll('.text');
allParagraphs.forEach(paragraph => {
  console.log(paragraph.textContent); 
});


// Changing text content
const tie = document.getElementById('title');
tie.textContent = 'Hello, DOM! i am saikumar';
console.log(tie.textContent); 

 // Changing HTML content
const paragraph = document.querySelector('.text');
paragraph.innerHTML = 'This is a saikumar paragraph.';
console.log(paragraph.innerHTML);

 // Creating a new element in dom
 const newParagraph = document.createElement('p');
 newParagraph.textContent = 'This is a new paragraph.';
 console.log(newParagraph.textContent); 
// Creating a new element in html file by using dom
 const newly = document.createElement('h2');
 newly.textContent = 'This is a new paragraph create by saikumar.';
 console.log(newly.textContent); 
