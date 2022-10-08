import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled } from '@mui/material/styles';
import AddIcon from "@mui/icons-material/Add"
import Fab from '@mui/material/Fab';
//import Cell from './Cell';
//import AppHeader from './AppHeader';
//import '../styles/Analytics.css';
import Screen from './HomeScreen'

const Games = (props) => {

    const initAppData = () => {
        let number_of_screens = 4
        let app_data = {
            screen: [...Array(number_of_screens).keys()]
        }
        return app_data
    }

    const fabStyle = {
        position: 'absolute',
        bottom: "15%",
        right: "5%",
    }
    const [appData, setAppData] = useState(initAppData())    

    return (
        <div>
            <p>Games</p> 
            


        </div>

    )
}

export default Games;
