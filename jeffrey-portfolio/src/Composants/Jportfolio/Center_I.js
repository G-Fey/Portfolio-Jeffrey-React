import React from 'react';
import RubriqueCI from './Rubrique_CI'


const Center_I = (props) => {

    let datas = props.data

    return (
        <section id="centre_i">
            <h2 className="text-center p-lg-5 pt-5">Centres d'Intérêt</h2>
            
            <div className="d-flex flex-wrap p-lg-5">
                {datas.map(data => {
                return(
                    <RubriqueCI
                    key={data.id}
                    lien_logo={data.lien_logo}
                    nom_logo={data.nom_logo}
                    nom={data.nom}
                    description={data.description}
                    />
                );})}
            </div>
        </section>
    );
}

export default Center_I;