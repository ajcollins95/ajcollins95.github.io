import React from 'react';
import Typography from '@mui/material/Typography';


import '../../styles/Home.css'
import Title from '../Title';
import Terminal from '../Terminal';

const Home = (props) => {

    let blurb = {
        one: "I am currently an R&D engineer at ",
        two: ". I am passionate about building elegant software solutions to solve complex problems!"
    }  

    return (
        <div>
            <Title title="AJ.Collins"/>
            <Typography variant="body1" className="blurb">
                {blurb.one}
                <a href="https://www.bowlerpons.com/">BPSC
                </a>
                {blurb.two}
            </Typography>
            <Terminal appTheme={props.appTheme}/>

        </div>

    )
}

export default Home;
