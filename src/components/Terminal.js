import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import Divider from '@mui/material/Divider';
import Home from './Screens/Home';
import Experience from './Screens/Experience';
import Projects from './Screens/Projects';
import { useTheme } from '@mui/material/styles';
import '../styles/Terminal.css';
import TermStatement from './TermStatement';


const Terminal = (props) => {
    const terminalData = {
        currentLocation: "Baltimore, MD",
        contactInfo: {
            email: [
                "email",
                "ajcollins95@gmail.com"
            ],
            linkedIn: [
                "Linked In",
                "LI link"
            ],
            github: [
                "GitHub",
                "Github Link"
            ]
        },
        resume: {
            resume: [
                "ajcollins.pdf",
                "link to pdf"
            ]
        },
        interests: [
            "ultimate frisbee",
            "piano",
            "mental health",
            "bible"
        ],
        education: "B.Sc. Mechanical Engineering - Carnegie-Mellon University",
        skills: [
            "Python",
            "JavaScript",
            "React",
            "C#",
            "git",
            "MATLAB",
            "CAD"
        ],
        nextJob: "Error: Not Found" //something to indicate I'm looking


    }

    const initAppData = () => {
        let number_of_screens = 4
        let app_data = {
            screen: [...Array(number_of_screens).keys()]
        }
        return app_data
    }

    const logTerminal = () => {
        const terminalLog = []
        Object.keys(terminalData).forEach(key => {
            //console.log(key);
            //<TermStatement input={key} />
            terminalLog.push(<TermStatement input={key} outputContent={terminalData[key]}/>)
            
        })
        return <div>{terminalLog}</div>
    }
    /*
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
    */

    const [appData, setAppData] = useState(initAppData())    

    return (
        <Container
        sx = {{
            border: '1px solid orange'
        }}>
            <div className="terminal-container">
                <div className="terminal-header">

                </div>
                <div className="terminal-log">
                    {
                        logTerminal()
                    }

                </div>
            </div>
        </Container>
        
    )

}

export default Terminal;
