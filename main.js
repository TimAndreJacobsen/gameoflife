// Vars
var grid;
var cols = 10;
var rows = 10;
var resolution = 10;
var ctx;
var point;  
var enpoint;         
var width = resolution;
var height = resolution;

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

    for (let i = 0; i<cols; i++){
        for(let j = 0; j<rows; j++){

            if (!point){
                point = {
                    x: 0,
                    y: 0,
                };
            }

            drawSquare(point);


        }
    }
}

// helper function for render
function drawSquare({x, y}) {
    console.log("printing a square, oops i mean draw!");
    var endPoint = {
        x: x + width,
        y: y + height,
    };
    ctx.beginPath();
    ctx.rect(point.x, point.y, endpoint.x, endpoint.y);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
    
    return endPoint;
}

// Runtime
setup();
render();