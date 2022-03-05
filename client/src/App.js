import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
const user = JSON.parse(localStorage.getItem('profile'));  
const App = () => (


  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
       <Routes>
        <Route path="/" exact  element={<Home />} ></Route>
        {(user?.result?.googleId || user?.result?._id) ? <Route path="/" element={<Home />} /> : <Route path="/auth" element={<Auth />} />}
       </Routes>
    </Container>
    <footer style={{color:'white',textDecoration:'none',paddingTop:'0.5%',marginTop:"20%"}} className="box10" ><h2 style={{textAlign:"center",paddingTop:"1%"}} >Our website is open 24hours/24 during the week except for the week-end!</h2></footer>
  </BrowserRouter>

);

export default App;
