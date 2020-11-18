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
      
          <Menu/>

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
      

    </BrowserRouter>

  );
}

export default App;
