export function createBoard(rows, columns, mines) {
    const maxRows = rows
    const maxCols = columns
    const maxMines = mines

    const seedMines = () => {
        //seeds a number of mines onto a board of r * c size
        //returns an array of mine location coordinates 
        const placedMines = []
        while (placedMines.length < maxMines) {
            let location = Math.floor(Math.random() * maxRows * maxCols)
            if (! placedMines.includes(location)) {
                placedMines.push(location)
            }
        }
        //use mine 
        let mineCoords = []
        placedMines.forEach(mine => mineCoords.push([Math.floor(mine / maxCols), mine % maxCols]) )
        return mineCoords
    }

    const placeMines = (board, mineCoords) => {
        //takes an empty board and array of mine coords
        //returns a "board" array with mines marked as '-1'
        let row, col;
        //console.log(mineCoords)
        mineCoords.forEach((coords) => {
            row = coords[0]
            col = coords[1]
            board[row][col] = -1
        })
        //console.log(board)
    }

    const getAdjMines = (board, r, c) => {
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
        let adjacentMines = 0;

        dirs.forEach(dir => {
            //create new coords for each direction
            let modRow = r + dir[0]
            let modCol = c + dir[1]
            //test if the new coords are on the board
            let isValidRow = 0 <= modRow && modRow < maxRows
            let isValidCol = 0 <= modCol && modCol < maxCols
            //create counter for adjacent mines
            if (isValidRow && isValidCol) {
                //cond ? true:false
                if (board[modRow][modCol] == -1) {
                    //console.log(`mine at ${modRow},${modCol}`)
                    adjacentMines += 1
                }
            }
        })
        return adjacentMines
    }

    const placeProxNums = (board) => {
        //loops through board and places prox nums for each space
        //a proximity number tells how many mines are adjacent to each space
        //returns a board with mines and proxNums

        for (let r = 0; r < maxRows; r++) {
            for (let c = 0; c < maxCols; c++) {
                if (board[r][c] != -1) {
                    let adjMines = getAdjMines(board, r, c)
                    board[r][c] = adjMines
                }
                
            }
        }
        return board
        
    }

    const create2dArray = (rows, columns) => [...Array(rows).keys()].map(i => Array(columns).fill(null))

    const main = () => {
        //create new 2d null array to represent board, matching rows and columns
        let board = create2dArray(maxRows, maxCols)
        //create an array of the locations where mines are
        let mineCoords = seedMines()
        //place mines onto the board
        let minedBoard = placeMines(board, mineCoords)
        //place proximity numbers on the board
        let proxedBoard = placeProxNums(board)
        return proxedBoard
    }

    return main()

}


