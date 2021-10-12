import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 445,
    margin: 'auto',
    position:'relative'
  },
  media: {
    position:'relative',
    height: 390,
  },
}));

function Media(props) {
  const { loading = false } = props;
  const classes = useStyles();

  return (
    
    <div className="container" style = {{padding:'30px 0px 0px 0px'}}>
    <div className="row">
    <div className="col-md-6" style={{cursor: 'pointer'}} style = {{padding:'30px 0px 50px 0px'}}>
  
      <Box style={{padding:'20px 20px'}} mx='auto'>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton animation="wave" variant="circle" width={40} height={40} />
            ) : (
              <Avatar
                alt=""
                src={require('./image/jieunProfile2.png').default}
              />
            )
          }
          action={
            loading ? null : (
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            )
          }
          title={
            loading ? (
              <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
            ) : (
              'Jieun Kim'
            )
          }
          subheader={loading ? <Skeleton animation="wave" height={10} width="40%" /> : 
              'Daegu'}
        />
        {loading ? (
          <Skeleton animation="wave" variant="rect" className={classes.media} />
        ) : (
          
        <a href="https://mimesisartmuseum.co.kr/%ED%98%84%EC%9E%AC%EC%A0%84%EC%8B%9CCurrent"
          target="_blank"
          rel="noopener noreferrer">
          <CardMedia
            className={classes.media}
            
            image={require('./image/pic1.jpg').default}
            title=""
          />
        </a>
        )}

        <CardContent>
          {loading ? (
            <React.Fragment>
              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          ) : (
            <Typography variant="body2" color="textSecondary" component="p">
              {
                "The journey to find the self of existence."
              }
            </Typography>
          )}
        </CardContent>
      </Card>
      </Box>

   </div>
   
   <div className="col-md-6" style={{cursor: 'pointer'}} style = {{padding:'30px 0px 50px 0px'}}>
      
      <a href="https://www.instagram.com/seheemoon/?hl=ko"
          target="_blank"
          rel="noopener noreferrer">
      </a>
        
      <Box style={{padding:'20px 20px'}} mx='auto'>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton animation="wave" variant="circle" width={40} height={40} />
            ) : (
              <Avatar
                alt=""
                src={require('./image/jieunProfile2.png').default}
              />
            )
          }
          action={
            loading ? null : (
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            )
          }
          title={
            loading ? (
              <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
            ) : (
              'sehee Moon'
            )
          }
          subheader={loading ? <Skeleton animation="wave" height={10} width="40%" /> : 
              'Seoul'}
        />
        {loading ? (
          <Skeleton animation="wave" variant="rect" className={classes.media} />
        ) : (
          
        <a href="https://www.instagram.com/seheemoon/?hl=ko"
          target="_blank"
          rel="noopener noreferrer">
          <CardMedia
            className={classes.media}
            
            image={require('./image/seheepic1.png').default}
            title=""
          />
        </a>
        )}

        <CardContent>
          {loading ? (
            <React.Fragment>
              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          ) : (
            <Typography variant="body2" color="textSecondary" component="p">
              {
                "Comming soon, would look forward to it."
              }
            </Typography>
          )}
        </CardContent>
      </Card>
      </Box>
     </div>

   </div>
   </div>

   
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

function Artists() {
  return (
    <div>
      <Media />
    </div>
  );
}
export default Artists;