import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';


const Link = (props) => {
    //Creates a React style 'a' element

'/home/acollins95/Documents/Portfolio/content/stat-tracker/src/components/Link.js'
    const formatLinks = (linkData) => {
        //Renders links as if they were an array
        const links = [<span>[</span>]
        let elements = Object.keys(linkData).length;
        let count = 0
        Object.keys(linkData).forEach(key => {            
            const text = linkData[key][0]
            const url = linkData[key][1]
            
            links.push(<a href={url}>{text}</a>)
            if (count < elements - 1) {
                //This modifies the foramtting to make it look like a coding terminal
                links.push(<span>, </span>)
            }
            //links.push(<span>", "</span>)
            count += 1;
        })
        links.push(<span>]</span>)
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
        <span>
            <p className="input">$ AJ.{props.input}</p>
            {formatOutput()}
        </span>
        
    )

}

export default Link;
