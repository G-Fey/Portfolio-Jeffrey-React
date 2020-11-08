import React, { Component } from 'react';
import Rubrique_Exp from './Rubrique_Exp';

class s_Experience extends Component {
    render() {

        let datas = this.props.data

        return (
            <section id="exp">

                 <h2 className="text-center p-5">Expériences</h2>
                
                 <Rubrique_Exp data={datas}/>
            </section>
        );
    }
}

export default s_Experience;