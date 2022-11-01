import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

import '../../styles/TermStatement.css';

const TermStatement = (props) => {
    //Turns all terminal data into something that looks terminal-like

    const handleLink = (e) => {
        //handles the action when the user clicks an underlined blue link
        e.preventDefault()
        console.log(e)
        let linkText = e.target.text
        switch (linkText) {
            case 'email':
                //copy to clipboard and make a snackbar
                props.handleEmailClick()
                break;
            case 'ajcollins.pdd':
                //render pdf somehow
                alert("PDF")
                break;
            default:
                //Go to the provided href url
                //console.log(e.target)
                //alert("GOTO URL")
                window.location.assign(e.target.href);

                break;
        }
    }

    const formatLinks = (linkData) => {
        //Renders links as if they were an array
        const links = [<span key='start-brace'>[</span>]
        let elements = Object.keys(linkData).length;
        let count = 0

        Object.keys(linkData).forEach(key => {            
            const text = linkData[key][0]
            const url = linkData[key][1]
            
            links.push(<a href={url} onClick={handleLink} key={key}>{text}</a>)
            if (count < elements - 1) {
                //This modifies the foramtting to make it look like a coding terminal
                links.push(<span key={`${text}-${count}`}>, </span>)
            }
            count += 1;
        })
        links.push(<span key='end-brace'>]</span>)
        return <div className="output-links">{links}</div>
    }


    const formatOutput = () => {
        //renders the terminal data according to what type of data it is
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
