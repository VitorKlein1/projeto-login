# Função para criar o jogo
def create_game():
    board = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
    ]
    current_player = "X"

    # Função para imprimir o tabuleiro na tela
    def print_board():
        print("-------------")
        for row in board:
            print("| " + " | ".join(row) + " |")
            print("-------------")

    # Função para verificar se o tabuleiro está cheio
    def is_board_full():
        return all(cell != "-" for row in board for cell in row)

    # Função para verificar se um jogador venceu
    def check_for_win():
        return check_rows_for_win() or check_columns_for_win() or check_diagonals_for_win()

    # Função auxiliar para verificar linhas
    def check_rows_for_win():
        for row in board:
            if check_row_col(row[0], row[1], row[2]):
                return True
        return False

    # Função auxiliar para verificar colunas
    def check_columns_for_win():
        for col in range(3):
            if check_row_col(board[0][col], board[1][col], board[2][col]):
                return True
        return False

    # Função auxiliar para verificar diagonais
    def check_diagonals_for_win():
        return check_row_col(board[0][0], board[1][1], board[2][2]) or check_row_col(board[0][2], board[1][1], board[2][0])

    # Função auxiliar para verificar se há três elementos iguais em uma linha ou coluna
    def check_row_col(c1, c2, c3):
        return c1 != "-" and c1 == c2 == c3

    # Função para trocar de jogador
    def change_player():
        nonlocal current_player
        current_player = "O" if current_player == "X" else "X"

    # Função para colocar a marca do jogador no tabuleiro
    def place_mark(row, col):
        if 0 <= row < 3 and 0 <= col < 3 and board[row][col] == "-":
            board[row][col] = current_player
            return True
        return False

    # Função para iniciar o jogo
    def start_game():
        print("Jogo da Velha\n")
        print_board()

        while True:
            row = int(input("Digite a linha (0-2): "))
            col = int(input("Digite a coluna (0-2): "))

            if place_mark(row, col):
                print_board()

                if check_for_win():
                    print(f"Jogador {current_player} venceu!")
                    break
                elif is_board_full():
                    print("Empate!")
                    break

                change_player()
            else:
                print("Jogada inválida. Tente novamente.")

    # Retornar as funções públicas
    return start_game


# Criar uma instância do jogo e iniciar
game = create_game()
game()

