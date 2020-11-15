import React from 'react';
import Rubrique_skill from './Rubrique_skill'


const S_Skill = (props) => {

    let datas = props.data

    return (
        <section id="skill" className="pl-5">
    
            <h2 className="text-center">Compétences</h2>

            <div className="d-flex flex-wrap p-5" data-wow-iteration="10">
                {datas.map(data => {
                return(
                    <Rubrique_skill 
                        key={data.id}
                        nom_logo={data.nom_logo} 
                        mastery={data.mastery}
                        source={data.source}
                    />
                );})}
            </div>

        </section>
    );
}

export default S_Skill;