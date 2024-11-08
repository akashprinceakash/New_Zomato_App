import React, { Component } from 'react';

import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Home from './Home.jsx';
import Filters from './Filters.jsx';
import '../Component/Header.css';
// import Headers from './Headers.jsx';
import HeadersWithRouter from './HeadersWithRouter.jsx';
import Details from './Details.jsx';

export default class Routers extends Component {
  render() {
    return (
        <BrowserRouter>
        <HeadersWithRouter/>
        <Routes>
        {/* <Route  path='*' element={<HeadersWithRouter/>}/>  */}
        <Route exact path='/' element={<Home/>}/> 
        <Route path='/home' element={<Home/>}/> 
        <Route path='/filter' element={<Filters/>}/> 
        <Route path='/details'  element={<Details/>}/>
        </Routes>
        </BrowserRouter>
    )
  }
}
