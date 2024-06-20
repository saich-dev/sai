//Traversing elements in the DOM//

// Parent Node Traversal:
//      parentNode: Returns the parent node of the specified node.
//      parentElement: Returns the parent element of the specified node (if it is an element node).


// Child Node Traversal
//      childNodes: Returns a live NodeList of all child nodes of the specified node, including text nodes and comments.
//      children: Returns a live HTMLCollection of all child elements of the specified node.
//      firstChild: Returns the first child node of the specified node.
//      firstElementChild: Returns the first child element of the specified node.
//      lastChild: Returns the last child node of the specified node.
//      lastElementChild: Returns the last child element of the specified node.


// Sibling Node Traversal:
//      nextSibling: Returns the node immediately following the specified node.
//      nextElementSibling: Returns the element immediately following the specified element.
//      previousSibling: Returns the node immediately preceding the specified node.
//      previousElementSibling: Returns the element immediately preceding the specified element.


// Example: Traversing the DOM //


    // Select the container element
    const container = document.getElementById('container');

    // Parent node traversal
    const par = container.parentNode;
    console.log('Parent node:', par);

    // Child node traversal
    const child = container.children;
    console.log('Child elements:', child);

    const firstChild = container.firstChild; // Note: This can be a text node
    const firstElementChild = container.firstElementChild; // This will be the <h1> element
    console.log('First child node:', firstChild);
    console.log('First child element:', firstElementChild);

    const lastChild = container.lastChild; // Note: This can be a text node
    const lastElementChild = container.lastElementChild; // This will be the <ul> element
    console.log('Last child node:', lastChild);
    console.log('Last child element:', lastElementChild);

    // Sibling node traversal
    const firstParagraph = container.children[1]; // Selects the first <p> element
    const nextSibling = firstParagraph.nextSibling; // Note: This can be a text node
    const nextElementSibling = firstParagraph.nextElementSibling; // This will be the second <p> element
    console.log('Next sibling node:', nextSibling);
    console.log('Next sibling element:', nextElementSibling);

    const secondParagraph = nextElementSibling;
    const previousSibling = secondParagraph.previousSibling; // Note: This can be a text node
    const previousElementSibling = secondParagraph.previousElementSibling; // This will be the first <p> element
    console.log('Previous sibling node:', previousSibling);
    console.log('Previous sibling element:', previousElementSibling);

   
  
