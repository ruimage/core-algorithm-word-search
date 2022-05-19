const { puzzle } = require('./data/data');

const getRSymbol = (puzzle, i, j) => {
  j++;
  if (puzzle[i] === undefined) return null;
  return puzzle[i][j] || null;
};

function searchStraightLineInclude(word, puzzle) {
  for (let j = 0; j < puzzle.length; i++) {
    for (let i = 0; i < puzzle.length; j++) {
      if (searchInDirection(puzzle, word, i, j, 0,getRSymbol)) return true;
    }
  }
  return false;
}

function searchSnakingInclude(word, puzzle) {

}

const searchInDirection = (puzzle, word, i, j, currentIter, shiftFunction) => {
  if (currentIter === 0 && word[i] !== puzzle[i][j]) return null;
  const SY = shiftFunction(puzzle, i, j);
  if (SY == null) return null;
  if (currentIter === word.length - 2) return true;
  return searchInDirection(puzzle, word, i, j, currentIter + 1,shiftFunction);
};


const getLSymbol = (puzzle, i, j) => {
  j--;
  if (puzzle[i] === undefined) return null;
  return puzzle[i][j] || null;
};

const getUSymbol = (puzzle, i, j) => {
  i--;
  if (puzzle[i] === undefined) return null;
  return puzzle[i][j] || null;
};

const getDSymbol = (puzzle, i, j) => {
  i++;
  if (puzzle[i] === undefined) return null;
  return puzzle[i][j] || null;
};

const getURSymbol = (puzzle, i, j) => {
  i--;
  j++;
  if (puzzle[i] === undefined) return null;
  return puzzle[i][j] || null;
};

const getULSymbol = (puzzle, i, j) => {
  i--;
  j--;
  if (puzzle[i] === undefined) return null;
  return puzzle[i][j] || null;
};

const getDRSymbol = (puzzle, i, j) => {
  i++;
  j++;
  if (puzzle[i] === undefined) return null;
  return puzzle[i][j] || null;
};

const getDLSymbol = (puzzle, i, j) => {
  i++;
  j--;
  if (puzzle[i] === undefined) return null;
  return puzzle[i][j] || null;
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


