import { color, ThemeProvider } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { createTheme, ThemProvider, styled } from '@mui/material/styles';
import "../styles/Cursor.css"

const ProjectCard = (props) => {

    return (
        <span className="cursor">&#x25AE;</span> // Switching last digit between E and F changes color

    )
}

export default ProjectCard;
