import React, { Component } from 'react';
import SkillSection from '../Jportfolio/s_Skill';
import ExperienceSection from '../Jportfolio/s_Experience';
import CentreI from '../Jportfolio/Center_I';
import Datajson from '../../data/data_portfolio.json'

class About_me extends Component{
    render() {

        return (
            <div>
                <section id="Apropos">

                </section>

                <SkillSection data={Datajson.Skill}/>
                <ExperienceSection data={Datajson.Experience}/>
                <CentreI data={Datajson.Center_I}/>

            </div>
        );
    }
}

export default About_me;