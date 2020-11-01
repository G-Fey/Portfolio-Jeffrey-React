import React, { Component } from 'react';
import SkillSection from '../Jportfolio/s_Skill';
import ExperienceSection from '../Jportfolio/s_Experience';
import CentreI from '../Jportfolio/Center_I';

class About_me extends Component{
    render() {

        let data = this.props.data

        return (
            <div>
                <SkillSection data={data.Skill}/>
                <ExperienceSection data={data.Experience}/>
                <CentreI data={data.Center_I}/>
            </div>
        );
    }
}

export default About_me;