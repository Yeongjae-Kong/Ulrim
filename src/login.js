import React, { useEffect, Component} from 'react';
import { useHistory } from "react-router-dom";
import { Header } from 'semantic-ui-react';
import App from './App.js';
import Amplify, {Auth, Hub} from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import awsconfig from './aws-exports';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { applyPolyfills, defineCustomElements, } from '@aws-amplify/ui-components/loader';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

Amplify.configure(awsconfig);

const Login = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

  return authState === AuthState.SignedIn && user ? (
      <div>
          <div className='instatext' style={{padding:'5rem'}}>{user.username}님의 ULRIM 방문을 환영합니다.</div>
          <AmplifySignOut />
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

export default Login;