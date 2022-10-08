import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled } from '@mui/material/styles';


const GameScreen = (props) => {
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

    

    const handleScreenChange = () => {

    }

    const initAppData = () => {
        let number_of_screens = 4
        let app_data = {
            handleScreenChange: 0
        }
        return app_data
    }
    const [appData, setAppData] = useState(initAppData())   
    
    return (
        <div>
            <p>GAME SCREEN</p>
        </div>

    )
}

export default GameScreen;
