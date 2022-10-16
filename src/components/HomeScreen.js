import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import Home from './Screens/Home';
import Experience from './Screens/Experience';
import Projects from './Screens/Projects';
import { useTheme } from '@mui/material/styles';

/**
 * 
 * YOU NEED TO WRITE TESTS TO CHECK IF LINKS WORK!
 * Maybe a URL/Link to confirm they work asynchrocnously
 * 
 */

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

    const [screenData, setScreenData] = useState(initScreenData());   
    const [value, setValue] = useState(0);
    
    let theme = useTheme();

    return (

            <Container
                sx = {{
                    height: "100%",
                    margin: "0",
                    padding: "0",
                }}
            >
                <Box className="screen"
                    sx = {{
                        height: "100%",
                        margin: "5%",
                        marginBottom: "10%",
                        
                    }}
                    >
                    
                    {bottom_nav_screens[value]}

                </Box>
                <BottomNavigation
                    sx = {{
                        position: 'fixed',
                        bottom: 0,
                        width: "100%"
                    }}
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}>

                    <BottomNavigationAction label="Home" icon={<HomeIcon />}/>
                    <BottomNavigationAction label="Projects" icon={<CodeIcon />}/>
                    <BottomNavigationAction label="Experience" icon={<WorkIcon />} />
                </BottomNavigation>

                    
            </Container>
            
    )
}

export default HomeScreen;
