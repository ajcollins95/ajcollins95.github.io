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
    

    const initAppData = () => {
        let number_of_screens = 4
        let app_data = {
            screen: [...Array(number_of_screens).keys()]
        }
        return app_data
    }
    console.log(props.input);

    const [appData, setAppData] = useState(initAppData())    

    return (
        <Box>
            <p className="input">$ {props.input}</p>
            <p className="output">{}</p>
        </Box>
        
    )

}

export default TermStatement;
