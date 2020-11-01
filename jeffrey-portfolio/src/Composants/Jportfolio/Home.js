import React, { Component } from 'react';
import './../../scss/Home.scss';
import logo from './../../img/logo_G-Fey.png'

class Home extends Component {
    render() {
        return (
            <section className="home">

                <article className="debutpage  container-fluide">
                    <div className="p-5 ml-5" id="parallax">
                        <h1 >Jeffrey ANAVILLELA</h1>
                        <h3 className="pb-3">Aka G-Fey</h3>
                        <img className="logo" src={logo} alt="logo"></img>

                        <div className="d-flex">
                            <div className="col-lg-4 col-12">
                                <h3>Développeur Web, Designer Web, Illustrateur, Monteur vidéo, VFX, Technicien informatique</h3>  
                            </div>
                        
                            <div className="box-2 d-flex justify-content-center">
                                <a className="btn btn-two" href="#">
                                    <svg className="play ml-5 pb-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                        <polygon points="25 15, 50 50, 0 50"/>
                                    </svg>
                                    <span>START</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="A_propos">
                    <div className="p-5 ml-5 row align-items-center">

                        <div className="col-lg-6">
                            <h2>A propos de moi</h2>
                            <p>J'aime tous ce qui à un rapport avec le domaine de la création</p>
                        </div>
                        <div className="col-lg-6">
                            <img></img>
                        </div>

                    </div>
                </article>

                <article className="portfolio">
                    <div className="p-5 ml-5">
                        <h2>Mes Projets</h2>
                    </div>
                </article>
                
            </section>
        );
    }
}

export default Home;