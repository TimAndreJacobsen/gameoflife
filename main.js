// Vars
var grid;
var resolution = 10;
var ctx;     

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
    grid = make2DArray(resolution, resolution);
    populateArray(grid);
}

function populateArray(arr) {
    console.log("populateArray called");     
    for (let i = 0; i < resolution; i++) {
        for (j = 0; j < resolution; j++) {
            arr[i][j] = Math.floor(Math.random() * Math.floor(2));    // generate a random number from 0-1 and insert it to given index
          }
    }
    return arr;
}

function render() {
    console.log("Render called");
    drawGrid(0,0);
    console.log("Render done");
}


function drawGrid(x, y){
    console.log("drawColumn called");
    for (let c = 0; c < resolution; c++){
        for (let r = 0; r < resolution; r++){
            (grid[c][r]) ? ctx.fillStyle = "#f5f5f5" : ctx.fillStyle = "#000000";
            ctx.fillRect(c*resolution, r*resolution, resolution, resolution);
        }
    }
    console.log("drawGrid Done!");
}

// Runtime
setup();
render();