import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled } from '@mui/material/styles';
import "../styles/App.css"

import HomeScreen from './HomeScreen';

const _ = require('lodash')

const App = (props) => {
    //create a "theme" for MUI colors
    //this mostly just makes the navbar black
    const theme = createTheme({
        typography: {
            body2: {
                fontFamily: '"Ubuntu"'
            },
            fontFamily: [
                '"Ubuntu"', //Main Font
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
              ].join(','),
              fontSize: 14,
              fontWeightLight: 300,
              fontWeightRegular: 400,
              fontWeightMedium: 500,
        },
        palette: {
            mode: 'dark',
            secondary: {
                main: '#D81E5B', //light red
                dark: '#2E0A21' //dark red
            },
            primary: {
                main: '#FFFD98', //yellow
            },
            info: {
                main: "#59C9A5" //light blue
            },
            text: {
                primary: "#B9E3C6" //off-white
            }
        }
    })
 
    const handleScreenChange = (screen) => {
        //make a state clone
        let appDataClone = _.cloneDeep(appData)

        appDataClone.currentScreen = screen
        setAppData(appDataClone)
    }

    const initAppData = () => {
        let number_of_screens = 4
        let app_data = {
            currentScreen: 'home',
            handleScreenChange: handleScreenChange,

        }
        return app_data
    }


    //makes appData a responsive state variable
    const [appData, setAppData] = useState(initAppData())   

    return (
        <ThemeProvider theme={theme} className="theme-provider">
            <HomeScreen appData={appData} appTheme={theme}/>
        </ThemeProvider>

    )
}

export default App;
