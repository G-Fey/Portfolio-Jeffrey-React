import React, { Component } from 'react';
import Rubrique_Exp from './Rubrique_Exp';

class s_Experience extends Component {
    render() {
        return (
            <section id="exp">

                 <h2 className="text-center p-5">Expériences</h2>
                
                 <Rubrique_Exp data={this.props.data}/>
            </section>
        );
    }
}

export default s_Experience;