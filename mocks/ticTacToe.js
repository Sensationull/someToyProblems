/*
 1. Build a class that returns a matrix that looks like:
    - | - | - 
    - | - | - 
    - | 0 | X 
    1   2   3   4 
  2. create a method that prints the board
  3. create a method that places a token on the board
  4. create a method that verifies if the move is valid
  5. create a method that checks if the board is full
*/

class ticTacToe {
  constructor() {
    this.board = ['-', '-', '-'];
    this.board = this.board.map(item => ['-', '-', '-']);
  }

  isBoardFull() {
    for (let row of this.board) {
      for (let col of row) {
        if (row[col] === '-') {
          return false;
        }
      }
    }
    return true;
  }

  isGameOver() {
    /*
      check the state of the board to see if three adjacent tiles all have the same character
      or either of the diagonals have the same characters
      create a flag
      iterate through each row
    */
    if (this.isBoardFull()) return true;
  }

  isValid(row, col) {
    if (this.board[row][col] !== '-') return false;
    return true;
  }

  placeToken(row, col, token) {
    if (this.isValid(row,col)) this.board[row][col] = token;
    return;
  }

  print() {
    console.log(`Current Board `);
    for (let row of this.board) {
      console.log(row);
    }
  }
}

const test = new ticTacToe();
test.placeToken(0,0, '0');
test.placeToken(1,0, 'X');
test.placeToken(2,0, '0');
test.placeToken(0,1, '0');
test.placeToken(1,1, 'X');
test.placeToken(2,1, '0');
test.placeToken(0,2, '0');
test.placeToken(1,2, 'X');
test.placeToken(2,2, '0');
console.log('Is board Full?',test.isBoardFull())
test.print();
test.print();

