import React, { Component } from 'react';
import './../../scss/Home.scss';

class home extends Component {
    render() {
        return (
            <section className="home container-fluide ">
                <div className="p-5 ml-5">
                    <h1 >Jeffrey ANAVILLELA</h1>
                    <h2 className="pb-3">Aka G-Fey</h2>
                    <h2>Développeur Web, Designer Web, Illustrateur, Monteur vidéo, FX, Technicien informatique</h2>
                    <div class="box-2 d-flex justify-content-center">
                        <div class="btn btn-two">
                            <svg className="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                <polygon points="25 15, 50 50, 0 50"/>
                            </svg>
                            <span>Start</span>
                        </div>
                    </div>
                    <svg>

                    </svg>
                </div>
            </section>
        );
    }
}

export default home;