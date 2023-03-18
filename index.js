const container = document.querySelector('#container');
const resetBtn = document.querySelector('.btn');
const rangeInput = document.querySelector('#data-range');
const black = document.querySelector('#black');
const random = document.querySelector('#random');
const eraser = document.querySelector('#eraser');


random.addEventListener('click', () => {
    colorChange = 'random';
});

black.addEventListener('click', () => {
    colorChange = 'black';
});

eraser.addEventListener('click', () => {
    colorChange = 'eraser';
});
let colorChange = 'black';

function createGrid(numSquares) {
    container.innerHTML = ''; // clear existing grid
    container.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;

    for (let i = 0; i < numSquares * numSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        square.addEventListener('mouseover', () => {
            if (colorChange === 'random') {
                square.style.backgroundColor = getRandomColor();
            } else if (colorChange === 'black') {
                square.style.backgroundColor = blackColor();
            } else if (colorChange === 'eraser') {
                square.style.backgroundColor = '';
            }
        });

        square.addEventListener('mouseout', () => {
            square.classList.remove('hover');
        });
    }
}
function blackColor() {
    return `black`;
}

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

rangeInput.addEventListener('input', () => {
    const numSquares = rangeInput.value;
    createGrid(numSquares);
});



