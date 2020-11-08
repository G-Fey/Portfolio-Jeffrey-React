import React, { Component } from 'react';
//TODO: IMPORTER TOUS LES LOGOS 


class Rubrique_skill extends Component {

    render() {

        let data = this.props

        return (

            <div className="text-center col-lg-4 p-5">
                <div  className="d-flex justify-content-center">
                    <div    className="rounded-circle m-2"
                            style={{
                                height:250, 
                                width: 250,
                                background:"#2ECC71"
                                }}
                    >      {/* TODO: logo compétence */}
                        <img 
                            src={data.nom_logo} 
                            alt={data.nom_logo} >
                        </img>
                    </div>
                </div> 
                <p>{data.nom_logo}</p>
                
                <div className="progress mt-2">
                    <div className="progress-bar" role="progressbar" style={{width:data.mastery}} aria-valuenow={data.mastery} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-2">{data.mastery}</p>
            </div>
        )
        
    }
}

export default Rubrique_skill;