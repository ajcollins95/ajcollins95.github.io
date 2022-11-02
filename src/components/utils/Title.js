import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';

//import '../../styles/Title.css'

import Cursor from './Cursor'; 

const Title = (props) => {
    
    //Renders a title for a page, followed by a blinking cursor
    //TODO add typing animation
    let theme = useTheme()

    const sxTitle = {
        fontSize: "2em",
        color: theme.palette.primary.main,
        fontFamily: '"Source Code Pro"'
    }

    return (
        <div>
            <Typography sx={sxTitle}>
                $ {props.title}<Cursor className="title-cursor"/>
            </Typography>
        </div>
    )

}

export default Title;
