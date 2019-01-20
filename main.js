// Vars
var grid;
var cols = 10;
var rows = 10;
var resolution = 10;
var ctx;
var point = {x: 0, y: 0};        

/* Create a 2 dimensional array and populate it with random number 0 or 1 */
function make2DArray(cols, rows) {
    console.log("make2DArray called");
    var arr = new Array(cols);          // make an array cols length
    for (let i = 0; i < cols; i++) {    // for every cols index
        arr[i] = new Array(rows);       // make a new array of rows length
    }
    return arr;
}

function setup() {
    console.log("setup called");
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    grid = make2DArray(cols, rows);
    populateArray(grid);
}

function populateArray(arr) {
    console.log("populateArray called");     
    for (let i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            arr[i][j] = Math.floor(Math.random() * Math.floor(2));    // generate a random number from 0-1 and insert it to given index
          }
    }
    return arr;
}

function render() {
    console.log("Render called");

    for (let i = 0; i<cols; i++){
        drawColumn(point.x, point.y, cols);
        point.x += resolution;
    }
    console.log("returned from drawcolumn");
}


function drawColumn(x, y, cols){
    console.log("drawColumn called");
    for (i = 1; i <= cols; i++){
        ctx.beginPath();
        ctx.rect(point.x, point.y, x + resolution, y + (resolution * i));
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
    }
}

// Runtime
setup();
render();