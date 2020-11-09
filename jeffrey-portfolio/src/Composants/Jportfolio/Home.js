import React from 'react';
import './../../scss/Home.scss';
import { Link} from "react-scroll";
import Fade  from 'react-reveal/Fade';
import LogoGFey from './LogoGFey.js'
import { motion} from "framer-motion"


const Home = () => {



    return (
        <section
        className="home">

            <article className="debutpage  container-fluide" id="accueil">
                <div className="p-5 ml-5" id="parallax">  
                    <Fade left cascade><h1 >Jeffrey ANAVILLELA</h1>
                    <h3 className="pb-3">Aka G-Fey</h3></Fade>
                   
                    <Fade left><LogoGFey className="logo"></LogoGFey></Fade>
                   
                    <div className="d-flex">
                        <Fade left cascade>
                        <div className="col-lg-4 col-12">
                            <h3>Développeur Web, Designer Web, Illustrateur, Monteur vidéo, VFX, Technicien informatique</h3>  
                        </div>
                       
                        </Fade>
                        <Fade right cascade>
                        <div className="box-2 d-flex justify-content-center">
                            <Link
                                activeClass="active"
                                to="A_propos"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                >
                                <div className="btn btn-two">
                                    <svg className="play ml-5 pb-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                        <polygon points="25 15, 50 50, 0 50"/>
                                    </svg>
                                    <span>START</span>
                                </div>
                            </Link>
                        </div></Fade>
                    </div>
                </div>
            </article>

            <article id="A_propos" className=" d-flex align-items-center ">
            <Fade left cascade><div className="col-lg-6 pl-5">
                    <h2>A Propos de Moi</h2>
                    <p>J'aime tous ce qui à un rapport avec le domaine de la création (Illustration, Montage, Animation, 3D, Développement...)</p>
                   
                    <motion.button
                       drag
                       dragConstraints={{ left: 0, right: 0, top:0, bottom:0 }}
                       whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.9 }} 
                       className="b m-5"  
                       onClick={()=>window.location.href='/Aboutme'}><span>Voir plus !!</span></motion.button>
                    
                </div></Fade>
                <div className="col-lg-6">
                    <img></img>
                </div>
            </article>

            <article id="portfolio" className=" d-flex align-items-center ">
            <Fade left cascade><div className="col-lg-5 pl-5">
                    <h2>Mes Projets</h2>
                    <p>Ici vous pourrez voir toutes mes créations cliquez en bas pour voir</p>
                    <motion.button
                       drag
                       dragConstraints={{ left: 0, right: 0, top:0, bottom:0 }}
                       whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.9 }} 
                       className="b m-5" 
                       onClick={()=>window.location.href='/Project'}><span>Voir plus !!</span></motion.button>
                </div></Fade>
            </article>
            
        </section>
    );
}

export default Home;