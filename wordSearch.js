const {puzzle} = require("./data/data");

function searchStraightLineInclude(word, puzzle) {

}

function searchSnakingInclude(word, puzzle) {

}

const getRSymbol = (puzzle, i, j) => {
  if (puzzle[i] == undefined) return null;
  return puzzle[i][j+1] || null;
};
const getLSymbol = (puzzle, i, j) => {
  if (puzzle[i] == undefined) return null;
  return puzzle[i][j-1] || null;
};

const getUSymbol = (puzzle, i, j) => {
  if (puzzle[i-1] == undefined) return null;
  return puzzle[i-1][j] || null;
};

const getDSymbol = (puzzle, i, j) => {
  if (puzzle[i+1] == undefined) return null;
  return puzzle[i+1][j] || null;
};

const getURSymbol = (puzzle, i, j) => {
  if (puzzle[i-1] == undefined) return null;
  return puzzle[i-1][j+1] || null;
};

const getULSymbol = (puzzle, i, j) => {
  if (puzzle[i-1] == undefined) return null;
  return puzzle[i-1][j-1] || null;
};

const getDRSymbol = (puzzle, i, j) => {
  if (puzzle[i+1] == undefined) return null;
  return puzzle[i+1][j+1] || null;
};

const getDLSymbol = (puzzle, i, j) => {
  if (puzzle[i+1] == undefined) return null;
  return puzzle[i+1][j-1] || null;
};

module.exports = {
  searchSnakingInclude,
  searchStraightLineInclude,
  getRSymbol,
  getLSymbol,
  getUSymbol,
  getDSymbol,
  getURSymbol,
  getULSymbol,
  getDRSymbol,
  getDLSymbol,
};


getURSymbol(puzzle, 0, 6)
