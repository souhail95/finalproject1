import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import './App.css';
import './index.css';
import Navbar from '../Navbar/Navbar';
const Home = () => {
  const [currentId,  setCurrentId] = useState(null);
  const   dispatch = useDispatch();
  useEffect(()  => {dispatch(getPosts());},  [currentId, dispatch] );
  return (
 <div>
  <Navbar />
  <Grow in>
    <Container   maxWidth="lg" style={{marginBottom:"50%"}}>
        <Grid  container justifyContent='space-between' style={{marginTop:"10%"}}  alignItems="stretch" spacing={3}>
          <Grid  item xs={12}   sm={7}>
                 <Posts  setCurrentId={setCurrentId}  />
          </Grid>
          <Grid  item xs={12}   sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId}     />
          </Grid>
        </Grid>
    </Container>
  </Grow>
  <footer style={{color:'white',textDecoration:'none',paddingTop:'0.5%',marginTop:"20%"}} className="box10" ><h2 style={{textAlign:"center",paddingTop:"1%"}} >Our website is open 24hours/24 during the week except for the week-end!</h2></footer>
 </div>
  );
}

export default Home;