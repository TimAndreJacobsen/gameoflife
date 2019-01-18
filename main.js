function make2DArray(cols, rows) {
    var arr = new Array(cols);
    for (let i = 0; i < cols; i++) {
        arr[i] = new Array(rows);
        for (j = 0; j < rows; j++) {
            arr[i][j] = getRandomInt(2);
          }
    }
    return arr;
}

let grid;
let cols = 10;
let rows = 10;

function setup() {
    grid = make2DArray(cols, rows);
}

setup();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }