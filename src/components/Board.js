import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import BoardHeader from './BoardHeader';
import '../styles/Board.css';

const Board = (props) => {
    //console.log(`Proxed Board = ${props.proxedBoard}`)
    let maxRows = props.proxedBoard.length
    let maxCols = props.proxedBoard[0].length

    //const [clickStates, setClickStates] = useState(create2dArray(maxRows, maxCols, 0))
    //const [placedFlags, setPlacedFlags] = useState(0)

    const generateBoard = (proxedBoard) => {
        //generates a visible board for the game
        //console.log('Generating new Board...')

        let renderBoard = []
        for (let r = 0; r < maxRows; r++) {
            let cellsRow = []
            for (let c = 0; c < maxCols; c++) {
                
                cellsRow.push(<Cell 
                                clickState={props.clickStates[r][c]}
                                status={proxedBoard[r][c]}
                                position={[r,c]}
                                onClick={props.handleCellClick}
                                gameState={props.gameState}
                                getAdj={null}  
                                key={`(${r},${c})`}
                            />)
            }
            renderBoard.push(<div className='cell-row' key={`row-${r}`}>{cellsRow}</div>)
        }
        return <div className='cell-table'>{renderBoard}</div>
    }


    const handleDiffChange = (difficulty) => {
        //changes difficulty state in Game.js
        props.handleDiffChange(difficulty)
    }

    

    return (
        <div className="board">
            <BoardHeader 
                handleDiffChange={handleDiffChange} 
                difficulty={props.difficulty}
                difficulties={props.difficulties}
                dropdownState={props.dropdownState}
                handleDropClick= {props.handleDropClick}
                placedFlags={props.placedFlags}/>
            <div className='board-bottom'>
                {generateBoard(props.proxedBoard)}

            </div>
        </div>
    )
}

export default Board;
