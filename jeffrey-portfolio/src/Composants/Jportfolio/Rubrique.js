import React, { Component } from 'react';

class Rubrique extends Component {
  
    SwitchCase = (datas) =>{
    
        switch(datas[0].objet) {
            case 'skill':
                this.ShowSkill(datas);
                break;
            case 'CI':
                this.ShowCI(datas);
                break;;
            case 'projet':
                this.ShowProject(datas);
                break;;
            default:
            console.log(`for use this template add a new category in JSON file : data_portfolio.json`);
          }
    }

    ShowSkill = (datas) =>{
    
       datas.map(data => {
            return(
                <article key={data.id}> 
                    <img href={data.lien_logo} alt={data.nom_logo}></img>
                </article>
            );
        })
    }

    ShowCI = (datas) =>{
        console.log("voila les centre d'intérêt" + datas)
    }

    ShowProject = (datas) =>{
        console.log("voila les Projet" + datas)
    }

    render() {

        let datas = this.props.data

        if(datas){

            return (
                <div>
                   {this.SwitchCase(datas)}
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