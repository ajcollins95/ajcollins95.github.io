import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled } from '@mui/material/styles';
import "../styles/App.css"

import HomeScreen from './HomeScreen';

const _ = require('lodash')

const App = (props) => {
    //create a "theme" for MUI Styling
    const theme = createTheme({
        typography: {
            body2: {
                fontFamily: '"Ubuntu"'
            },
            body1: {
                fontFamily: '"Ubuntu"',
                fontSize: 18,
                margin: "1% 0%"
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

    const snackTheme = createTheme(theme, {
       components: {
           MuiSnackbarContent: {
               styleOverrides: {
                   root: {
                       backgroundColor: theme.palette.secondary.dark, 
                       color: theme.palette.info.main //off-white
                   }
               }
           }
       },
    })
    

    return (
        <ThemeProvider theme={snackTheme}>
            <HomeScreen appTheme={snackTheme}/>
        </ThemeProvider>

    )
}

export default App;
