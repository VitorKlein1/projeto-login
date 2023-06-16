// Classe para representar o jogo da velha
class Game {
    constructor() {
      this.board = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
      ];
      this.currentPlayer = "X";
    }
  
    // Imprime o tabuleiro na tela
    printBoard() {
      console.log("-------------");
      for (let i = 0; i < 3; i++) {
        let row = "| ";
        for (let j = 0; j < 3; j++) {
          row += this.board[i][j] + " | ";
        }
        console.log(row);
        console.log("-------------");
      }
    }
  
    // Verifica se o tabuleiro está cheio
    isBoardFull() {
      return this.board.every(row => row.every(cell => cell !== "-"));
    }
  
    // Verifica se um jogador venceu
    checkForWin() {
      return (
        this.checkRowsForWin() ||
        this.checkColumnsForWin() ||
        this.checkDiagonalsForWin()
      );
    }
  
    // Verifica as linhas
    checkRowsForWin() {
      for (let i = 0; i < 3; i++) {
        if (this.checkRowCol(this.board[i][0], this.board[i][1], this.board[i][2])) {
          return true;
        }
      }
      return false;
    }
  
    // Verifica as colunas
    checkColumnsForWin() {
      for (let i = 0; i < 3; i++) {
        if (this.checkRowCol(this.board[0][i], this.board[1][i], this.board[2][i])) {
          return true;
        }
      }
      return false;
    }
  
    // Verifica as diagonais
    checkDiagonalsForWin() {
      return (
        this.checkRowCol(this.board[0][0], this.board[1][1], this.board[2][2]) ||
        this.checkRowCol(this.board[0][2], this.board[1][1], this.board[2][0])
      );
    }
  
    // Verifica se há três elementos iguais em uma linha ou coluna
    checkRowCol(c1, c2, c3) {
      return c1 !== "-" && c1 === c2 && c2 === c3;
    }
  
    // Troca o jogador atual
    changePlayer() {
      this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    }
  
    // Coloca a marca do jogador no tabuleiro
    placeMark(row, col) {
      if (this.board[row][col] === "-") {
        this.board[row][col] = this.currentPlayer;
        return true;
      }
      return false;
    }
  
    // Inicia o jogo
    startGame() {
      console.log("Jogo da Velha\n");
      this.printBoard();
  
      while (true) {
        const row = parseInt(prompt("Digite a linha (0-2):"));
        const col = parseInt(prompt("Digite a coluna (0-2):"));
  
        if (this.placeMark(row, col)) {
          this.printBoard();
  
          if (this.checkForWin()) {
            console.log(`Jogador ${this.currentPlayer} venceu!`);
            break;
          } else if (this.isBoardFull()) {
            console.log("Empate!");
            break;
          }
  
          this.changePlayer();
        }
    }
}
}
  