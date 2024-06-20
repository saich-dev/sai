const elementList = document.getElementById('elementList');
let elementCount = 0;

// Create Element
document.getElementById('createButton').addEventListener('click', () => {
    const newElement = document.createElement('div');
    newElement.className = 'element';
    newElement.textContent = `Element`;
    elementList.appendChild(newElement);
});

// Update Last Element
document.getElementById('updateButton').addEventListener('click', () => {
    if (elementList.lastElementChild) {
        elementList.lastElementChild.textContent = `Updated Element ${elementCount}`;
    } else {
        alert('No elements to update');
    }
});

// Remove Last Element
document.getElementById('removeButton').addEventListener('click', () => {
    if (elementList.lastElementChild) {
        elementList.removeChild(elementList.lastElementChild);
        elementCount--;
    } 
});