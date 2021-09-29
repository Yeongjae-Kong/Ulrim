import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import InfoIcon from '@material-ui/icons/Info';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    padding:'0rem 0rem 0rem 15rem',
    width: 300,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation alignItems='stretch'
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Account" component={Link} to='/account' color = 'black' icon={<AccountCircleIcon />} />
      <BottomNavigationAction label="Favorites"  component={Link} to='/favorites' icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Cart"  component={Link} to='/cart' icon={<AddShoppingCartIcon />} />
      <BottomNavigationAction label="Info"  component={Link} to='/info' icon={<InfoIcon />} />
    </BottomNavigation>
  );
}