import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import ProjectCard from '../Project/ProjectCard';
import Divider from "@mui/material/Divider"
import Title from '../utils/Title'
import _ from 'lodash';

const Projects = (props) => {
    //renders the projectData for the project tab

    const projectData = [
        {
            title: "Portfolio",
            problem: "I needed to come up with a way to convince non-technical decision makers" +
            " that I am a competent software professional",
            sourceCode: "github link",
            liveDemo: "live link",
            solution: "Build a dev portfolio! I documented the process more " +
            "in the linked source code readme",
            isCodeDisabled: false,
            isDemoDisabled: false,
        },
        {
            title: "Google foo.bar",
            problem: "Google foo.bar is Google's secret (shh!) hiring app. So... " +
            "prove that I have the technical capacity to work for Google?",
            sourceCode: "github link",
            liveDemo: "live link",
            solution: "This is essentially in the readme where I describe each " +
            "given problem and my solutions to them.",
            isCodeDisabled: false,
            isDemoDisabled: true,
        },
        {
            title: "Minesweeper",
            problem: "Find a way to demonstrate my audacity and capacity in building" +
            "an attractive and reactive web app.",
            sourceCode: "github link",
            liveDemo: "live link",
            solution: "I built minesweeper in react! I used a DFS pathfinding algorithm to uncover empty squares." +
            "I attempted to model my game after Google's minesweeper clone.",
            isCodeDisabled: false,
            isDemoDisabled: false,
        },
    ]    

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
