function generovat() {
    const radky = document.getElementById('radky').value;
    const sloupce = document.getElementById('sloupce').value;
    const chessboard = document.getElementById('chessboard');
    chessboard.style.setProperty('--radky', radky);
    chessboard.style.setProperty('--sloupce', sloupce);

 
    while (chessboard.firstChild) {
        chessboard.removeChild(chessboard.firstChild);
    }

   
    for (let i = 0; i < radky; i++) {
        for (let j = 0; j < sloupce; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if ((i + j) % 2 === 0) {
                cell.classList.add('white');
            } else {
                cell.classList.add('black');
            }
            chessboard.appendChild(cell);
        }
    }
}


generateChessboard();