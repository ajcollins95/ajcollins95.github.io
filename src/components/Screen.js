import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';
import Divider from '@mui/material/Divider'
//import Cell from './Cell';
//import AppHeader from './AppHeader';
//import '../styles/App.css';

const Screen = (props) => {

    const initScreenData = () => {
        let screen_types = [
            /*
            <History />,
            <NewGame />,
            <GameRunning />,
            */
        ]

        let screen_data = {
        }
        return screen_data
    }
    const [screenData, setScreenData] = useState(initScreenData())    
    const [value, setValue] = useState(0)    

    return (
        <div className="screen">
            <Box>
                <Paper 
                    sx = {{
                        position: 'fixed',
                        bottom: 0,
                        width: '100%'
                    }}
                    elevation = {3}

                >
                    <BottomNavigation
                        showLabels
                     
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        >
                        <BottomNavigationAction label="Games" icon={<ScoreboardIcon />} />
                        <BottomNavigationAction label="Analytics" icon={<AnalyticsIcon />} />
                        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
                    </BottomNavigation>
                </Paper>
            </Box>
            
        </div>
    )
}

export default Screen;
