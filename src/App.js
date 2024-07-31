"use client";

import logo from './logo.svg';
import './App.css';

  import {LinksUi,NavBarUi,Poster} from './components/index.js';

//import {LinksUi,NavBarUi} from './components/index.js'

import Dash from './pages/dashboard';

import Projects from './pages/projects';

import {BrowserRouter,Route,Routes} from "react-router-dom";



const App =()=>{


  
  return(
  <>


    <BrowserRouter>
  
    <NavBarUi/>

    <Routes>
  
        <Route path="/dashboard" element={<Dash/>}/> 

        <Route path="/projects" element={<Projects/>}/>

    </Routes>

    </BrowserRouter>

 

  </>
  

  );






}





export default App;
