import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import ExperienceAccordion from './ExperienceAccordion';


export default function ExperienceCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader

        title={props.data.position}
        subheader={props.data.company}
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
