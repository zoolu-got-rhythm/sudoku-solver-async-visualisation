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

let delayBetweenEachStepInMs = 1000 / 25;

let solving = true;

const solveStateEle = document.getElementById("solve-state");
const callstackStateEle = document.getElementById("callstack-state");

function renderSudokuSolveStep(x, y, arr2d) {
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
          solveStateEle.innerHTML = "solved!";
          callstackStateEle.innerHTML = "unwinding...";
          window.setTimeout(() => {
            cell.style.backgroundColor = "white";
          }, delayBetweenEachStepInMs);
        }
      }
    }

    // Append the board to the document body
    // document.body.appendChild(boardContainer);
    let sudokuContainer = document.getElementById("sodoku-container");
    sudokuContainer.appendChild(boardContainer);
  }
}

function renderCallStackStep(x, y, arr2d) {
  // Create or select the call stack container
  let stackContainer = document.getElementById("call-stack");

  if (stackContainer && y * 9 + (x + 1) < stackContainer.children.length) {
    console.log("remove");
    stackContainer.removeChild(
      stackContainer.children[stackContainer.children.length - 1]
    );
    return;
  }

  if (!stackContainer) {
    stackContainer = document.createElement("div");
    stackContainer.style.overflowY = "scroll";
    stackContainer.id = "call-stack";
    stackContainer.style.border = "2px solid black";
    stackContainer.style.width = "300px";
    stackContainer.style.padding = "10px";
    stackContainer.style.backgroundColor = "#f9f9f9";
    stackContainer.style.fontFamily = "Arial, sans-serif";
    stackContainer.style.overflowY = "auto";
    stackContainer.style.height = "400px";
    const callstackContainer = document.getElementById("callstack-container");

    callstackContainer.appendChild(stackContainer);
  }

  // Create a new stack frame
  const frame = document.createElement("div");
  frame.style.border = "1px solid #ccc";
  frame.style.zoom = "0.5";

  // frame.style.marginBottom = "5px";
  frame.style.padding = "5px";
  frame.style.backgroundColor = "#fff";
  frame.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";

  // Add content to the stack frame
  frame.innerHTML = `
      <strong>Function Context:</strong> ${y * 9 + (x + 1)}
  `;

  // Append the frame to the stack container
  stackContainer.appendChild(frame);

  // Auto-scroll to the bottom of the stack
  stackContainer.scrollTop = stackContainer.scrollHeight;
}

(async () => {
  // function api usage
  const solvedSudoku = await solveProperSudokuAsync(puzzleInput2dArr, {
    onFunctionExecutingInCallStack: (x, y, arr2d) => {
      renderSudokuSolveStep(x, y, arr2d);
      renderCallStackStep(x, y, arr2d);
    },
    // onPuzzleSolutionFound: () => {
    //   // conveniance callback
    //   console.log("found");
    //   solving = false;
    // },
    delayBetweenEachStepInCallStackInMillisecs: delayBetweenEachStepInMs,
  });
  console.log("solved!", solvedSudoku);
})();
