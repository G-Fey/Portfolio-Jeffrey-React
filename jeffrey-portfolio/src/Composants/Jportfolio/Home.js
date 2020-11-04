import React, { Component } from 'react';
import './../../scss/Home.scss';
import logo from './../../img/logo_G-Fey.png'
import { Link, animateScroll as scroll } from "react-scroll";

class Home extends Component {

 

    render() {
        return (
            <section className="home">

                <article className="debutpage  container-fluide" id="accueil">
                    <div className="p-5 ml-5" id="parallax">
                        <h1 >Jeffrey ANAVILLELA</h1>
                        <h3 className="pb-3">Aka G-Fey</h3>
                        <img className="logo" src={logo} alt="logo"></img>

                        <div className="d-flex">
                            <div className="col-lg-4 col-12">
                                <h3>Développeur Web, Designer Web, Illustrateur, Monteur vidéo, VFX, Technicien informatique</h3>  
                            </div>
                        
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
                            </div>
                        </div>
                    </div>
                </article>

                <article id="A_propos" className=" d-flex align-items-center ">
                    <div className="col-lg-6 pl-5">
                        <h2>A Propos de Moi</h2>
                        <p>J'aime tous ce qui à un rapport avec le domaine de la création (Illustration, Montage, Animation, 3D, Développement...)</p>
                        <button className="b m-5"  onClick={()=>window.location.href='/Aboutme'}><span>Voir plus !!</span></button>
                    </div>
                    <div className="col-lg-6">
                        <img></img>
                    </div>
                </article>

                <article id="portfolio" className=" d-flex align-items-center ">
                    <div className="col-lg-5 pl-5">
                        <h2>Mes Projets</h2>
                        <p>Ici vous pourrez voir toutes mes créations cliquez en bas pour voir</p>
                        <button className="b m-5" onClick={()=>window.location.href='/Project'}><span>Voir plus !!</span></button>
                    </div>
                </article>
                
            </section>
        );
    }
}

export default Home;