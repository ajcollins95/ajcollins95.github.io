import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
//import AppHeader from './AppHeader';
//import '../../styles/Projects.css';
import ProjectCard from '../ProjectCard';
import Divider from "@mui/material/Divider"
import Title from '../Title'
import _ from 'lodash';

const Projects = (props) => {

    const initAppData = () => {
        let number_of_screens = 4;
        let app_data = {
            screen: [...Array(number_of_screens).keys()]
        };
        return app_data
    }
    const [appData, setAppData] = useState(initAppData()) 
    
    const projectData = [
        {
            title: "Portfolio",
            problem: "I needed to come up with a way to convince non-technical decision makers" +
            " that I am a competent software professional",
            sourceCode: "github link",
            liveDemo: "live link",
            solution: "Build a dev portfolio! I documented the process more " +
            "in the linked source code readme"
        },
        {
            title: "Google foo.bar",
            problem: "Google foo.bar is Google's secret (shh!) hiring app. So... " +
            "prove that I have the technical capacity to work for Google?",
            sourceCode: "github link",
            liveDemo: "live link",
            solution: "This is essentially in the readme where I describe each " +
            "given problem and my solution to them."
        },
        {
            title: "Minesweeper",
            problem: "Find a way to demonstrate my audacity and capacity in building" +
            "an attractive and reactive web app.",
            sourceCode: "github link",
            liveDemo: "live link",
            solution: "I built minesweeper in react! I used a DFS pathfinding algorithm to uncover empty squares." +
            "I attempted to model my game after Google's minesweeper clone."
        },
    ]
    /**
     * Have like a bunch of cards that say problem on them. 
     * Give brief problem descriptions of each one
     * Have a solution button
     * Card opens up and you can see a brief solution description,
     * as well as source code and live demo. 
     * Opening is animated.
     * Might need to learn router for this.
     */
    const theme = useTheme()
    const projTheme = createTheme(theme, {

    })

     const renderProjects = () => {
        //returns a div with all of the logged terminal statements
        const projects = []
        projectData.forEach(proj => {
            projects.push(<ProjectCard data={proj}/>)
            
        })
        return <Stack spacing={1} sx={{marginTop: '2%'}}>{projects}</Stack>
    }


    return (
        <div>
            <Title title="Projects" className="projects-title"/>
            {renderProjects()}
        </div>

    )
}

export default Projects;
