import React from 'react';
import Rubrique_CI from './Rubrique_CI'


const Center_I = (props) => {

    let datas = props.data

    return (
        <section id="centre_i">
            <h2 className="text-center p-5">Centres d'Intérêt</h2>
            
            <div className="d-flex flex-wrap p-5">
                {datas.map(data => {
                return(
                    <Rubrique_CI
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