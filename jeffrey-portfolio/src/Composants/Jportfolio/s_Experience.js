import React from 'react';
import RubriqueExp from './Rubrique_Exp';

const sExperience = (props) => {

    let datas = props.data

    return (
        <section id="exp">

                <h2 className="text-center p-lg-5">Expériences</h2>
            
                <RubriqueExp data={datas}/>
        </section>
    );
}

export default sExperience;