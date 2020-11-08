import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
//  TODO: impoter le dossier des images

class Rubrique_project extends Component{

    render() {

        let data = this.props

        return (
            <div className="project p-1">
            {/* <Link to={data.link}> */}
                <div className="project-image rounded" style={{
                                height:250, 
                                width: 250,
                                background:"#2ECC71"
                                }}>
                <img src={data.image} alt={data.image}/>
                </div>
                <div className="project-title">{data.titre}</div>
                <div className="project-category">{data.category}</div>
            {/* </Link> */}
            </div>
        );
    }
}
 
export default Rubrique_project;

