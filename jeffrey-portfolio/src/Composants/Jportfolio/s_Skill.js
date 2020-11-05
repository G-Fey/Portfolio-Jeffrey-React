import React, { Component } from 'react';
import Rubrique_skill from './Rubrique_skill'

class s_Skill extends Component {
    render() {
        return (
            <section id="skill" className="pl-5">
      
                <h2 className="text-center">Compétences</h2>
                
                <Rubrique_skill data={this.props.data}/>
            </section>
        );
    }
}

export default s_Skill;