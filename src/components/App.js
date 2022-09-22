import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled } from '@mui/material/styles';
//import Cell from './Cell';
//import AppHeader from './AppHeader';
//import '../styles/App.css';
import Screen from './Screen'

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

    const initAppData = () => {
        let number_of_screens = 4
        let app_data = {
            screen: [...Array(number_of_screens).keys()]
        }
        return app_data
    }
    const [appData, setAppData] = useState(initAppData())    

    return (
        <ThemeProvider theme={theme}>
            <Screen app_data={appData}/>

        </ThemeProvider>

    )
}

export default App;
