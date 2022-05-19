const { puzzle } = require('./data/data');

function searchStraightLineInclude(word, puzzle) {
  for (let j = 0; j < puzzle.length; j++) {
    for (let i = 0; i < puzzle.length; i++) {
      if (searchInDirection(puzzle, word, i, j, 0, getRSymbol)) return true;
      if (searchInDirection(puzzle, word, i, j, 0, getDSymbol)) return true;
      if (searchInDirection(puzzle, word, i, j, 0, getURSymbol)) return true;
    }
  }
  return false;
}

function searchSnakingInclude(word, puzzle) {
  const arrFunc = [getRSymbol, getLSymbol, getUSymbol, getDSymbol, getURSymbol, getULSymbol, getDRSymbol, getDLSymbol];

  for (let j = 0; j < puzzle.length; j++) {
    for (let i = 0; i < puzzle.length; i++) {
      if (searchAround(puzzle, word, i, j, 0, arrFunc) == true) return true;
    }
  }
  return false;
}

const searchAround = (puzzle, word, i, j, currentIter, arrFunc) => {
  if (word[currentIter] !== puzzle[i][j]) return null;
  const objXY = { i, j };
  for (let k = 0; k < arrFunc.length; k++) {
    const SY = arrFunc[k](puzzle, objXY);
    if (SY !== null) {
      if (currentIter === word.length - 2) return true;
      if (SY === word[currentIter+1]) {
        return searchAround(puzzle, word, objXY.i, objXY.j, currentIter + 1, arrFunc);
      }
    }
  }
};

const searchInDirection = (puzzle, word, i, j, currentIter, shiftFunction) => {
  if (word[currentIter] !== puzzle[i][j]) return null;
  const objXY = { i, j };
  const SY = shiftFunction(puzzle, objXY);
  if (SY == null) return null;
  if (currentIter === word.length - 2) return true;
  return searchInDirection(puzzle, word, objXY.i, objXY.j, currentIter + 1, shiftFunction);
};

const getRSymbol = (puzzle, objXY) => {
  objXY.j++;
  if (puzzle[objXY.i] === undefined) return null;
  return puzzle[objXY.i][objXY.j] || null;
};

const getLSymbol = (puzzle, objXY) => {
  objXY.j--;
  if (puzzle[objXY.i] === undefined) return null;
  return puzzle[objXY.i][objXY.j] || null;
};

const getUSymbol = (puzzle, objXY) => {
  objXY.i--;
  if (puzzle[objXY.i] === undefined) return null;
  return puzzle[objXY.i][objXY.j] || null;
};

const getDSymbol = (puzzle, objXY) => {
  objXY.i++;
  if (puzzle[objXY.i] === undefined) return null;
  return puzzle[objXY.i][objXY.j] || null;
};

const getURSymbol = (puzzle, objXY) => {
  objXY.i--;
  objXY.j++;
  if (puzzle[objXY.i] === undefined) return null;
  return puzzle[objXY.i][objXY.j] || null;
};

const getULSymbol = (puzzle, objXY) => {
  objXY.i--;
  objXY.j--;
  if (puzzle[objXY.i] === undefined) return null;
  return puzzle[objXY.i][objXY.j] || null;
};

const getDRSymbol = (puzzle, objXY) => {
  objXY.i++;
  objXY.j++;
  if (puzzle[objXY.i] === undefined) return null;
  return puzzle[objXY.i][objXY.j] || null;
};

const getDLSymbol = (puzzle, objXY) => {
  objXY.i++;
  objXY.j--;
  if (puzzle[objXY.i] === undefined) return null;
  return puzzle[objXY.i][objXY.j] || null;
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

console.log(searchSnakingInclude('akots', puzzle));
