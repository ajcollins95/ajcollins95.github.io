import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import '../../styles/Terminal.css';
import TermStatement from './TermStatement';
import Cursor from '../utils/Cursor';


//TODO add top right closing circles
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
                "https://www.linkedin.com/in/ajcollins95"
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
        //returns a div with all of the logged terminal statements
        const terminalLog = []
        Object.keys(terminalData).forEach(key => {
            terminalLog.push(<TermStatement 
                input={key} 
                outputContent={terminalData[key]}
                key={key}
            />)
            
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
