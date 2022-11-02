import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled } from '@mui/material/styles';
import "../../styles/Cursor.css"

//Renders a blinking terminal cursor
const Cursor = (props) => {

    return (
        <span className="cursor" style={{color: props.color}}>&#x25AE;</span> // Switching last digit between E and F changes color

    )
}

export default Cursor;
