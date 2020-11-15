import React from 'react';
import Rubrique_project from './Rubrique_project';
import Galeryphoto from './Galeryphoto';
import Datajson from '../../data/data_portfolio.json';
import { motion, AnimateSharedLayout} from "framer-motion";


const S_Project = () => {

    const website = Datajson.Project
    const illustration = Datajson.Illustration

    return (
        <section id="projects" className="ml-5 pl-5">
            <h2 className="pl-5 text-center">Projets (Portfolio) </h2>

            <article className="section p-5">
                <h3 className="p-5 text-center">Web</h3>
                <AnimateSharedLayout >
                <motion.ul layout initial={{ borderRadius: 25 }} className="d-flex justify-content-center">
                    {website.map(item => (
                    <Rubrique_project key={item.id} data={{item}}/>
                    ))}
                </motion.ul>
                </AnimateSharedLayout>
            </article>

            <article className="section">
                <h3 className="p-5 text-center">Illustrations</h3>
                <div className="container">
                    <Galeryphoto data ={{illustration}}></Galeryphoto>
                </div>
            </article>
 
        </section>
    );

}

export default S_Project;