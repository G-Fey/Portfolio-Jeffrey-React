import React, { Component } from 'react';
import Menu from '../Jportfolio/Menu';
import Home from '../Jportfolio/Home';
import AboutMe from '../Jportfolio/About_me';
import SkillSection from '../Jportfolio/s_Skill';
import ExperienceSection from '../Jportfolio/s_Experience';
import CentreI from '../Jportfolio/Center_I';
import ProjectSection from '../Jportfolio/s_Project';
import Contact from '../Jportfolio/Contact';
import Datajson from '../../data/data_portfolio.json'


class Jportfolio extends Component {

    render() {    
        return (
            <div>
                <Menu data={Datajson.Menu}/><Menu/>
                <Home/>
                <AboutMe/>
                <SkillSection data={Datajson.Skill}/>
                <ExperienceSection data={Datajson.Experience}/>
                <CentreI data={Datajson.Center_I}/>
                <ProjectSection data={Datajson.Project}/>
                <Contact/>
            </div>
        );
    }
}

export default Jportfolio;