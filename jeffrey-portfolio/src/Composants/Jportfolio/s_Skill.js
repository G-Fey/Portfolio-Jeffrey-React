import React, { Component } from 'react';
import Rubrique from './Rubrique';

class s_Skill extends Component {
    render() {
        return (
            <section>
                <Rubrique data={this.props.data}/>
            </section>
        );
    }
}

export default s_Skill;