class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';        
        this.emptyCells = 9;
        this.draw = false;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        this.field = this.field ? this.field : [ [], [], [] ];
        if(!this.field[rowIndex][columnIndex]){ 
            this.field[rowIndex][columnIndex] = this.currentPlayer;

            this.checkWinner(this.currentPlayer)

            this.currentPlayer = this.currentPlayer === 'x'? 'o': 'x';
            this.emptyCells--
            if(this.emptyCells===0 && !this.winner){
                this.draw = true;
            }
        }
        console.log(this.field)
    }

    isFinished() {
        if(this.winner || this.draw){return true}
        return false;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return this.emptyCells === 0;
    }

    isDraw() {
        return this.draw;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex]? this.field[rowIndex][colIndex]: null;
    }

    checkWinner(currentPlayer){
        const winningComb = currentPlayer+currentPlayer+currentPlayer;

        //rows
        const rowWin = this.field.some(function(row){
            return row.join('') === winningComb;
        });

        if(rowWin){
            this.winner = currentPlayer;
            return rowWin;
        }

        //colomn
        for(let colomn = 0; colomn <= 2; colomn++){
            const colComb = this.field[0][colomn]+this.field[1][colomn]+this.field[2][colomn];
            if(colComb === winningComb){
                this.winner = currentPlayer;
                return colComb === winningComb;
            }
        }
        
        //diag
        const diagA = this.field[0][0] + this.field[1][1] + this.field[2][2];
        if(diagA === winningComb){
            this.winner = currentPlayer;
            return diagA === winningComb;
        }

        const diagB = this.field[0][2] + this.field[1][1] + this.field[2][0];
        if(diagB === winningComb){
            this.winner = currentPlayer;
            return diagB === winningComb;
        }
    }
}

module.exports = TicTacToe;
