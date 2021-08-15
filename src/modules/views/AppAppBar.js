import * as React from 'react';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import { Typography } from "@material-ui/core";
 
const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href=".../ulrim/"
            sx={{ fontSize: 30 }}
          >
            {'ULRIM'}
          </Link>
          <Box sx={{ margin:5, flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link 

              color="inherit"
              varinat="h6"
              underline="none"
              href="../src/SignIn.js"
              sx={rightLink}
            >
              <Typography style={{margin:'10px'}} variant="h6" href="../src/sign-in/" color="inherit"
              underline="none" sx={rightLink}>
                sign in</Typography>
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="../src/SignUp.js/"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              <Typography style={{margin:'10px'}} variant="h6" href="../src/sign-in/" color="inherit"
              underline="none" sx={rightLink}>
                sign up</Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
