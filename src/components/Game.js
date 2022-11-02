import React, {useState} from 'react';
import Board from './Board'
import {createBoard} from '../utils/CreateBoard'
import {getGameStatus} from '../utils/GetGameStatus'
import {getFinalClickStates} from '../utils/GetFinalClickStates'
import { zeroClick } from '../utils/ZeroClick';
import '../styles/Game.css';

const Game = (props) => {

    //Define properties for each difficulty level
    const difficulties = {
        easy: {
            rows: 8,
            columns: 10,
            mines: 10
        },
        medium: {
            rows: 14,
            columns: 18,
            mines: 40
        },
        hard: {
            rows: 20,
            columns: 24,
            mines: 99
        }
    }

    //generator functions for some of the state variables
    const create2dArray = (rows, columns, fill=0) => [...Array(rows).keys()].map(i => Array(columns).fill(fill))

    const createProxedBoard = (difficulty) => {
        //makes a proxed Board based on the given difficulty
        //hardcoded difficulty parameters since there's only three types
        let diffData = difficulties[difficulty]

        return createBoard(diffData.rows, diffData.columns, diffData.mines);
    }

    //Declare state variables
    const [difficulty, setDifficulty ] = useState('medium');
    const [gameState, setGameState ] = useState('in-progress');
    const [placedFlags, setPlacedFlags ] = useState(0);
    const [proxedBoard, setProxedBoard ] = useState(createProxedBoard(difficulty));
    const [clickStates, setClickStates] = useState(create2dArray(
                                            difficulties[difficulty].rows,
                                            difficulties[difficulty].columns,
                                            0)
    )
    

    //Event handlers
    const handleCellClick = (clickData) => {
        //This is run everytime a square is clicked

        //When the game state is not in progress, no clicking allowed!
        if (gameState != 'in-progress') {
            resetBoard()
            return
        }

        //Update click states variable and adjust current state
        let localClickStates = updateClickStates(clickData, clickStates, proxedBoard)
        

        //Amke changes based on current game State
        let localGameState = getGameStatus(clickData, localClickStates, proxedBoard)
        if (localGameState == 'game-over') {
            setClickStates(getFinalClickStates(localClickStates, proxedBoard))
        } else if (localGameState == 'win-game') {
            setClickStates(localClickStates)

        } else {
            setClickStates(localClickStates)

        }
        setGameState(localGameState)

    }

    const handleZeroClick = (clickData, proxedBoard) => {
        //returns an updated clickState array based on the zero propagation
        clickData.board = proxedBoard
        return zeroClick(clickData)
    }

    const handleDiffChange = (difficulty) => setDifficulty(difficulty)

    
    //General Game.js methods

    const countFlags = (clickStates) => {
        let rows = difficulties[difficulty].rows;
        let columns = difficulties[difficulty].columns;
        let rightClickValue = 1; // In click states, a '1' is a right click
        let flagCount = 0

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                if (clickStates[r][c] == rightClickValue) flagCount++;                
            }
        }

        return flagCount
    }
    
    const updateClickStates = (clickData, clickStates, proxedBoard) => {
        //handles anytype of click and adjust state accordingly
            //set shorthand for variables
            let r = clickData.position[0], c = clickData.position[1];
            let clickType = clickData.type;
            let clickState = clickStates[r][c]
    
            //create deep copy of state array
            let copy = clickStates.map(function(arr) {
                return arr.slice();
            });
            
            //make adjustments to state based on variables
            if (clickType == 'left' && clickState == 0) {
                copy[r][c] = -1
                if (proxedBoard[r][c] == 0){
                    //checks to see if a zero status was clicked
                    copy[r][c] = 0
                    clickData.clickStateCopy = copy
                    copy = handleZeroClick(clickData, proxedBoard)
                }
            } else if (clickType == 'right' && clickState != -1) {
                if (placedFlags == difficulties[difficulty].mines) {
                    copy[r][c] = 0
                } else {
                    copy[r][c] = ! copy[r][c]      

                }
            }
    
            return copy
    }

    const resetBoard = () => {
        //This is what will reset a game back to the starting board
        setProxedBoard(createProxedBoard(difficulty))
        setClickStates(create2dArray(
            difficulties[difficulty].rows,
            difficulties[difficulty].columns,
            0))
        setGameState('in-progress')
    }   

    //Use effect 'hooks'
    React.useEffect(() => {
        //resets the board if difficulty changes
        resetBoard()
    }, [difficulty]);

    React.useEffect(() => {
        //counts flags if clickStates changes
        setPlacedFlags(countFlags(clickStates)) 

    }, [clickStates])

    
    return (
        <div className="Game" onContextMenu={(e) => e.preventDefault()}>
            <Board 
                difficulty={difficulty}
                difficulties={difficulties}
                proxedBoard={proxedBoard}
                clickStates={clickStates}
                placedFlags={placedFlags}
                gameState={gameState}
                dropdownState={props.dropdownState}
                handleDiffChange={handleDiffChange}
                handleDropClick={props.handleDropClick}
                handleCellClick={handleCellClick}/>
        </div>
    )
}

export default Game;
