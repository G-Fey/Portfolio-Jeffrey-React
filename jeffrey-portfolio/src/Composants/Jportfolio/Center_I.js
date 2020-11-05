import React, { Component } from 'react';
import Rubrique_CI from './Rubrique_CI'


class Center_I extends Component {

    render() {

        return (
            <section id="centre_i">
                <h2 className="text-center p-5">Centres d'Intérêt</h2>
              <Rubrique_CI data={this.props.data}/>
            </section>
        );
    }
}

export default Center_I;