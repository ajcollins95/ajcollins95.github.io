export function zeroClick(stateData) {
    //returns an updated clickState based on provided info
    let board = stateData.board
    let clickStates = stateData.clickStateCopy.map(function(arr) {
        return arr.slice();
    });
    let maxRows = board.length
    let maxCols = board[0].length
    const clickedRow = stateData.position[0], clickedCol = stateData.position[1];

    const create2dArray = (rows, columns) => [...Array(rows).keys()].map(i => Array(columns).fill(null))

    const getCellNeighbors = (clickedPos) => {
        //takes a position [row,col]
        //returns an array of positions that are ON THE BOARD directly adjacent to provided position
        let r = clickedPos[0]
        let c = clickedPos[1]

        let dirs = [
            [-1,-1],
            [-1,0],
            [-1,1],
            [0,-1],
            [0,1],
            [1,-1],
            [1,0],
            [1,1]
        ]
        
        let neighbors = []

        dirs.forEach(dir => {
            //create new coords for each direction
            let modRow = r + dir[0]
            let modCol = c + dir[1]
            //test if the new coords are on the board
            let isValidRow = 0 <= modRow && modRow < maxRows
            let isValidCol = 0 <= modCol && modCol < maxCols
            //create counter for adjacent mines
            if (isValidRow && isValidCol) {
                neighbors.push([modRow,modCol])
            }
        })
        return neighbors
    }


    const reveal = (clickedPos) => {
        //Uses DFS to recursively 'click' the adjacent cells
        let clickState = clickStates[clickedPos[0]][clickedPos[1]]
        let proxNum = board[clickedPos[0]][clickedPos[1]]
        let focus = clickedPos

        if (clickState == -1) {
            //is this cell already clicked?
            return 
        } else if (clickState == 1) {
            throw("impossible to open zeroes on flagged tile")
            return
        }

        //"reveal" this cell
        clickStates[clickedPos[0]][clickedPos[1]] = -1

        if (proxNum >= 1 ) {
            //proximity number not 0 or -1
            return
        }

        let neighbors = getCellNeighbors(clickedPos)
        neighbors.forEach((cellPos) => {
            reveal(cellPos)
        })
 
    }

    const main = () => {
        //recursively update clickStates based on original click
        reveal([clickedRow,clickedCol])
        //return the updated clickState 2d array with clicked cells
        return clickStates
        
    }

    return main()

}


