/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { solveProperSudokuAsync } = __webpack_require__(/*! sudoku-solver-async */ \"./node_modules/sudoku-solver-async/dist/sudokuSolverAsync.js\");\n\n// sudoku puzzle input as a 2d array (can also be a 1d array)\nconst puzzleInput2dArr = [\n  [9, 1, 5, -1, -1, 3, 4, -1, 6],\n  [-1, -1, -1, 1, -1, 2, -1, 8, 9],\n  [-1, 6, -1, -1, -1, 4, 7, -1, 3],\n\n  [-1, -1, -1, 3, 1, -1, -1, 9, -1],\n  [5, -1, 8, -1, 4, -1, -1, 3, 2],\n  [3, 4, 1, 8, -1, -1, -1, 5, -1],\n\n  [-1, -1, -1, 4, 9, 6, -1, -1, -1],\n  [2, 7, -1, -1, -1, -1, 9, -1, -1],\n  [4, -1, 9, -1, -1, 1, 3, -1, 5],\n];\n\n(async () => {\n  // function api usage\n  const solvedSudoku = await solveProperSudokuAsync(puzzleInput2dArr, {\n    onFunctionExecutingInCallStack: (x, y, arr2d) => {\n      // Clear existing visualization if it exists\n      let existingBoard = document.getElementById(\"sudoku-board\");\n      if (existingBoard) {\n        existingBoard.remove();\n      }\n\n      // Create a container for the Sudoku board\n      const boardContainer = document.createElement(\"div\");\n      boardContainer.id = \"sudoku-board\";\n      boardContainer.style.display = \"grid\";\n      boardContainer.style.gridTemplateRows = \"repeat(9, 1fr)\";\n      boardContainer.style.gridTemplateColumns = \"repeat(9, 1fr)\";\n      boardContainer.style.width = \"290px\";\n      boardContainer.style.height = \"290px\";\n      boardContainer.style.border = \"2px solid black\";\n      // boardContainer.style.gap = \"1px\";\n      // boardContainer.style.backgroundColor = \"black\";\n\n      // Loop through the 2D array to create cells\n      for (let i = 0; i < arr2d.length; i++) {\n        // row\n        for (let j = 0; j < arr2d[i].length; j++) {\n          // column\n          const cell = document.createElement(\"div\");\n          // cell.style.width = \"25px\";\n          // cell.style.height = \"25px\";\n          cell.style.display = \"flex\";\n          cell.style.justifyContent = \"center\";\n          cell.style.alignItems = \"center\";\n          cell.style.fontSize = \"20px\";\n          cell.style.fontWeight = \"bold\";\n          cell.style.color = \"#555\";\n          cell.style.backgroundColor = \"white\";\n          cell.style.border = \"1px solid gray\";\n\n          if (i !== 0 && i % 3 === 0) {\n            cell.style.borderTop = \"2px solid black\";\n          }\n\n          if (j !== 0 && j % 3 === 0) {\n            cell.style.borderLeft = \"2px solid black\";\n          }\n\n          // Add the Sudoku number or leave empty if 0\n          cell.textContent = arr2d[i][j] !== -1 ? arr2d[i][j].toString() : \"\";\n\n          // Highlight the cell based on the callback inputs\n          if (j === x && i === y) {\n            cell.style.backgroundColor = \"yellow\";\n            if (puzzleInput2dArr[i][j] === -1) cell.textContent = \"🔍\";\n          }\n\n          // Append the cell to the board container\n          boardContainer.appendChild(cell);\n        }\n      }\n\n      // Append the board to the document body\n      document.body.appendChild(boardContainer);\n    },\n    delayBetweenEachStepInCallStackInMillisecs: 1000 / 8,\n  });\n  console.log(\"solved\", solvedSudoku);\n})();\n\n\n//# sourceURL=webpack://sudoku-solver-async-npm-test/./index.js?");

/***/ }),

/***/ "./node_modules/sudoku-solver-async/dist/sleep.js":
/*!********************************************************!*\
  !*** ./node_modules/sudoku-solver-async/dist/sleep.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = default_1;\nfunction default_1(delayInMs) {\n    return __awaiter(this, void 0, void 0, function* () {\n        return new Promise(function (resolve) {\n            const timeAtStartInMs = Date.now();\n            setTimeout(() => {\n                resolve(Date.now() - timeAtStartInMs);\n            }, delayInMs);\n        });\n    });\n}\n//# sourceMappingURL=sleep.js.map\n\n//# sourceURL=webpack://sudoku-solver-async-npm-test/./node_modules/sudoku-solver-async/dist/sleep.js?");

/***/ }),

/***/ "./node_modules/sudoku-solver-async/dist/sudokuSolverAsync.js":
/*!********************************************************************!*\
  !*** ./node_modules/sudoku-solver-async/dist/sudokuSolverAsync.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.solveProperSudokuAsync = exports.check3by3BoxIsValid = exports.checkColumnIsValid = exports.checkRowIsValid = void 0;\nconst sleep_1 = __importDefault(__webpack_require__(/*! ./sleep */ \"./node_modules/sudoku-solver-async/dist/sleep.js\"));\nconst checkRowIsValid = (yIndex, arr2d) => {\n    let foundNumbersInRow = [];\n    for (let x = 0; x < 9; x++) {\n        if (arr2d[yIndex][x] === -1) {\n            continue;\n        }\n        if (foundNumbersInRow.includes(arr2d[yIndex][x])) {\n            return false;\n        }\n        foundNumbersInRow.push(arr2d[yIndex][x]);\n    }\n    return true;\n};\nexports.checkRowIsValid = checkRowIsValid;\nconst checkColumnIsValid = (xIndex, arr2d) => {\n    let foundNumbersInColumn = [];\n    for (let y = 0; y < 9; y++) {\n        if (arr2d[y][xIndex] === -1) {\n            continue;\n        }\n        if (foundNumbersInColumn.includes(arr2d[y][xIndex])) {\n            return false;\n        }\n        foundNumbersInColumn.push(arr2d[y][xIndex]);\n    }\n    return true;\n};\nexports.checkColumnIsValid = checkColumnIsValid;\nconst check3by3BoxIsValid = (xIndex, yIndex, arr2d) => {\n    let found = [];\n    const checkRowWithin3by3blockIsValid = (xIndexOffset, y) => {\n        let xIndexWithin3by3Box = xIndexOffset % 3;\n        if (xIndexWithin3by3Box === 0) {\n            for (let x = 0; x < 3; x++) {\n                if (arr2d[y][xIndexOffset + x] === -1) {\n                    continue;\n                }\n                if (found.includes(arr2d[y][xIndexOffset + x])) {\n                    return false;\n                }\n                found.push(arr2d[y][xIndexOffset + x]);\n            }\n        }\n        else if (xIndexWithin3by3Box === 1) {\n            for (let x = -1; x <= 1; x++) {\n                if (arr2d[y][xIndexOffset + x] === -1) {\n                    continue;\n                }\n                if (found.includes(arr2d[y][xIndexOffset + x])) {\n                    return false;\n                }\n                found.push(arr2d[y][xIndexOffset + x]);\n            }\n        }\n        else if (xIndexWithin3by3Box === 2) {\n            for (let x = -2; x <= 0; x++) {\n                if (arr2d[y][xIndexOffset + x] === -1) {\n                    continue;\n                }\n                if (found.includes(arr2d[y][xIndexOffset + x])) {\n                    return false;\n                }\n                found.push(arr2d[y][xIndexOffset + x]);\n            }\n        }\n        return true;\n    };\n    let yIndexWithin3by3Box = yIndex % 3;\n    if (yIndexWithin3by3Box === 0) {\n        for (let y = 0; y < 3; y++) {\n            if (!checkRowWithin3by3blockIsValid(xIndex, yIndex + y))\n                return false;\n        }\n    }\n    else if (yIndexWithin3by3Box === 1) {\n        for (let y = -1; y <= 1; y++) {\n            if (!checkRowWithin3by3blockIsValid(xIndex, yIndex + y))\n                return false;\n        }\n    }\n    else if (yIndexWithin3by3Box === 2) {\n        for (let y = -2; y <= 0; y++) {\n            if (!checkRowWithin3by3blockIsValid(xIndex, yIndex + y))\n                return false;\n        }\n    }\n    return true;\n};\nexports.check3by3BoxIsValid = check3by3BoxIsValid;\nconst numberAtPosXYIsLegal = (xIndex, yIndex, arr2d) => {\n    return (0, exports.checkRowIsValid)(yIndex, arr2d) && (0, exports.checkColumnIsValid)(xIndex, arr2d) && (0, exports.check3by3BoxIsValid)(xIndex, yIndex, arr2d);\n};\nconst solveProperSudokuRecursiveAsync = (x, y, arr2d, callStackStep) => __awaiter(void 0, void 0, void 0, function* () {\n    // console.log(\"hm\")\n    return new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {\n        // console.log(\"run\")\n        if (callStackStep) {\n            yield (0, sleep_1.default)(callStackStep.delayBetweenEachStepInCallStackInMillisecs);\n            callStackStep === null || callStackStep === void 0 ? void 0 : callStackStep.onFunctionExecutingInCallStack(x, y, arr2d);\n        }\n        // if location is a clue\n        if (arr2d[y][x] !== -1) {\n            if (y === 8 && x === 8) {\n                // end condition\n                console.log(\"end\");\n                resolve(arr2d);\n                return;\n            }\n            let result = yield solveProperSudokuRecursiveAsync(x == 8 ? 0 : x + 1, x == 8 ? y + 1 : y, arr2d, callStackStep\n                ? {\n                    onFunctionExecutingInCallStack: callStackStep.onFunctionExecutingInCallStack,\n                    delayBetweenEachStepInCallStackInMillisecs: callStackStep.delayBetweenEachStepInCallStackInMillisecs,\n                }\n                : undefined);\n            if (callStackStep) {\n                yield (0, sleep_1.default)(callStackStep.delayBetweenEachStepInCallStackInMillisecs);\n                callStackStep === null || callStackStep === void 0 ? void 0 : callStackStep.onFunctionExecutingInCallStack(x, y, arr2d);\n            }\n            if (result) {\n                resolve(result);\n                return;\n            }\n            // if location has no clue/number in it\n        }\n        else {\n            for (let i = 1; i <= 9; i++) {\n                let arr2dcopy = Array.from(arr2d, (arr) => arr.slice());\n                arr2dcopy[y][x] = i;\n                let result = undefined;\n                if (numberAtPosXYIsLegal(x, y, arr2dcopy)) {\n                    if (y === 8 && x === 8) {\n                        // end condition\n                        console.log(\"end\");\n                        resolve(arr2dcopy);\n                        return;\n                    }\n                    result = yield solveProperSudokuRecursiveAsync(x == 8 ? 0 : x + 1, x == 8 ? y + 1 : y, arr2dcopy, callStackStep\n                        ? {\n                            onFunctionExecutingInCallStack: callStackStep.onFunctionExecutingInCallStack,\n                            delayBetweenEachStepInCallStackInMillisecs: callStackStep.delayBetweenEachStepInCallStackInMillisecs,\n                        }\n                        : undefined);\n                    if (callStackStep) {\n                        yield (0, sleep_1.default)(callStackStep.delayBetweenEachStepInCallStackInMillisecs);\n                        callStackStep === null || callStackStep === void 0 ? void 0 : callStackStep.onFunctionExecutingInCallStack(x, y, arr2d);\n                    }\n                }\n                if (result) {\n                    // console.log(\"back\");\n                    resolve(result);\n                    return;\n                }\n                // if number in position isn't legal continue to next number for this slot -\n                // or if next slot didn't find any number that worked for it\n            }\n        }\n        // console.log(\"backtracking\");\n        // if this is reached backtrack will happen, as value of a function that has no return value is defaulted to undefined -\n        // so undefined is 'returned' here implicitly\n        resolve(undefined);\n    }));\n});\n/**\n * Solves a proper sudoku puzzle (9x9 with a minimum of 17 clues) with a recursive backtracking algorithm\n * @param puzzleInput - a 9x9 2d array of numbers where -1 represents an empty cell\n * @returns a 9x9 2d array of numbers representing the solved sudoku puzzle\n */\nconst solveProperSudokuAsync = (puzzleInput, callStackStep) => __awaiter(void 0, void 0, void 0, function* () {\n    // @ts-ignore\n    if (puzzleInput[0][0]) {\n        // if 2d array\n        const puzzleInputAs1dArray = puzzleInput.flat();\n        if (puzzleInputAs1dArray.length !== 9 * 9) {\n            throw new Error(\"puzzle input must be of length 9 x 9\");\n        }\n        if (nOfCluesIn1dArrayPuzzleInputIsBelow17(puzzleInputAs1dArray))\n            throw new Error(\"puzzle input must contain a minimum of 17 clues or more\");\n        return (yield solveProperSudokuRecursiveAsync(0, 0, puzzleInput, callStackStep\n            ? {\n                onFunctionExecutingInCallStack: callStackStep.onFunctionExecutingInCallStack,\n                delayBetweenEachStepInCallStackInMillisecs: callStackStep.delayBetweenEachStepInCallStackInMillisecs,\n            }\n            : undefined));\n    }\n    else {\n        // if 1d array\n        if (puzzleInput.length !== 9 * 9) {\n            throw new Error(\"puzzle input must be of length 9 x 9\");\n        }\n        if (nOfCluesIn1dArrayPuzzleInputIsBelow17(puzzleInput))\n            throw new Error(\"puzzle input must contain a minimum of 17 clues or more\");\n        // @ts-ignore\n        let array2dRepresentationOf1dPuzzle = convert1dArrayto2dArray(puzzleInput);\n        return (yield solveProperSudokuRecursiveAsync(0, 0, array2dRepresentationOf1dPuzzle, callStackStep\n            ? {\n                onFunctionExecutingInCallStack: callStackStep.onFunctionExecutingInCallStack,\n                delayBetweenEachStepInCallStackInMillisecs: callStackStep.delayBetweenEachStepInCallStackInMillisecs,\n            }\n            : undefined));\n    }\n});\nexports.solveProperSudokuAsync = solveProperSudokuAsync;\nfunction convert1dArrayto2dArray(arr) {\n    let arr2d = [];\n    for (let i = 0; i < 9; i++) {\n        arr2d.push(arr.slice(i * 9, i * 9 + 9));\n    }\n    return arr2d;\n}\nfunction nOfCluesIn1dArrayPuzzleInputIsBelow17(puzzleInput1dArr) {\n    let n = puzzleInput1dArr.filter((n) => n !== -1).length;\n    return n < 17;\n}\n//# sourceMappingURL=sudokuSolverAsync.js.map\n\n//# sourceURL=webpack://sudoku-solver-async-npm-test/./node_modules/sudoku-solver-async/dist/sudokuSolverAsync.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;