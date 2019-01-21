// Variables in global scope
var grid;
var ctx; 
var resolution = 100;    // x by x Grid, resolutions = x
var width = 10;
var height = 10;
var margins = 1;

function setup() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    grid = make2DArray(resolution, resolution);
    populateArray(grid);
    drawGrid();
}

function make2DArray(cols, rows) {
    var arr = new Array(cols);
    for (let i = 0; i < cols; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

function populateArray(arr) {  
    for (let i = 0; i < resolution; i++) {
        for (let j = 0; j < resolution; j++) {
            arr[i][j] = Math.floor(Math.random() * Math.floor(2));    // generate a random number from 0-1 and insert it to given index
          }
    }
    return arr;
}

function render() {
    grid = calculateNextGeneration(grid);
    console.log("calculations done");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid()
    setTimeout(render, 250);
}

function drawGrid(){
    console.log("rendering grid");
    for (let c = 0; c < resolution; c++){
        for (let r = 0; r < resolution; r++){
            grid[c][r] ? ctx.fillStyle = "#000000" : ctx.fillStyle = "#f5f5f5";
            ctx.fillRect(c*width, r*height, width - margins, height - margins);
        }
    }
}

function calculateNextGeneration(grid) {
    var newGrid = grid.slice(); // create a new array as copy of the old array
    var cols = grid.length;
    var rows = grid[0].length;

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {

            if (grid[i][j]){ // evaluates to true if cell is alive
                let liveNeighbours = checkNeighbours(grid, i, j);
                if (liveNeighbours < 2 || liveNeighbours > 3){
                    newGrid[i][j] = 0;
                }
            } else { // Cell is dead
                let liveNeighbours = checkNeighbours(grid, i, j);
                if(liveNeighbours == 3) {
                    newGrid[i][j] = 1;
                }
            }
        }
    }
    return newGrid;
}

//returns number of live neighbours, or 2 if edge case
function checkNeighbours(grid, x, y){ 
    var liveNeighbours = 0;
    var cols = grid.length;
    var rows = grid[0].length;

    for(let i = -1; i < 2; i++){

        if( x == 0 || x == cols -1 || y == 0 || y == rows -1){ // TODO: fix this, maybe a wrap around of the grid?
            return 2; // hack for edge cases. basically just dont do anything if its an edge case

        } else {
            if(grid[x-1][y-i]){
                liveNeighbours++;
            }
            if(grid[x][y-i] && i != 0){
                liveNeighbours++;
            }
            if(grid[x+1][y-i]){
                liveNeighbours++;
            }
        }
    }
    return liveNeighbours;
}

// Runtime
setup();
render();