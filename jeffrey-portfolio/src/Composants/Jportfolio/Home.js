import React from 'react';
import './../../scss/Home.scss';
import { Link} from "react-scroll";
import Fade  from 'react-reveal/Fade';
import LogoGFey from './LogoGFey.js'
import { motion} from "framer-motion"
import { useSpring, animated } from 'react-spring'
import Lottie from 'react-lottie'
import animationkeyperso from '../../img/animation/keyperso.json'
import shine from '../../img/animation/shine.json'

//parallax
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const Home = () => {

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData:animationkeyperso,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <section
        className="home">

            <article className="debutpage  container-fluide" id="accueil">
                <div className="p-5 ml-5" id="parallax" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}> 

                    <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
                        <Fade left cascade>
                            <h1 >Jeffrey ANAVILLELA</h1>
                            <h3 className="pb-3">Aka G-Fey</h3>
                        </Fade>
                    </animated.div>

                    <animated.div style={{ transform: props.xy.interpolate(trans2) }}>
                        <Fade left>
                            <LogoGFey className="logo"></LogoGFey>
                        </Fade>
                    </animated.div>

                    <div className="d-flex">

                        <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
                            <Fade left cascade>
                                <div className="col-lg-4 col-12">
                                    <h3>Développeur Web, Designer Web, Illustrateur, Monteur vidéo, VFX, Technicien informatique</h3>  
                                </div>
                            </Fade>
                        </animated.div>

                        <animated.div style={{ transform: props.xy.interpolate(trans4) }}>
                            <Fade right cascade>
                                <div className="box-2 d-flex justify-content-center start">
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
                            </Fade>
                        </animated.div>
                    </div>
                </div>
            </article>

            <article id="A_propos" className=" d-flex align-items-center ">
                <div className="col-lg-5 pl-5">
                    <Fade left cascade>
                        <div>
                            <h2>A Propos de Moi</h2>
                            <p>J'aime tous ce qui à un rapport avec le domaine de la création (Illustration, Montage, Animation, 3D, Développement...)</p>
                        
                            <motion.button
                            drag
                            dragConstraints={{ left: 0, right: 0, top:0, bottom:0 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} 
                            className="b m-5"  
                            onClick={()=>window.location.href='/Aboutme'}><span>Voir plus !!</span></motion.button>
                            
                        </div>
                    </Fade>
                </div>
                <div className="col-lg-7 animation">

                    <svg className="lune" viewBox="0 0 100 100" fill="#ffff" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="45" cy="45" r="45"/>
                    </svg>

                    <div  className="animemoi">
                        <Lottie 
                            options={{
                                loop: true,
                                autoplay: true, 
                                animationData:animationkeyperso,
                                rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                                }}
                            }
                        />
                    </div>

                    <div className="animeshine">
                        <Lottie 
                            options={{
                                loop: true,
                                autoplay: true, 
                                animationData:shine,
                                rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                                }}
                            }
                         />
                    </div>

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