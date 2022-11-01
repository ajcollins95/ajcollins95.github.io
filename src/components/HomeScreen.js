import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
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

    //Snackbar methods
    const handleEmailClick = () => {
        setIsSnackOpen(true)
    }

    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsSnackOpen(false)
    }

    let bottom_nav_screens = [
        <Home appTheme={props.appTheme} handleEmailClick={handleEmailClick}/>,
        <Projects />,
        <Experience />,
    ]

    const [value, setValue] = useState(0);
    const [isSnackOpen, setIsSnackOpen] = useState(false);
    
    let theme = useTheme();
    const sxTest = {
        color: theme.palette.info.main
    }

    return (

            <Container
                sx = {{
                    height: "100%",
                    margin: "0",
                    padding: "0px",
                }}
                disableGutters = {true}
            >
                <Snackbar
                open={isSnackOpen}
                autoHideDuration={5000}
                close={handleSnackClose}
                message="ajcollin@alumni.cmu.edu copied to clipboard!"
                
                />
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
                        width: "100%",
                    }}
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}>

                    <BottomNavigationAction label="Home" icon={<HomeIcon />} sx={sxTest}/>
                    <BottomNavigationAction label="Projects" icon={<CodeIcon />} sx={sxTest}/>
                    <BottomNavigationAction label="Experience" icon={<WorkIcon />} sx={sxTest}  />
                </BottomNavigation>

                    
            </Container>
            
    )
}

export default HomeScreen;
