import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled } from '@mui/material/styles';
import AddIcon from "@mui/icons-material/Add";
import Fab from '@mui/material/Fab';

import '../../styles/Home.css'
import Title from '../Title';
import Terminal from '../Terminal';

const Home = (props) => {

    let blurb = "I am currently an R&D engineer at BPSC. I am passionate about building elegant software solutions to solve complex problems!"

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
            <Title title="AJ-Collins"/>
            <p className="blurb">{blurb}</p>
            <Terminal/>

        </div>

    )
}

export default Home;
