import React, { Component } from 'react';
import './../../scss/Contact.scss';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Contact = () => {

    const hoverchange = event =>{
        let  style = event.target.style;
        style.color = "#9163F2";

    };

    const outchange = event =>{
        let  style = event.target.style;
        style.color = "#FFF";

    };
    
    return (
        <section id="Contact" className=" d-flex align-items-center ">
            <div className="col-lg-5 pl-5">
                <h2>Me Contacter</h2>
                <a className="maillet pt-5" href="mailto:gfey.art@gmail.com" role="button"><p>gfey.art@gmail.com</p></a>

                <div className="pt-5 d-flex">
                    <a className="pr-5 pl-5" href="https://www.linkedin.com/in/jeffrey-anavillela-202398153/" target="blank" role="button"><div className="taille"><FaLinkedinIn color="white" size="2em" onMouseOver={hoverchange} onMouseOut={outchange}/></div></a>
                    <a className="pr-5 pl-5" href="https://github.com/J-Striker" target="blank" role="button"><div className="taille"><FaGithub color="white" size="2em" onMouseOver={hoverchange} onMouseOut={outchange}/></div></a>
                    <a className="pr-5 pl-5" href="https://www.facebook.com/jeffrey.anavillela" target="blank" role="button"><div className="taille"><FaFacebookF color="white" size="2em" onMouseOver={hoverchange} onMouseOut={outchange}/></div></a>
                </div>
            </div>
        </section>
    );
}

export default Contact;