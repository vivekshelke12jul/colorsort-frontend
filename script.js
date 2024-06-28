const colors = [
    "#FF0000", // Red
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#00FF00", // Green
    "#FFA500", // Orange
    "#800080", // Purple
    "#4B0082", // Indigo
    "#EE82EE", // Violet
    "#A52A2A", // Brown
    "#FFFFFF", // White
    "#00008B", // Dark Blue
    "#ADD8E6", // Light Blue
    "#006400", // Dark Green
    "#90EE90",  // Light Green
    "#90EE90",  // Light Green
    "#90EE90"  // Light Green
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

        console.log(bottle)
        let lastChild = bottle.firstElementChild
        console.log(lastChild)
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
    console.log(bottle)
    return bottle;
}

function createBottles(){
    let bottleCount = document.getElementById('bottleCount').value;
    let bottleCapacity = document.getElementById('bottleCapacity').value;

    console.log(bottleCount, bottleCapacity)
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

// function solve(){
//     let gameState = {
//         bottleCount: do
//     }
// }


window.onload = initializeColorBox()