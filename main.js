/**
 gameplan:
 
 [x] - make grid
 [x] - populate grid
 [x] - display grid
 [ ] - add margins to grid
 [ ] - define core game loop
 [ ] - implement logic/rules of Conway's game of life
 [ ] - run each cell of the grid through logic/rules and create a new grid for a new state
 [ ] - redraw grid
  
  bugfix Goals - AKA this needs to be fixed sooner rather than later
 [x] - untie resolution from gridSquare size
 */

// Variables in global scope
var grid;
var ctx; 
var resolution = 20;    
var width = 10;
var height = 10;
var margins = 1;

/* Create a 2 dimensional array and populate it with random number 0 or 1 */
function make2DArray(cols, rows) {
    console.log("creating array");
    var arr = new Array(cols);          // make an array cols length
    for (let i = 0; i < cols; i++) {    // for every cols index
        arr[i] = new Array(rows);       // make a new array of rows length
    }
    return arr;
}

function setup() {
    console.log("setup started");
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    grid = make2DArray(resolution, resolution);
    populateArray(grid);
    console.log("setup exiting");
}

function populateArray(arr) {
    console.log("populating array");     
    for (let i = 0; i < resolution; i++) {
        for (j = 0; j < resolution; j++) {
            arr[i][j] = Math.floor(Math.random() * Math.floor(2));    // generate a random number from 0-1 and insert it to given index
          }
    }
    return arr;
}

function render() {
    drawGrid(0,0);
    console.log("Render done");
    // Create a new grid by running current grid through logic/gamerules
    // console.log("calculations done");
    // clear canvas
    // draw new state
    // console.log("rerender done");
}


function drawGrid(x, y){
    console.log("rendering grid");
    for (let c = 0; c < resolution; c++){
        for (let r = 0; r < resolution; r++){
            grid[c][r] ? ctx.fillStyle = "#f5f5f5" : ctx.fillStyle = "#000000";
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