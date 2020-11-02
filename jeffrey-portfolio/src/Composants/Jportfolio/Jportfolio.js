import React, { Component } from 'react';
import Menu from '../Jportfolio/Menu';
import Home from '../Jportfolio/Home';
import Aboutme from '../Jportfolio/About_me';
import ProjectSection from '../Jportfolio/s_Project';
import Contact from '../Jportfolio/Contact';
import Datajson from '../../data/data_portfolio.json'



class Jportfolio extends Component {

    render() {    
        return (
            <div>
               
                <Menu data={Datajson.Menu}/>

                <Home/>
               

                <Aboutme data={Datajson}/>
                <ProjectSection data={Datajson.Project}/>
               
                <Contact/>
                
            </div>
        );
    }
}

export default Jportfolio;