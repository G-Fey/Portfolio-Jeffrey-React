import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
//TODO: IMPORTER TOUS LES LOGOS 


class Rubrique_Exp extends Component {

    constructor(props) {
        super(props);
      }

    render() {

        let datas = this.props.data

        return (
            
            <div className="d-flex pr-5 mr-5 pl-5 ml-5">
                <Carousel 
                enableAutoPlay ={true}
                autoPlaySpeed={5000}
                >
                {datas.map(data => {
                return(
                    <div key={data.id} className="text-center col-lg-12 p-5">
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
                        <h3>{data.nom_entreprise}</h3> 
                        <h4>{data.poste}</h4>
                        <p className="mt-5">{data.description}</p>
                    </div>
                );})}
                </Carousel>
            
            </div>
    
        );

    }
}

export default Rubrique_Exp;