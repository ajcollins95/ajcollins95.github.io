import React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Title from '../utils/Title';
import Terminal from '../Home/Terminal';

const Home = (props) => {
    //Content for the "Home" tab
    let theme = useTheme()

    let blurb = {
        one: "I am currently an R&D engineer at ",
        two: ". I am passionate about building elegant software solutions in the pursuit of solving complex problems!",
    }  

    return (
        <div>
            <Title title="AJ.Collins"/>
            <Typography 
                variant="body1" 
                className="blurb" 
                sx={{color: theme.palette.text.primary}}>
                {blurb.one}
                <a href="https://www.bowlerpons.com/"
                    style = {{color: theme.palette.info.main}} >
                    BPSC
                </a>
                {blurb.two}
            </Typography>
            <Terminal appTheme={props.appTheme} handleEmailClick={props.handleEmailClick}/>

        </div>

    )
}

export default Home;
