import React, { Component } from 'react';
import Menu from '../Jportfolio/Menu';
import Home from '../Jportfolio/Home';
import About_me from '../Jportfolio/About_me';
import Skill_section from '../Jportfolio/s_Skill';
import Experience_section from '../Jportfolio/s_Experience';
import Centre_I from '../Jportfolio/Center_I';
import Project_section from '../Jportfolio/s_Project';
import Contact from '../Jportfolio/Contact';


class Jportfolio extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Home/>
                <About_me/>
                <Skill_section/>
                <Experience_section />
                <Centre_I/>
                <Project_section/>
                <Contact/>

            </div>
        );
    }
}

export default Jportfolio;