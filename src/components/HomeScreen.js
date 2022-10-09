import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import Divider from '@mui/material/Divider';
import Home from './Screens/Home';
import Experience from './Screens/Experience';
import Projects from './Screens/Projects';

//import Cell from './Cell';
//import AppHeader from './AppHeader';
//import '../styles/App.css';

const HomeScreen = (props) => {  
    
    let bottom_nav_screens = [
        <Home />,
        <Projects />,
        <Experience />,
    ]

    const initScreenData = () => {
        let bottom_nav_screens = [
            <Home />,
            <Projects />,
            <Experience />,
        ]

        let screen_data = {
            nav_screen: bottom_nav_screens[0]
        }
        return screen_data
    }

    const [screenData, setScreenData] = useState(initScreenData())    
    const [value, setValue] = useState(0)    

    return (

        <div className="screen">
            <Box>
                {bottom_nav_screens[value]}
                <Paper 
                    sx = {{
                        position: 'fixed',
                        bottom: 0,
                        width: '100%',
                        backgroundColor: '#000000'
                    }}
                    elevation = {10}>

                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}>

                        <BottomNavigationAction label="Home" icon={<HomeIcon />}/>
                        <BottomNavigationAction label="Projects" icon={<CodeIcon />}/>
                        <BottomNavigationAction label="Experience" icon={<WorkIcon />} />
                    </BottomNavigation>
                </Paper>
            </Box>
            
        </div>
    )
}

export default HomeScreen;
