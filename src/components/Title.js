import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled } from '@mui/material/styles';

import Screen from '../HomeScreen'

const Title = (props) => {

    const initAppData = () => {
        let number_of_screens = 4
        let app_data = {
            screen: [...Array(number_of_screens).keys()]
        }
        return app_data
    }
    const [appData, setAppData] = useState(initAppData())    

    return (
        <div>
            <p>Title</p>
        </div>

    )
}

export default Title;
