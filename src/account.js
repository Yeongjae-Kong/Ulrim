import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

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


Amplify.configure(awsconfig);
  
  const Account = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();
      
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    React.useEffect(() => {
      return onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData)
      });
  }, []);
    
      return authState === AuthState.SignedIn && user ? (
        <div style={{textAlign:'center'}}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                  <br></br>
              </Typography>
              <Typography className={classes.title} style={{fontSize: 16}} variant="h4" component="h2">
                {user.username}님, 환영합니다.
              </Typography>
              <Typography className={classes.title} color="textSecondary">
              해당 페이지의 세부 내용은 리뉴얼 중에 있습니다. <br/> 빠른 시일 내에 찾아뵙겠습니다 :) <br />
              </Typography>
              <Typography className={classes.pos} variant="body2" component="p">
                Not us, Express you
                <br/>
                Show your own style, ULRIM
                <br></br>
              </Typography>
            </CardContent>
          </Card>
        </div>
      ) : (
        <AmplifyAuthenticator >
            <AmplifySignIn
                headerText="Sign in to your account"
                slot="sign-in">
            </AmplifySignIn>
          <AmplifySignUp
            slot="sign-up"
            formFields={[
              { type: "username" },
              { type: "password" },
              { type: "email" }
            ]}
          />
        </AmplifyAuthenticator>
      );
  }

  export default Account;