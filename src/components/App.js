import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled } from '@mui/material/styles';
import "../styles/App.css"

import HomeScreen from './HomeScreen';

const _ = require('lodash')

const App = (props) => {
    const theme = createTheme({
        typography: {
            fontFamily: [
                "Source Code Pro",
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
        },
        palette: {
            mode: 'dark',
            primary: {
                main: '#38A64D',
                dark: '#0A1929'


            },
            secondary: {
                main: '#A63892',
                dark: '#0A1929'
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
    const [appData, setAppData] = useState(initAppData())   
    //console.log(theme);

    return (
        <ThemeProvider theme={theme}>
            <HomeScreen appData={appData}/>
        </ThemeProvider>

    )
}

export default App;
