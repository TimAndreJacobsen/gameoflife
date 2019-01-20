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
    drawColumn(point.x, point.y);
    console.log("returned from drawcolumn");
}


function drawColumn(x, y){
    console.log("drawColumn called");

    for (let c = 0; c < cols; c++){                                                 // For every col
        for (let r = 0; r < rows; r++){                                             // For every row
            ctx.beginPath();                                                        // Start drawing
            ctx.rect(point.x, point.y, point.x + resolution, point.y + resolution); // rectangle starts at 

            if (grid[c][r] == 0) {
                console.log("black at grid: " + c + ", " + r);
                ctx.fillStyle = "#000000";
            } else {
                console.log("white at grid: " + c + ", " + r);
                ctx.fillStyle = "#f5f5f5";
            }

            ctx.fill();
            ctx.closePath();
            point.y += resolution;
        }
        point.y = 0;
        point.x += resolution;
    }
}

// Runtime
setup();
render();