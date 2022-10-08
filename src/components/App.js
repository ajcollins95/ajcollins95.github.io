import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled } from '@mui/material/styles';

import HomeScreen from './HomeScreen';

const _ = require('lodash')

const App = (props) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#38A64D'
            },
            secondary: {
                main: '#A63892',
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
    

    return (
        <ThemeProvider theme={theme}>
            <HomeScreen appData={appData}/>
        </ThemeProvider>

    )
}

export default App;
