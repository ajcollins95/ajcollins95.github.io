import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import ProjectCard from '../Project/ProjectCard';
import Title from '../utils/Title'
import _ from 'lodash';

const Projects = (props) => {
    //renders the projectData for the project tab

    const projectData = [
        {
            title: "Portfolio",
            problem: "Demonstrate my ability to create a custom React app, as well as" +
            " show off some of the projects I've been working on.",
            sourceCode: "https://github.com/ajcollins95/ajcollins.github.io",
            liveDemo: "",
            solution: "Build a dev portfolio! I documented the process more " +
            "in the linked source code readme",
            isCodeDisabled: false,
            isDemoDisabled: false,
        },
        {
            title: "Google foo.bar",
            problem: "Google foo.bar is Google's secret (shh!) hiring app. So... " +
            "prove that I have the technical capacity to work for Google?",
            sourceCode: "https://github.com/ajcollins95/google-foobar",
            liveDemo: "",
            solution: "Document each probelm statement, as well as the process by which I " +
            "developed my solution. Each of these are accessible in the source code link.",
            isCodeDisabled: false,
            isDemoDisabled: true,
        },
        {
            title: "Minesweeper",
            problem: "I can't seem to locate the mines..." +
            "an attractive and reactive web app.",
            sourceCode: "https://github.com/ajcollins95/custom-minesweeper",
            liveDemo: "minesweeper",
            solution: "I developed a state-of-the-art mine-finding simulation using React. The " +
            "simulation can be accessed through the live demo link.",
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
        <div style={{marginBottom: "20%"}}>
            <Title title="Projects" className="projects-title"/>
            {renderProjects()}
        </div>
    )
}

export default Projects;
