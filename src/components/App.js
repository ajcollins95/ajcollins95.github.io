import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled } from '@mui/material/styles';

import HomeScreen from './HomeScreen'
import GameScreen from './GameScreen'
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
    
    const appScreens = {
        home: <HomeScreen appData={appData}/>,
        game: <GameScreen appData={appData}/>
    }
    console.log(appScreens[appData.currentScreen])

    return (
        <ThemeProvider theme={theme}>
            {appScreens[appData.currentScreen]}
        </ThemeProvider>

    )
}

export default App;
