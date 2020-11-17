import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Composants/Jportfolio/Home';
import Menu from './Composants/Jportfolio/Menu';
import Aboutme from './Composants/Jportfolio/About_me';
import ProjectSection from './Composants/Jportfolio/S_Project';
import {BrowserRouter, Route} from "react-router-dom"
import { motion } from 'framer-motion';

const App = () => {
  
  return (
    <BrowserRouter>
      <div className="App">

        <motion.div
             initial={{
              opacity:0,
              x:-100
          }}
          animate={{
              opacity:1,
              x:0
          }}
          transition={{duration:1}} 
          >
          <Menu/>
        </motion.div>

        <motion.div
             initial={{
              opacity:0,
          }}
          animate={{
              opacity:1,
          }}
          transition={{duration:1}} 
          >
          <Route exact path="/" component={Home} />
          <Route exact path="/Aboutme" component={Aboutme} />
          <Route exact path="/Project" component={ProjectSection} />
        </motion.div>
        
        
              
        
      </div>
    </BrowserRouter>

  );
}

export default App;
