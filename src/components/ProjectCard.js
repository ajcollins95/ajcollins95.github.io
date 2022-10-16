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
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ 
        maxWidth: 345,
        backgroundColor: "#2E0A21"
    }}
      variant="outlined"

        >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#D81E5B" }} aria-label="header">
            {props.data.title[0]}
          </Avatar>
        }
        titleTypographyProps = {{
          variant: 'h6'
        }}
        title={props.data.title}
      />
      

      <CardContent>
        <Typography>
          problem
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.data.problem}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="view source code">
          <CodeIcon sx={{ color: "#59C9A5"}} />
        </IconButton>
        <IconButton aria-label="share">
          <WebIcon sx={{ color: "#59C9A5"}}/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{ color: "#59C9A5"}}/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography >solution</Typography>
          <Typography variant="body2" color="text.secondary">
            {props.data.solution}
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}
