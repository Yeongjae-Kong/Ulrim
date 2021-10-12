import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    padding:'0rem 0rem 0rem 7rem',
    width: 300,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation 
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="My Page" component={Link} to='/account' color = 'black' icon={<AccountCircleIcon />} />
      <BottomNavigationAction label="Login"  component={Link} to='/login'  icon={<ExitToAppSharpIcon />} />
      <BottomNavigationAction label="Info"  component={Link} to='/info' icon={<InfoIcon />} />
    </BottomNavigation>
  );
}