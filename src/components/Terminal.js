import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

import '../styles/Terminal.css';
import TermStatement from './TermStatement';
import Cursor from './Cursor';

const Terminal = (props) => {
    const terminalData = {
        currentLocation: "Baltimore, MD",
        contactInfo: {
            email: [
                "gmail",
                "ajcollins95@gmail.com"
            ],
            linkedIn: [
                "linkedIn",
                "LI link"
            ],
            github: [
                "gitHub",
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

    const logTerminal = () => {
        const terminalLog = []
        Object.keys(terminalData).forEach(key => {
            //console.log(key);
            //<TermStatement input={key} />
            terminalLog.push(<TermStatement input={key} outputContent={terminalData[key]}/>)
            
        })
        terminalLog.push(<Cursor className="terminal-cursor"/>)
        return <div>{terminalLog}</div>
    }

    return (
        <Container
        disableGutters="True"
        >
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
