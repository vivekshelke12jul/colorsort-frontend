// const colors = [
//     "#FF0000", // Red
//     "#0000FF", // Blue
//     "#FFFF00", // Yellow
//     "#00FF00", // Green
//     "#FFA500", // Orange
//     "#800080", // Purple
//     "#4B0082", // Indigo
//     "#EE82EE", // Violet
//     "#A52A2A", // Brown
//     "#FFFFFF", // White
//     "#00008B", // Dark Blue
//     "#ADD8E6", // Light Blue
//     "#006400", // Dark Green
//     "#90EE90",  // Light Green
//     "#90EE90",  // Light Green
//     "#90EE90"  // Light Green
// ];

const colors = [
    'red',
    'blue',
    'yellow',
    'green',
    'orange',
    'purple',
    'indigo',
    'violet',
    'brown',
    'white',
    'darkblue',
    'lightblue',
    'darkgreen',
    'lightgreen',
    'lightgreen',
    'lightgreen'
];


// let bottleList = []
let copiedColor = colors[0]
let deleteElement = false
let copiedColorBox = document.querySelector('.copiedColorBox')

function handleBottleElementClick(){
    if(deleteElement){
        return
    }

    let element = event.target
    element.style.backgroundColor = copiedColor
}

function createElement(){
    let element = document.createElement('div')
    element.classList.add('element')
    element.addEventListener('click', handleBottleElementClick)
    return element
}

function handleBottleClick(){
    if(deleteElement){
        let bottle = event.target
        if(event.target.className === 'element'){
            bottle = event.target.parentElement
        }

        let lastChild = bottle.firstElementChild
        bottle.removeChild(bottle.firstElementChild)
    }else{
        return
    }
}



function createBottle(bottleCapacity){
    // let bottleCapacity = document.getElementById('bottleCapacity').value;

    let bottle = document.createElement('div')
    bottle.appendChild
    bottle.classList.add('bottle')
    for(let i=0; i<bottleCapacity; i++){
        let element = createElement()
        bottle.appendChild(element)
    }
    bottle.addEventListener('click', handleBottleClick)
    return bottle;
}

function createBottles(){
    let bottleCount = document.getElementById('bottleCount').value;
    let bottleCapacity = document.getElementById('bottleCapacity').value;

    // console.log(bottleCount, bottleCapacity)
    let output = document.querySelector('.output')
    output.innerHTML = ''

    for(let i = 0; i < bottleCount; i++){
        let bottle = createBottle(bottleCapacity)
        output.appendChild(bottle)
        
    }
    // console.log(botztleList)
}

function handleColorItemClick(){
    deleteElement = false
    let popBox = document.querySelector('.popBox')
    popBox.innerHTML = 'deactivated'


    let item = event.target
    copiedColor = item.style.backgroundColor;
    copiedColorBox.style.backgroundColor = copiedColor
    copiedColorBox.innerHTML = 'activated'
}

function handlePopBoxClick(){
    deleteElement = true
    let popBox = event.target
    popBox.innerHTML = 'activated'

    copiedColorBox.innerHTML = 'deactivated'
}

function initializeColorBox(){
    let colorBox = document.querySelector('.colorBox')
    let popBox = document.querySelector('.popBox')
    for(let i=0; i<16; i++){
        let colorItem = document.createElement('div')
        colorItem.classList.add('colorItem')
        colorItem.style.backgroundColor = colors[i]
        colorItem.addEventListener('click',handleColorItemClick)
        colorBox.appendChild(colorItem)
    }

    popBox.addEventListener('click', handlePopBoxClick)
}

function extractJson() {

    let mat = []

    const outputContainer = document.querySelector('.output');

    Array.from(outputContainer.children).forEach((bottle, index) => {
        console.log(bottle)
        let inner = []
        Array.from(bottle.children).forEach((element, index) => {
            inner.push(element.style.backgroundColor)
        })
        inner.reverse()
        mat.push(inner)
    })
    // console.log(mat)
    return mat;
}


async function makeRequestToServer(matrix) {
    const stateObject = {
        bottleCount: document.getElementById('bottleCount').value,
        bottleCapacity: document.getElementById('bottleCapacity').value,
        matrix: matrix
    };

    const jsonString = JSON.stringify(stateObject);
    try {
        // Create the POST request to the /get-solution endpoint
        const response = await fetch('http://localhost:8080/get-solution', {
          method: 'POST', // Use POST method to send data in the request body
          headers: {
            'Content-Type': 'application/json'
          },
          body: jsonString // Attach the JSON string as the request body
        });
    
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
    
        const data = await response.json(); // Assuming the server returns a JSON response
        return data;
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
}

async function solve() {
    let matrix = extractJson();
    const data = await makeRequestToServer(matrix);

    // let str = JSON.stringify(data);
    // console.log(str)
    console.log(data)
}


window.onload = initializeColorBox()