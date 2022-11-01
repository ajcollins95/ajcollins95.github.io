import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import Home from './Screens/Home';
import Experience from './Screens/Experience';
import Projects from './Screens/Projects';
import { useTheme, createTheme } from '@mui/material/styles';

/**
 * 
 * YOU NEED TO WRITE TESTS TO CHECK IF LINKS WORK!
 * Maybe a URL/Link to confirm they work asynchrocnously
 * 
 */


const HomeScreen = (props) => {  
    //This is the main layout for the portfolio
    let theme = useTheme()
    let snackMsg = ""
    const [value, setValue] = useState(0);
    const [isSnackOpen, setIsSnackOpen] = useState(false);

    //Snackbar methods/data
    const handleEmailClick = async () => {
        //allows clicking the email link to open the snackbar
        let email = "ajcollin@alumni.cmu.edu"
        await navigator.clipboard.writeText(email).then(
            () => {
                //Success
                setIsSnackOpen(true)
            },
            () => {
            }
        )
    }

    const handleSnackClose = (event, reason) => {
        //closes the snackbar
        if (reason === 'clickaway') {
            return;
        }

        setIsSnackOpen(false)
    }

    const snackAction = (
        <React.Fragment>
            <IconButton
                size='small'
                aria-label="close"
                color="inherit"
                onClick={handleSnackClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    )


    //This array helps toggle between various screens
    let bottom_nav_screens = [
        <Home appTheme={props.appTheme} handleEmailClick={handleEmailClick}/>,
        <Projects />,
        <Experience />,
    ]
    
    //variable styles for different components
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
                maxWidth={'md'}
                disableGutters = {true}
            >
                <Snackbar
                    open={isSnackOpen}
                    autoHideDuration={3000}
                    onClose={handleSnackClose}
                    message="'ajcollin@alumni.cmu.edu' copied to clipboard!"
                    anchorOrigin={{vertical: 'top', horizontal: "center"}}
                    action={snackAction}
                />
                <Box className="screen"
                    sx = {{
                        height: "100%",
                        margin: "5%",
                        marginTop: "1%",
                        marginBottom: "5%",
                        width: "100%"

                        
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
