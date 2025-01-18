const { solveProperSudokuAsync } = require("sudoku-solver-async");

// sudoku puzzle input as a 2d array (can also be a 1d array)
const puzzleInput2dArr = [
  [9, 1, 5, -1, -1, 3, 4, -1, 6],
  [-1, -1, -1, 1, -1, 2, -1, 8, 9],
  [-1, 6, -1, -1, -1, 4, 7, -1, 3],

  [-1, -1, -1, 3, 1, -1, -1, 9, -1],
  [5, -1, 8, -1, 4, -1, -1, 3, 2],
  [3, 4, 1, 8, -1, -1, -1, 5, -1],

  [-1, -1, -1, 4, 9, 6, -1, -1, -1],
  [2, 7, -1, -1, -1, -1, 9, -1, -1],
  [4, -1, 9, -1, -1, 1, 3, -1, 5],
];

let solving = true;

(async () => {
  // function api usage
  const solvedSudoku = await solveProperSudokuAsync(puzzleInput2dArr, {
    onFunctionExecutingInCallStack: (x, y, arr2d) => {
      if (solving) {
        // Clear existing visualization if it exists
        let existingBoard = document.getElementById("sudoku-board");
        if (existingBoard) {
          existingBoard.remove();
        }

        // Create a container for the Sudoku board
        const boardContainer = document.createElement("div");
        boardContainer.id = "sudoku-board";
        boardContainer.style.display = "grid";
        boardContainer.style.gridTemplateRows = "repeat(9, 1fr)";
        boardContainer.style.gridTemplateColumns = "repeat(9, 1fr)";
        boardContainer.style.width = "290px";
        boardContainer.style.height = "290px";
        boardContainer.style.border = "2px solid black";
        // boardContainer.style.gap = "1px";
        // boardContainer.style.backgroundColor = "black";

        // Loop through the 2D array to create cells
        for (let i = 0; i < arr2d.length; i++) {
          // row
          for (let j = 0; j < arr2d[i].length; j++) {
            // column
            const cell = document.createElement("div");
            // cell.style.width = "25px";
            // cell.style.height = "25px";
            cell.style.display = "flex";
            cell.style.justifyContent = "center";
            cell.style.alignItems = "center";
            cell.style.fontSize = "20px";
            cell.style.fontWeight = "bold";
            cell.style.color = "#555";
            cell.style.backgroundColor = "white";
            cell.style.border = "1px solid gray";

            if (i !== 0 && i % 3 === 0) {
              cell.style.borderTop = "2px solid black";
            }

            if (j !== 0 && j % 3 === 0) {
              cell.style.borderLeft = "2px solid black";
            }

            // Add the Sudoku number or leave empty if 0
            cell.textContent = arr2d[i][j] !== -1 ? arr2d[i][j].toString() : "";

            // Highlight the cell based on the callback inputs
            if (j === x && i === y) {
              cell.style.backgroundColor = "yellow";
              if (puzzleInput2dArr[i][j] === -1) cell.textContent = "🔍";
            }

            // Append the cell to the board container
            boardContainer.appendChild(cell);
            if (x === 8 && (y === 8) & (j === 8) && i === 8) {
              solving = false;
              window.setTimeout(() => {
                cell.style.backgroundColor = "white";
              }, 1000 / 8);
            }
          }
        }

        // Append the board to the document body
        document.body.appendChild(boardContainer);
      }
    },
    // onPuzzleSolutionFound: () => {
    //   // conveniance callback
    //   console.log("found");
    //   solving = false;
    // },
    delayBetweenEachStepInCallStackInMillisecs: 1000 / 8,
  });
  console.log("solved", solvedSudoku);
})();
