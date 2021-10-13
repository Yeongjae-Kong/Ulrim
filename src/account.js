import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
      
    marginBottom: 12,
    fontFamily: 'Jua'
  },
  pos: {
      
    fontSize: 12,
    fontFamily: 'Georgia'
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            <br></br>
        </Typography>
        <Typography className={classes.title} style={{fontSize: 16}} variant="h4" component="h2">
          해당 페이지는 현재 리뉴얼 중입니다.
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          빠른 시일 내에 찾아뵙겠습니다 :) 
          <br />
        </Typography>
        <Typography className={classes.pos} variant="body2" component="p">
          Not us, Express you
          <br />
          Show your own style, ULRIM
          <br></br>
        </Typography>
      </CardContent>
    </Card>
  );
}