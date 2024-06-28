

let stack = [];

function createElement() {
    const element = document.createElement('div');
    element.classList.add('element');
    return element;
}

// Initialize the stack with some elements
function initializeStack() {
    const stackContainer = document.querySelector('.stack');
    for (let i = 0; i < 3; i++) {
        const element = createElement();
        stack.push(element);
        stackContainer.appendChild(element);
    }
}

function popElement() {
    if (stack.length > 0) {
        const stackContainer = document.querySelector('.stack');
        const inhandContainer = document.querySelector('.inhand');

        // Remove any existing element in hand
        if (inhandContainer.firstChild) {
            inhandContainer.removeChild(inhandContainer.firstChild);
        }

        // Pop the top element from the stack
        const element = stack.pop();
        stackContainer.removeChild(element);

        // Move the element to the inhand container
        inhandContainer.appendChild(element);
        console.log(inhandContainer)
    } else {
        alert("The stack is empty!");
    }
}

// Initialize the stack when the document is loaded
window.onload = initializeStack;
