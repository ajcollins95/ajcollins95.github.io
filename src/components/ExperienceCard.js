import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { createTheme, ThemProvider, styled, useTheme } from '@mui/material/styles';

import ExperienceAccordion from './ExperienceAccordion';


export default function ExperienceCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme()

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: theme.palette.secondary.dark }}>
      <CardHeader

        title={props.data.position}
        titleTypographyProps={{
          color: theme.palette.primary.main
        }}
        subheader={props.data.company}
        subheaderTypographyProps={{
          color: theme.palette.secondary.main
        }}
      />
      <Divider />
      <CardContent>
        <ExperienceAccordion data={props.data.responsibilities}/>
        
      </CardContent>
      <CardActions disableSpacing>
        
      </CardActions>
      
    </Card>
  );
}
