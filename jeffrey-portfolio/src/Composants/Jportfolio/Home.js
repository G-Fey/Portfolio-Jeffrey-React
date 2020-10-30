import React, { Component } from 'react';
import './../../scss/Home.scss';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

class home extends Component {
    render() {
        return (
            <section>
                <h1>Jeffrey ANAVILLELA</h1>
                <h2>Aka G-Fey</h2>
                <h2>Développeur Web, Designer Web, Illustrateur, Monteur vidéo, FX, Technicien informatique</h2>
                <div>
                    <a className="btn btn-lg btn-gradient flat linkedin" href="https://www.linkedin.com/in/jeffrey-anavillela-202398153/" target="blank" role="button"><div className="taille"><FaLinkedinIn color="white" size="0.8em"/></div></a>
                    <a className="btn btn-lg btn-gradient flat git" href="https://github.com/J-Striker" target="blank" role="button"><div className="taille"><FaGithub color="white" size="0.8em" /></div></a>
                    <a className="btn btn-lg btn-gradient flat mail" href="mailto:janavillela@laposte.net" role="button"><div className="taille"><GrMail color="white" size="0.8em"/></div></a>
                    <a className="btn btn-lg btn-gradient flat face" href="https://www.facebook.com/jeffrey.anavillela" target="blank" role="button"><div className="taille"><FaFacebookF color="white" size="0.8em"/></div></a>
                </div> 
                <button>
                    Start
                </button>
                <svg>

                </svg>
            </section>
        );
    }
}

export default home;