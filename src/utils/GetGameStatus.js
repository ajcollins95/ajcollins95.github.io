import { click } from "@testing-library/user-event/dist/click";

export function getGameStatus(clickData, clickStates, proxedBoard) {
    //returns an updated clickState based on provided info
    let click_r = clickData.position[0], click_c = clickData.position[1];
    let maxRows = proxedBoard.length
    let maxCols = proxedBoard[0].length

    const create2dArray = (rows, columns) => [...Array(rows).keys()].map(i => Array(columns).fill(null))

    const isGameOver = () => {
        let isMineAtPos = proxedBoard[click_r][click_c] == -1
        let isLeftClick = clickData.type == 'left'
        let isFlagged = clickStates[click_r][click_c] == 1

        let isPosUncovered = clickStates[click_r][click_c] == -1
        console.log(`clickState at position is ${clickStates[click_r][click_c]}`)
        console.log(`isGameOver():\n(r,c): (${click_r},${click_c})\nisMineAtPos: ${isMineAtPos}\nisPosUncovered: ${isPosUncovered}`)

        return (isMineAtPos && isLeftClick && (!isFlagged) )
    }

    const isWin = () => {
        let clickStateCopy = clickStates.map((arr) => {return arr.slice();});

        for (let r = 0; r < maxRows; r++) {
            let cellsRow = []
            for (let c = 0; c < maxCols; c++) {
                let isMineAtPos = proxedBoard[r][c] == -1
                let isUncovered = clickStates[r][c] == -1

                if (!isMineAtPos && !isUncovered) {
                    return false
                }
            }
        }
        return true
    }
    

    const main = () => {
        console.log('running main in gGS')
        if (isGameOver()) {
            return 'game-over'
        } else if (isWin()) {
            return 'win-game'
        }
        else {
            return 'in-progress'
        }        
    }

    return main()

}


