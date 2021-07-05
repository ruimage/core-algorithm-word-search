## Word search

In this exercise, you will need to write a search algorithm that will tell you whether you can find the input word in the word search puzzle, which is also passed to the function as input. 

#### Structure of the puzzle data

```javascript
let puzzle = [
  ["a", "k", "f", "o", "x", "e", "s"],
  ["s", "o", "a", "w", "a", "h", "p"],
  ["i", "t", "c", "k", "e", "t", "n"],
  ["o", "t", "s", "d", "h", "o", "h"],
  ["s", "e", "x", "g", "s", "t", "a"],
  ["u", "r", "p", "i", "w", "e", "u"],
  ["z", "s", "b", "n", "u", "i", "r"]
]
```
*Figure 1*. Representation of a word search puzzle as a nested array

You will represent your word search puzzle as nested arrays. The puzzle as a whole will be represented by an external array. Each row in the puzzle will be represented by one of the internal arrays (see Figure 1).

### Release 0. Search for words in a string

![Word search in strings](readme-assets/straight-word.gif)

*Figure 2*. Finding words *foxes*, *otters* and *bison* in a string.

In this release you will write a function `straightLineInclude`. 

Your function will accept two parameters:
1. The word you are looking for.
2. Word search puzzle that is created as a nested array. 

The method returns `true` if the word can be found in the puzzle and `false` if it cannot be found. 
You will follow a traditional word search algorithm, which only finds words in strings (see Figure 2).
As always, you need to write tests to make sure the method works as expected.

**Rules**
- Words can be found horizontally, vertially and diagonally.
- Words can be written from left to right and vice versa.

### Release 1. Search for words in a snake

![search for words in a snake](readme-assets/snaking-word.gif)

*Figure 3*. Finding the word *nighthawks*.

In this release, you need to write the `snakingInclude` method. This method will take the same parameters as the `straightLineInclude` method and return the same values, only the algorithm that is used to find words will be different. In fact, you need to remove the restriction that words must be in the same row, column or diagonal. Instead, words can be built from adjacent letters, not only from those lying on the same line, as in the figure (see Figure 3).

You also need to test this method.

**Rules**
- Each letter in the puzzle can only be used once per word.


### Release 2. Creating a user interface

Let's create a webpage that displays a word search puzzle and asks for the words to search for. After entering each word, we have to report whether it is possible to find the word in the puzzle.

If the word is found, can we somehow show it to the user?

## Conclusion

The snake algorithm is one of the trickiest challenges you'll face while studying at Bootcamp. What do you think about it? Did everything go well? Where did the difficulties arise?
What's your approach to testing? Did you start with simpler words while searching? Could it be a one-letter word followed by two letters?

[wikipedia word search]: https://en.wikipedia.org/wiki/Word_search
