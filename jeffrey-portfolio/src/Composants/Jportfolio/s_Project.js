import React, { Component } from 'react';
import Rubrique from './Rubrique';
import Datajson from '../../data/data_portfolio.json'

class s_Project extends Component {
    render() {
        return (
            <section>
                <Rubrique data={Datajson.data}/>
            </section>
        );
    }
}

export default s_Project;