// Vars
let grid;
let cols = 10;
let rows = 10;
let resolution = 40;
let ctx;

/* Create a 2 dimensional array and populate it with random number 0 or 1 */
function make2DArray(cols, rows) {
    var arr = new Array(cols);          // make an array cols length
    for (let i = 0; i < cols; i++) {    // for every cols index
        arr[i] = new Array(rows);       // make a new array of rows length

    }
    return arr;
}

function setup() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    grid = make2DArray(cols, rows);
    populateArray(grid);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function populateArray(arr) {          
    for (let i = 0; i < cols; i++) {        // for every cols index 
        for (j = 0; j < rows; j++) {        // for every rows index
            arr[i][j] = getRandomInt(2);    // generate a random number from 0-1 and insert it to given index
          }
    }
    return arr;
}

function render() {
    background(0);
    for (let i = 0; i<cols; i++){
        for(let j = 0; j<rows; j++){
            let w = width;

            rect(x, y, w, h);
        }
    }
}

// Runtime
setup();