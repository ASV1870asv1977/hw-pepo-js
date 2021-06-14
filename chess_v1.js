
function chess_draw() {
    // Функция отрисовки шахматной доски

    let cell_color;

    // Шахматная доска
    const board = document.createElement('div');
    board.classList.add('chess_board');


    // Шахматные клетки
    for (let i = 0; i < 100; i++) {

        if (Math.floor(i / 10) % 2 == 0) {
            if (i % 2 == 0) {
                cell_color = '#8B4513';
            } else {
                cell_color = '#FFEBCD';
            }
        } else if (Math.floor(i / 10) % 2 != 0) {
            if (i % 2 != 0) {
                cell_color = '#8B4513';
            } else {
                cell_color = '#FFEBCD';
            }
        }

        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.backgroundColor = cell_color;

        if (i <= 9 || i >= 90) {
            cell.style.height = "25px";
            cell.style.backgroundColor = "#DEB887";
            if (i > 0 && i < 9) {
                cell.style.textAlign = "center";
                cell.textContent = String.fromCharCode(i + 64);
                cell.style.color = "#8B4513";
            }
            if (i > 90 && i < 99) {
                cell.style.textAlign = "center";
                cell.textContent = String.fromCharCode(i - 90 + 64);
                cell.style.color = "#8B4513";
            }
        }

        if (i % 10 == 0 || i % 10 == 9) {
            cell.style.width = "25px";
            cell.style.backgroundColor = "#DEB887";
            if (i >= 10 && i < 90) {
                cell.style.textAlign = "center";
                cell.textContent = Math.floor(i / 10);
                cell.style.color = "#8B4513";
            }
        }
        board.appendChild(cell);
    }
    document.body.appendChild(board);
}

chess_draw();




