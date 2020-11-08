import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Composants/Jportfolio/Home';
import Contact from './Composants/Jportfolio/Contact';
import Menu from './Composants/Jportfolio/Menu';
import Aboutme from './Composants/Jportfolio/About_me';
import ProjectSection from './Composants/Jportfolio/s_Project';
import {BrowserRouter, Route} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu/>

        <Route exact path="/" component={Home} />
        <Route exact path="/Aboutme" component={Aboutme} />
        <Route exact path="/Project" component={ProjectSection} />
              
        <Contact/>
      </div>
    </BrowserRouter>

  );
}

export default App;
