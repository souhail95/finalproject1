import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

import Auth from './components/Auth/Auth';
const user = JSON.parse(localStorage.getItem('profile'));  
const App = () => (


  <BrowserRouter>  
       <Routes>
        <Route path="/" exact  element={<Home />} ></Route>
        {(user?.result?.googleId || user?.result?._id) ? <Route path="/" element={<Home />} /> : <Route path="/auth" element={<Auth />} />}
       </Routes>
  </BrowserRouter>

);

export default App;
