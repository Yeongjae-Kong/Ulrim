import React, {useEffect, Component} from 'react';
import Amplify, {Auth, Hub} from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import './login.css';
// Amplify.configure(awsconfig);

// const Login = () => {
//     const [authState, setAuthState] = React.useState();
//     const [user, setUser] = React.useState();

//     React.useEffect(() => {
//         return onAuthUIStateChange((nextAuthState, authData) => {
//             setAuthState(nextAuthState);
//             setUser(authData)
//         });
//     }, []);

//   return authState === AuthState.SignedIn && user ? (
//       <div>
//           <div className='logintext' style={{padding:'5rem'}}>{user.username}님의 ULRIM 방문을 환영합니다.</div>
//           <AmplifySignOut />
//       </div>
//     ) : (
//       <AmplifyAuthenticator >
//           <AmplifySignIn
//               headerText="Sign in to your account"
//               slot="sign-in">
//           </AmplifySignIn>
//         <AmplifySignUp
//           slot="sign-up"
//           formFields={[
//             { type: "username" },
//             { type: "password" },
//             { type: "email" }
//           ]}
//         />
//       </AmplifyAuthenticator>
//   );
// }

// export default Login;

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

const Login = () => {
  return (
<div class="g-signin2"  data-onsuccess="onSignIn">
</div>
);
}

export default Login;
