import React, { useState, useEffect, useCallback } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import  icon1 from './blog-icon.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';
import { verif2 } from '../../actions/auth';
const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();
  const classes = useStyles();

  const logout = useCallback(() => {
    history('/');
    dispatch({ type: actionType.LOGOUT });
    dispatch(verif2(history));
    setUser(null);
    window.location.replace('http://localhost:3000/auth');
    
    
  }, [dispatch, history]);

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location, user?.token, logout]);

  return (
    <AppBar className={classes.appBar} position="static" color="primary">
      <div className={classes.brandContainer}>
        <img component={Link} to="/" className={classes.image} src={icon1} style={{width:'100%'}} alt="YouBlog.so" height="60rem" />
        <Typography component={Link} to="/" className={classes.heading} variant="h6"  style={{color:"white" }} align="center">YouBlog.so</Typography>   
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} style={{marginRight:'10px', marginLeft:'3px'}} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} style={{marginRight:'3px', marginLeft:'3px'}} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" style={{width:'30%',height:'30px',marginTop:'4.2%',fontSize:'2vw'}} className={classes.logout} color="default" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" style={{width:'100%',height:'60px',marginTop:'4.2%',fontSize:'2vw'}} color="default">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;