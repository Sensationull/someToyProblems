/*
  Build a visual representation of Connect Four

  1. Build a class that returns a matrix that looks like:
    - | - | - | - 
    - | - | - | 0 
    - | 0 | X | X 
    - | X | 0 | X 
    1   2   3   4 
  2. create a method that prints the board
  4. create a is valid move that validates that you can place a token in that column
  3. create a dropToken method takes in a column and drops a token into that column if the space is free

  class syntax 
    this board has a length of four
*/


class Board {
  constructor() {
    this.board = ['-', '-', '-', '-'];
    this.board = this.board.map(row => ['-', '-', '-', '-'])
  }

  isBoardFull() {
    let flag = true;
    for (let top of this.board[0]) {
      if (top === '-') {
        flag = false;
      }
    }
    return flag;
  }

  isValid(col) {
    if (this.board[0][col] === '-') return true;
    return false;
  }

  dropToken(col, token) {
    if (col < 0 || col >= this.board.length) return 'invalid column'
    if (this.isValid(col)) {
      for (let i = this.board.length - 1; i >= 0; i--) {
        if (this.board[i][col] === '-') {
          this.board[i][col] = token;
          return;
        }
      }
    }
  }

  print () {
    this.board.forEach((item, index) => console.log(index,item.join('|')))
    console.log('  1 2 3 4')
  }
}

const test = new Board;
test.dropToken(0, 'X');
test.dropToken(0, 'X');
test.dropToken(0, 'X');
test.dropToken(0, 'X');
test.dropToken(1, 'X');
test.dropToken(1, 'X');
test.dropToken(1, 'X');
test.dropToken(1, 'X');
test.dropToken(2, 'X');
test.dropToken(2, 'X');
test.dropToken(2, 'X');
test.dropToken(2, 'X');
test.dropToken(3, 'X');
test.dropToken(3, 'X');
test.dropToken(3, 'X');
test.dropToken(3, 'X');
console.log(test.dropToken(5, 'X'));
console.log('is valid a valid move', test.isValid(0))
console.log('is the board full? ',test.isBoardFull())
test.print();


// console.log('The board: ', test.);