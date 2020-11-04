import React, { Component } from 'react';
//TODO: IMPORTER TOUS LES LOGOS 


class Rubrique extends Component {

 
    Converttabtolist = (tab) =>{
        let spe="";
        for (let i = 0; i < tab.length; i++) {
            return(
                spe = spe + tab[i]
            );
        }
           
    }
    

    render() {

        let datas = this.props.data

        if(datas){

            return (
                <div className="d-flex p-5 justify-content-around">
                    {datas.map(data => {
                    return(
                        <div key={data.id}> 
                            <div>
                                <img src={data.nom_logo} alt={data.nom_logo} className="rounded-circle"></img>
                                <span>{data.nom_logo}</span>

                            </div>
                            
                            <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width:data.mastery}} aria-valuenow={data.mastery} aria-valuemin="0" aria-valuemax="100"></div>
                            </div><p>{data.mastery}</p>
                        </div>
                    );})}
                
                </div>
            );

        }else{

            return (
                <div>
                   
                </div>
            );

        }
    }
}

export default Rubrique;