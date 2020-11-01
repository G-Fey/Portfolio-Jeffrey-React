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
                        <h2 className="pb-3">Aka G-Fey</h2>
                        <img className="logo" src={logo} alt="logo"></img>

                        <div className="d-flex">
                            <div className="col-lg-4 col-12">
                                <h2>Développeur Web, Designer Web, Illustrateur, Monteur vidéo, VFX, Technicien informatique</h2>  
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
                
            </section>
        );
    }
}

export default Home;