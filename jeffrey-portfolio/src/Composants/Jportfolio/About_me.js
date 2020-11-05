import React, { Component } from 'react';
import SkillSection from '../Jportfolio/s_Skill';
import ExperienceSection from '../Jportfolio/s_Experience';
import CentreI from '../Jportfolio/Center_I';
import Datajson from '../../data/data_portfolio.json'

class About_me extends Component{
    render() {

        return (
            <div>
                <section id="moi">
                    <div className="jumbotron pl-5">
                        <div className="pl-5 row">
                            <h2 className="text-center">Et oui c'est moi <span>G-Fey</span>, euh... Jeffrey </h2>

                            <div className="col-lg-6 p-5 d-flex align-items-center">
                                <div>
                                    <p>Je m'appelle <span>Jeffrey ANAVILLELA</span>. Je suis née sur l'ile de la Réunion en 1995.</p>

                                    <p>
                                        J'aime découvrire de <span>nouvelle culture et connaissance</span>. D'ailleur en ce qui concerne mes connaissance et mes compétences je suis assez polyvalent dans <span>le domaine de la
                                        création</span>, grâce a mes passion et mes études qui sont centrer principalement autour de ce thème.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 p-5 text-center">
                                {/* TODO: Photo profil */}
                                <img className="rounded-circle" src=""
                                style={{
                                    height:400, 
                                    width: 400,
                                    background:"#2ECC71"
                                    }}></img>
                            </div>
                        </div>
                    </div>

                </section>

                <SkillSection data={Datajson.Skill}/>
                <ExperienceSection data={Datajson.Experience}/>
                <CentreI data={Datajson.Center_I}/>

            </div>
        );
    }
}

export default About_me;