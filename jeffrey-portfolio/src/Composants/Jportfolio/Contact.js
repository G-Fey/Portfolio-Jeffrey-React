import React, { Component } from 'react';
import './../../scss/Contact.scss';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

class Contact extends Component {

    hoverchange = (e) =>{
        let  style = e.target.style;
        console.log(style);

    };
    
    render() {
        return (
            <section id="Contact" className=" d-flex align-items-center ">
                <div className="col-lg-4">
                        <h2>Me Contacter</h2>
                        <a className="maillet" href="mailto:gfey.art@gmail.com" role="button"><p>gfey.art@gmail.com</p></a>

                        <div className="lienbut d-flex">
                            <a className="" href="https://www.linkedin.com/in/jeffrey-anavillela-202398153/" target="blank" role="button"><div className="taille"><FaLinkedinIn color="white" size="2em" onMouseOver={hoverchange}/></div></a>
                            <a className="" href="https://github.com/J-Striker" target="blank" role="button"><div className="taille"><FaGithub color="white" size="2em" onMouseOver={hoverchange}/></div></a>
                            <a className="" href="https://www.facebook.com/jeffrey.anavillela" target="blank" role="button"><div className="taille"><FaFacebookF color="white" size="2em" onMouseOver={hoverchange}/></div></a>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Contact;