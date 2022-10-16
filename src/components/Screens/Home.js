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
            <p className="blurb">
                {blurb.one}
                <a href="link to bpsc">BPSC
                </a>
                {blurb.two}
            </p>
            <Terminal/>

        </div>

    )
}

export default Home;
