import React from 'react';
import Rubriqueproject from './Rubrique_project';
import Galeryphoto from './Galeryphoto';
import Contact from '../Jportfolio/Contact';
import Datajson from '../../data/data_portfolio.json';
import { motion, AnimateSharedLayout} from "framer-motion";


const S_Project = () => {

    const website = Datajson.Project
    const illustration = Datajson.Illustration

    return (
        <section id="projects" className=" pl-lg-5">
            <h2 className="pl-lg-5 pt-lg-5 pt-5 pb-5 text-center">Projets (Portfolio) </h2>

            <article className="p-lg-5">
                <h3 className="web pb-lg-5 pt-lg-5 text-center">Sur le web</h3>
                <div className="ml-5">
                    <AnimateSharedLayout >
                    <motion.ul layout initial={{ borderRadius: 25 }} className="d-flex justify-content-center flex-wrap">
                        {website.map(item => (
                        <Rubriqueproject key={item.id} data={{item}}/>
                        ))}
                    </motion.ul>
                    </AnimateSharedLayout>
                </div>
            </article>

            <article className="section">
                <h3 className="p-5 text-center">Illustrations</h3>
                <div className="container-fluid d-md-block d-none">
                    <Galeryphoto data ={{illustration}}></Galeryphoto>
                </div>
                <p className="p-5 d-block d-md-none">Ooops pour l'instant les illustrations ne sont pas disponibles dans la version mobile veuillez passer sur Ordinateur ou Tablette pour pouvoir regarder mes illustrations</p>
            </article>

                <Contact/>
         
        </section>
    );

}

export default S_Project;