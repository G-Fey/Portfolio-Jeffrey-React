import React from 'react';
import Rubrique_Exp from './Rubrique_Exp';

const s_Experience = (props) => {

    let datas = props.data

    return (
        <section id="exp">

                <h2 className="text-center p-5">Expériences</h2>
            
                <Rubrique_Exp data={datas}/>
        </section>
    );
}

export default s_Experience;