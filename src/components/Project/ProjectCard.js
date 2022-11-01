import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tooltip from '@mui/material/Tooltip';
import { createTheme, ThemProvider, useTheme } from '@mui/material/styles';





const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProjectCard(props) {
  //Makes a card that displays passed down projectData
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const theme = useTheme()
  const sxActive = {
    color: theme.palette.info.main
  }
  const sxDisabled = {
    color: "#154133"
  }


  const ttColor = '#2E0A21'

  return (
    <Card sx={{ 
        maxWidth: 345,
        backgroundColor: theme.palette.secondary.dark
    }}
      variant="outlined"

        >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: theme.palette.secondary.main }} aria-label="header">
            {props.data.title[0]}
          </Avatar>
        }
        titleTypographyProps = {{
          variant: 'h6'
        }}
        sx={{color: theme.palette.primary.main}}
        title={props.data.title}
      />
      

      <CardContent>
        <Typography color="primary.main">
          Problem
        </Typography>
        <Typography variant="body2" color={theme.palette.text.primary}>
          {props.data.problem}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="source code" sx={{backgroundColor: theme.palette.secondary.dark}} onClick={() => {
          window.location.assign("http://www.w3schools.com");
        }}>
          <IconButton aria-label="source code" disabled={props.data.isCodeDisabled}>
            <CodeIcon sx={{ color: theme.palette.info.main}} />
          </IconButton>
        </Tooltip>
        <Tooltip title="live demo">
          <IconButton aria-label="view live demo" disabled={props.data.isDemoDisabled}>
            <WebIcon sx={props.data.isDemoDisabled ? sxDisabled : sxActive}/>
          </IconButton>
        </Tooltip>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{ color: theme.palette.info.main}}/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography color={theme.palette.primary.main}>Solution</Typography>
          <Typography variant="body2" color={theme.palette.text.primary}>
            {props.data.solution}
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}
