import React, { Component } from 'react';
import Rubrique from './Rubrique';

class Center_I extends Component {
    render() {
        return (
            <section>
              <Rubrique data={this.props.data}/>  
            </section>
        );
    }
}

export default Center_I;