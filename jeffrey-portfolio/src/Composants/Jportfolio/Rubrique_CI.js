import React from 'react';
//TODO: IMPORTER TOUS LES LOGOS 


const Rubrique_CI = (props) => {


    let data = props

    return (
        
        <div key={data.id} className="text-center col-lg-4 p-5">
            <div  className="d-flex justify-content-center">
                <div    className=" m-2"
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
            <h3>{data.nom}</h3>
            <p>{data.description}</p>
        </div>
            
    );

}

export default Rubrique_CI;