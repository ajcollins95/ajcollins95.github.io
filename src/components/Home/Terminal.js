import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import '../../styles/Terminal.css';
import TermStatement from './TermStatement';
import Cursor from '../utils/Cursor';
import { useTheme } from '@mui/material/styles';



const Terminal = (props) => {
    //Renders a terminal with the data from the 'terminalData' object
    const terminalData = {
        currentLocation: "Baltimore, MD",
        contactInfo: {
            email: [
                "email",
                "ajcollin@alumni.cmu.edu"
            ],
            linkedIn: [
                "linkedIn",
                "https://www.linkedin.com/in/ajcollins95"
            ],
            github: [
                "gitHub",
                "https://github.com/ajcollins95"
            ]
        },
        resume: {
            resume: [
                "ajcollins.pdf",
                "https://drive.google.com/file/d/1WgZDBq9a1-1AnPMCkST2F_plCMjrLC1O/view?usp=share_link"
            ]
        },
        interests: [
            "ultimate frisbee",
            "piano",
            "mental health",
            "bible"
        ],
        education: "B. Sc. Mechanical Engineering; Carnegie-Mellon University",
        skills: [
            "Python",
            "C#",
            "JavaScript",
            "node.js",
            "React.js",
            "git",
            "MATLAB"
        ],
        nextAdventure: "Searching for nextAdventure..." //something to indicate I'm looking
    }
    let theme = useTheme()

    const terminalStyles = {
        terminalCursor: {
            color: theme.palette.secondary.main
        },
        logChildren: {
            borderStyle: "solid",
            borderColor: theme.palette.secondary.dark,
            borderWidth: "1px",
            backgroundColor: theme.palette.secondary.dark,

        }

    }

    const logTerminal = () => {
        //returns a div with all of the logged terminal statements
        const terminalLog = []
        Object.keys(terminalData).forEach(key => {
            terminalLog.push(<TermStatement 
                input={key} 
                outputContent={terminalData[key]}
                key={key}
                handleEmailClick={props.handleEmailClick}
            />)
            
        })
        terminalLog.push(<Cursor style={terminalStyles.terminalCursor} 
            color={theme.palette.secondary.main}
            className="terminal-cursor" 
            key='cursor'
            />)
        return <div className="log-children"
            style={terminalStyles.logChildren}>{terminalLog}</div>
    }

    return (
        <Container
        disableGutters={true}
        >
            <div className="terminal-container">
                <div className="terminal-header" >
                    
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
