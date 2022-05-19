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
    expect(getRSymbol(puzzle, 2, 1)).toBe('w');
    expect(getRSymbol(puzzle, 6, 0)).toBe(null);
  });

  it('должно получить символ справа вверх от текущего в массиве', () => {
    expect(getURSymbol(puzzle, 2, 1)).toBe('o');
    expect(getURSymbol(puzzle, 6, 0)).toBe(null);
  });

  it('должно получить символ справа вниз от текущего в массиве', () => {
    expect(getDRSymbol(puzzle, 2, 1)).toBe('k');
    expect(getDRSymbol(puzzle, 6, 0)).toBe(null);
  });

  it('должно получить символ слева от текущего в массиве', () => {
    expect(getLSymbol(puzzle, 2, 1)).toBe('o');
    expect(getLSymbol(puzzle, 0, 1)).toBe(null);
  });

  it('должно получить символ слева вверх от текущего в массиве', () => {
    expect(getULSymbol(puzzle, 2, 1)).toBe('k');
    expect(getULSymbol(puzzle, 0, 1)).toBe(null);
  });

  it('должно получить символ слева вниз от текущего в массиве', () => {
    expect(getDLSymbol(puzzle, 2, 1)).toBe('t');
    expect(getDLSymbol(puzzle, 0, 1)).toBe(null);
  });

  it('должно получить символ сверху от текущего в массиве', () => {
    expect(getUSymbol(puzzle, 2, 1)).toBe('f');
    expect(getUSymbol(puzzle, 2, 0)).toBe(null);
  });

  it('должно получить символ снизу от текущего в массиве', () => {
    expect(getDSymbol(puzzle, 2, 1)).toBe('c');
    expect(getDSymbol(puzzle, 2, 6)).toBe(null);
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
    expect(searchStraightLineInclude(data.wordsStraight[2], data.puzzle)).toBe(false);
  });
});

describe('searchSnakingInclude', () => {
  it('проверка нахождения слова nighthawks', () => {
    expect(searchSnakingInclude(data.wordsSnake[0], data.puzzle)).toBe(true);
  });
});
