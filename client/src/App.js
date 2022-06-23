import React from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import './App.css';


import  Navbar  from '../src/components/navbar';
import CreateUser from './components/createuser';
import CreateText from './components/createText';
import DisplayText from "./components/DisplayText";


function App() {
  return (
    <>
  <Router>

    <div className='container'>

    <Navbar />

   <Routes>
   <Route path="/" exact element={<DisplayText />} />
    <Route path="/user" exact element={<CreateUser />} />
    <Route path="/texts" exact element={<CreateText />} />
    </Routes>




    </div>
  </Router>
    </>
  );
}

export default App;
