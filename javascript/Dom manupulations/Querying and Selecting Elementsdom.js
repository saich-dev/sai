  
 /*
 window ---> root object,global object, 
 1.Dom(Document object model) ---> Elements
 2.Bom(Browser object model)  ---> Display,navigator,Location
 3.javascript ---> array,methods,objects,classes etc.

*/  


// Methods to Select Elements:
//     getElementById: Selects a single element by its ID.
//     getElementsByClassName: Selects multiple elements by their class name.
//     getElementsByTagName: Selects multiple elements by their tag name.
//     querySelector: Selects the first element that matches a CSS selector.
//     querySelectorAll: Selects all elements that match a CSS selector.



//Example: Querying and Selecting Elements


    // Selecting an element by ID
    const title = document.getElementById('main-title');
    console.log('Element with ID "main-title":', title);
    title.classList.add('highlight'); // Highlight the element

    // Selecting elements by class name
    const textElements = document.getElementsByClassName('text');
    console.log('Elements with class "text":', textElements);
    for (let i = 0; i < textElements.length; i++) {
      textElements[i].classList.add('highlight'); // Highlight each element
    }

    // Selecting elements by tag name
    const listItems = document.getElementsByTagName('li');
    console.log('List items:', listItems);

    // Selecting an element with querySelector
    const firstParagraph = document.querySelector('.text');
    console.log('First element with class', firstParagraph);
    firstParagraph.style.color = 'blue'; // Change text color

    // Selecting elements with querySelectorAll
    const allTextElements = document.querySelectorAll('.text');
    console.log('All elements with class "text":', allTextElements);
   

    

    