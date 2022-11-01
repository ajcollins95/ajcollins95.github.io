import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled, useTheme } from '@mui/material/styles';
//import Cell from './Cell';
//import AppHeader from './AppHeader';
//import '../styles/Analytics.css';
import Stack from '@mui/material/Stack';

import Title from '../Title'
import ExperienceCard from '../ExperienceCard'

const Experience = (props) => {

    const theme = useTheme()

    const experienceList = [
        {
            company: "Bowler Pons Solutions Consultants LLC",
            position: "R&D Engineer",
            start: "May 2021",
            end: "Current",
            responsibilities: [
                {
                    role: "T&E Lead",
                    description: "As a Test and Evaluation Lead, I have taken charge of running test events, collecting data, and documenting results." +
                    " I have written T&E Test Plans for team projects at client-attended events and encapsulated their outcome into written reports. " +
                    " I have written scripts to programmatically collect data from physical sensors in node.js / Python, " +
                    " which have allowed team members the freedom to explain projects to clients during test events." +
                    " Under my leadership, the R&D team was able to secure follow-on funding for subsequent phases of those projects."
                },
                {
                    role: "UAV Systems Integration",
                    description: "I am currently building a C# integration framework to allow one of our aerial capabilities to interface with gov't" +
                    " defense software! I am working together on this with a co-worker; learning collaborative git one merge at a time!"
                },
                {
                    role: "Business Development",
                    description: "I have storyboarded, filmed, and edited two marketing videos representing the capabilities of our projects" +
                    " for consumption within the defense community"
                },
            ]

        },
    ]

    const renderExperiences = () => {
        //w/e
        const experiences = []
        experienceList.forEach(exp => {
            experiences.push(<ExperienceCard data={exp} />)
            
        })
        return <Stack spacing={1} sx={{marginTop: '2%'}}>{experiences}</Stack>
    }

    return (
        <div>
            <Title title="Experience"/>
            {renderExperiences()}
        </div>

    )
}

export default Experience;
