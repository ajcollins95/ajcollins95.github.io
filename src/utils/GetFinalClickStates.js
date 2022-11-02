export function getFinalClickStates(clickStates, proxedBoard) {

    const main = () => {
        let maxRows = proxedBoard.length
        let maxCols = proxedBoard[0].length
        let clickStateCopy = clickStates.map((arr) => {return arr.slice();});

        for (let r = 0; r < maxRows; r++) {
            let cellsRow = []
            for (let c = 0; c < maxCols; c++) {
                if (proxedBoard[r][c] == -1 && clickStates[r][c] <= 0) {
                    clickStateCopy[r][c] = -1
                }
            }
        }
        return clickStateCopy
        
    }

    return main()

}


