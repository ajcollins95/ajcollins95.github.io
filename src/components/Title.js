import React, { useState, useEffect } from 'react';
import '../styles/Title.css'

import Cursor from './Cursor'; 

const Title = (props) => {
    
    //Renders a title for a page, followed by a blinking cursor
    //TODO add typing animation

    return (
        <div>
            <div className="title-container">
                $ {props.title}<Cursor className="title-cursor"/>
            </div>
        </div>
    )

}

export default Title;
