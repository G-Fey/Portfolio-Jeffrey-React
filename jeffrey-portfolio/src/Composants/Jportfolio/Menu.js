import React, { Component } from 'react';
import './../../scss/Menu.scss';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';



class Menu extends Component {

    render() {

        let datas = this.props.data

        if(datas){

            return (

                <nav>
                    {/* TODO recuper les donner des props et les affiches */}
                    {/* <div className="menu">
                        <ul>
                            {  
                                datas.map(data =>
                                {
                                    return(
                                        <li key={data.id}> 
                                            <a href={data.lien_element}><i href={data.icone_element}></i>{data.nom_element}</a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div> */}
                    
                    <div className="navbar">
                        <ul>
                            <li> 
                                <a href="#">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/>
                                    <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                    </svg>
                                    <span>ACCUEIL</span>
                                </a>
                            </li>
                            <li> 
                                <a href="#">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                                    <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                                    </svg>
                                    <span>MOI</span>
                                </a>
                            </li>
                            <li> 
                                <a href="#">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-code-slash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
                                    </svg>
                                    <span>SKILL</span>
                                </a>
                            </li>
                            <li> 
                                <a href="#">
                                    <svg  fill="#FFFFFF" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M128 601.6 128 332.8c0-25.6 12.8-44.8 38.4-44.8l121.6 0C307.2 294.4 320 307.2 320 326.4c0 19.2-12.8 32-32 32L198.4 358.4l0 70.4 76.8 0c19.2 0 32 12.8 38.4 32 0 19.2-12.8 32-38.4 32L198.4 492.8 198.4 576l89.6 0C313.6 576 320 582.4 326.4 608 320 627.2 313.6 640 288 640l-128 0C140.8 640 128 627.2 128 601.6zM339.2 582.4l96-128L358.4 345.6C352 339.2 345.6 332.8 345.6 326.4c0-19.2 12.8-32 38.4-38.4 12.8 0 19.2 6.4 32 19.2l57.6 83.2 64-83.2c12.8-12.8 19.2-19.2 32-19.2 25.6 0 32 12.8 38.4 38.4 0 6.4 0 12.8-6.4 19.2L518.4 454.4l96 128c6.4 6.4 6.4 12.8 6.4 25.6 0 19.2-12.8 32-38.4 32C576 640 563.2 633.6 556.8 627.2L480 518.4 396.8 627.2C390.4 633.6 384 640 364.8 640c-25.6 0-32-12.8-38.4-32C332.8 595.2 332.8 588.8 339.2 582.4zM646.4 608 646.4 332.8c0-25.6 12.8-38.4 38.4-38.4l89.6 0c76.8 6.4 121.6 44.8 121.6 115.2-6.4 70.4-44.8 108.8-121.6 115.2l-51.2 0 0 76.8c0 25.6-12.8 32-38.4 32S652.8 627.2 646.4 608zM723.2 358.4l0 102.4L768 460.8c32 0 44.8-19.2 51.2-51.2 0-32-19.2-51.2-51.2-51.2L723.2 358.4zM992 192 960 192 960 160C960 140.8 947.2 128 928 128S896 140.8 896 160L896 192l-32 0C844.8 192 832 204.8 832 224S844.8 256 864 256L896 256l0 32C896 307.2 908.8 320 928 320S960 307.2 960 288L960 256l32 0C1011.2 256 1024 243.2 1024 224S1011.2 192 992 192zM928 704l-832 0C44.8 704 0 748.8 0 800S44.8 896 96 896l832 0c51.2 0 96-44.8 96-96S979.2 704 928 704zM928 832 640 832l0-64 288 0c19.2 0 32 12.8 32 32S947.2 832 928 832z" /></svg>
                                    <span>EXP</span>
                                </a>
                            </li>
                            <li> 
                                <a href="#">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-joystick" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.106 15.553L.553 12.276A1 1 0 0 1 0 11.382V9.471a1 1 0 0 1 .606-.89L6 6.269v1.088L1 9.5l5.658 2.83a3 3 0 0 0 2.684 0L15 9.5l-5-2.143V6.27l5.394 2.312a1 1 0 0 1 .606.89v1.911a1 1 0 0 1-.553.894l-6.553 3.277a2 2 0 0 1-1.788 0z"/>
                                    <path fill-rule="evenodd" d="M7.5 9.5v-6h1v6h-1z"/>
                                    <path d="M10 9.75c0 .414-.895.75-2 .75s-2-.336-2-.75S6.895 9 8 9s2 .336 2 .75zM10 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                                    </svg>
                                    <span>LOISIR</span>
                                </a>
                            </li>
                            <li> 
                                <a href="#">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-lightning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
                                    </svg>
                                    <span>PROJETS</span>
                                </a>
                            </li>
                            <li> 
                                <a href="#">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-lines-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                    <span>CONTACT</span>
                                </a>
                            </li>
                        </ul>
                        <a className="btn btn-lg btn-gradient flat linkedin" href="https://www.linkedin.com/in/jeffrey-anavillela-202398153/" target="blank" role="button"><div className="taille"><FaLinkedinIn color="white" size="0.8em"/></div></a>
                        <a className="btn btn-lg btn-gradient flat git" href="https://github.com/J-Striker" target="blank" role="button"><div className="taille"><FaGithub color="white" size="0.8em" /></div></a>
                        <a className="btn btn-lg btn-gradient flat mail" href="mailto:gfey.art@gmail.com" role="button"><div className="taille"><GrMail color="white" size="0.8em"/></div></a>
                        <a className="btn btn-lg btn-gradient flat face" href="https://www.facebook.com/jeffrey.anavillela" target="blank" role="button"><div className="taille"><FaFacebookF color="white" size="0.8em"/></div></a>
                    </div>

                    <div class="navbar2 ">
                            {/* TODO navbar version mobile */}
                    </div>

                </nav>
            );

        }else{
            return (
                <nav>
 
                </nav>
            );
        }
    }
}

export default Menu;