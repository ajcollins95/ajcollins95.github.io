import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled } from '@mui/material/styles';
//import Cell from './Cell';
//import AppHeader from './AppHeader';
//import '../styles/Projects.css';
import Screen from '../HomeScreen'

const Projects = (props) => {

    const initAppData = () => {
        let number_of_screens = 4;
        let app_data = {
            screen: [...Array(number_of_screens).keys()]
        };
        return app_data
    }
    const [appData, setAppData] = useState(initAppData())    
    /**
     * Have like a bunch of cards that say problem on them. 
     * Give brief problem descriptions of each one
     * Have a solution button
     * Card opens up and you can see a brief solution description,
     * as well as source code and live demo. 
     * Opening is animated.
     * Might need to learn router for this.
     */

    return (
        <div>
            <p>Projects</p>
        </div>

    )
}

export default Projects;
