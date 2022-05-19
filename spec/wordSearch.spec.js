const data = require('../data/data');
const {
  searchStraightLineInclude,
  searchSnakingInclude,
  getRSymbol,
  getLSymbol,
  getUSymbol,
  getURSymbol,
  getDRSymbol, getDSymbol, getULSymbol, getDLSymbol,
} = require('../wordSearch');

describe('проверка функциоаналп получения соседнего символа', () => {
  const { puzzle } = data;

  it('должно получить символ справа от текущего в массиве', () => {
    expect(getRSymbol(puzzle, { i: 2, j: 1 })).toBe('c');
    expect(getRSymbol(puzzle, { i: 6, j: 6 })).toBe(null);
  });

  it('должно получить символ справа вверх от текущего в массиве', () => {
    expect(getURSymbol(puzzle, { i: 2, j: 1 })).toBe('a');
    expect(getURSymbol(puzzle, { i: 0, j: 6 })).toBe(null);
  });

  it('должно получить символ справа вниз от текущего в массиве', () => {
    expect(getDRSymbol(puzzle, { i: 2, j: 1 })).toBe('s');
    expect(getDRSymbol(puzzle, { i: 0, j: 6 })).toBe(null);
  });

  it('должно получить символ слева от текущего в массиве', () => {
    expect(getLSymbol(puzzle, { i: 2, j: 1 })).toBe('i');
    expect(getLSymbol(puzzle, { i: 0, j: 0 })).toBe(null);
  });

  it('должно получить символ слева вверх от текущего в массиве', () => {
    expect(getULSymbol(puzzle, { i: 2, j: 1 })).toBe('s');
    expect(getULSymbol(puzzle, { i: 0, j: 0 })).toBe(null);
  });

  it('должно получить символ слева вниз от текущего в массиве', () => {
    expect(getDLSymbol(puzzle, { i: 2, j: 1 })).toBe('o');
    expect(getDLSymbol(puzzle, { i: 6, j: 1 })).toBe(null);
  });

  it('должно получить символ сверху от текущего в массиве', () => {
    expect(getUSymbol(puzzle, { i: 2, j: 1 })).toBe('o');
    expect(getUSymbol(puzzle, { i: 0, j: 2 })).toBe(null);
  });

  it('должно получить символ снизу от текущего в массиве', () => {
    expect(getDSymbol(puzzle, { i: 2, j: 1 })).toBe('t');
    expect(getDSymbol(puzzle, { i: 6, j: 3 })).toBe(null);
  });
});

describe('searchStraightLineInclude', () => {
  it('проверка нахождения слова foxes', () => {
    expect(searchStraightLineInclude(data.wordsStraight[0], data.puzzle)).toBe(true);
  });

  it('проверка нахождения слова otters', () => {
    expect(searchStraightLineInclude(data.wordsStraight[1], data.puzzle)).toBe(true);
  });

  it('проверка нахождения слова bison', () => {
    expect(searchStraightLineInclude(data.wordsStraight[2], data.puzzle)).toBe(true);
  });

  it('проверка нахождения слова crown', () => {
    expect(searchStraightLineInclude('crown', data.puzzle)).toBe(false);
  });


});

describe('searchSnakingInclude', () => {
  it('проверка нахождения слова nighthawks', () => {
    expect(searchSnakingInclude(data.wordsSnake[0], data.puzzle)).toBe(true);
  });
});
