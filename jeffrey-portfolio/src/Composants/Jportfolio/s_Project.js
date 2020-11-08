import React from 'react';
import Rubrique_project from './Rubrique_project'
import Datajson from '../../data/data_portfolio.json'
import { motion } from "framer-motion"

const s_Project = () => {

        let datas = Datajson.Project

        return (
            <section id="projects" className="ml-5 pl-5">
                <h2 className="pl-5">Projets (Portfolio) </h2>

                <div className="d-flex flex-wrap p-5">
                    {datas.map(data => {
                    return(
                        <Rubrique_project 
                            key={data.id} 
                            link={data.link}
                            image={data.image}
                            title={data.titre}
                            category={data.category}
                            
                        />
                    );})}
                </div>
            </section>
        );

}

export default s_Project;