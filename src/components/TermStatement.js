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
import '../styles/TermStatement.css';


const TermStatement = (props) => {
    //Turns all terminal data into something that looks terminal-like

    const formatLinks = (linkData) => {
        const links = [<span>[</span>]
        let elements = Object.keys(linkData).length;
        let count = 0
        //links.push(<span>"</span>)
        Object.keys(linkData).forEach(key => {
            //links.push(<span>"</span>)
            
            const text = linkData[key][0]
            const url = linkData[key][1]
            
            links.push(<a href={url}>{text}</a>)
            if (count < elements - 1) {
                links.push(<span>, </span>)
            }
            //links.push(<span>", "</span>)
            count += 1;
        })
        links.push(<span>]</span>)
        return <div className="output-links">{links}</div>
    }


    const formatOutput = () => {

        let output = props.outputContent
        switch (typeof output) {
            case 'string':
                if (props.input == "nextAdventure") { 
                    
                    return <p className="output-string">{output}</p>
                }
                return <p className="output-string">"{output}"</p>
                
                break;
            case 'object':
                if (Array.isArray(output)) {
                    return <p className="output-string">["{output.join("\", \"")}"]</p>
                }
                else {
                    return formatLinks(output)
                }
                break;
          
                
            default:
                alert("Something has gone wrong in Term Statement frmoutput")
                break;
        }
        
    }

    return (
        <Box>
            <p className="input">$ AJ.{props.input}</p>
            {formatOutput()}
        </Box>
        
    )

}

export default TermStatement;
