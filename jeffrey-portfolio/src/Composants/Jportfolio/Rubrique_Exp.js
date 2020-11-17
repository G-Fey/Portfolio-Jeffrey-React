import React from 'react';
import Carousel from 'react-elastic-carousel';


const Rubrique_Exp = (props) =>{
   
    let datas = props.data

    return (
        
        <div className="d-flex pr-lg-5 mr-lg-5 pl-lg-5 ml-lg-5">
            <Carousel 
                enableAutoPlay ={true}
                autoPlaySpeed={7000}
                >
                {datas.map(data => {
                    return(
                        <div key={data.id} className="text-center col-lg-12 p-lg-5">
                            <div  className="d-flex justify-content-center align-items-center" >
                                <div>
                                    <img className="m-2"
                                        style={{width: "15em"}}
                                        src={data.source} 
                                        alt={data.nom_entreprise}>
                                    </img>
                                </div>
                            </div>
                            <h3>{data.nom_entreprise}</h3> 
                            <h4>{data.poste}</h4>
                            <p className="mt-5">{data.description}</p>
                        </div>
                    )}
                )}
            </Carousel>
        
        </div>

    );

}

export default Rubrique_Exp;