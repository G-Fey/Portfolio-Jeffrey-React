import React from 'react';
import './../../scss/Home.scss';
import { Link} from "react-scroll";
import { FullPage, Slide } from 'react-full-page';
import Fade  from 'react-reveal/Fade';
import LogoGFey from './LogoGFey.js'
import Contact from '../Jportfolio/Contact';
import { motion} from "framer-motion"
import { useSpring, animated } from 'react-spring'
import Lottie from 'react-lottie'
import animationkeyperso from '../../img/animation/keyperso.json'
import shine from '../../img/animation/shine.json'
import travaux from '../../img/animation/projet.json'

//parallax
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
// const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const Home = () => {

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    return (
        <section
        className="home">
            <FullPage className="principeslide">

                <Slide className="principeslide">
                    <article className="debutpage container-fluide" id="accueil">
                        <div className="p-lg-5 ml-lg-5" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}> 

                            <animated.div style={{ transform: props.xy.interpolate(trans1) }}>
                                <Fade left cascade>
                                    <h1 className="pt-5 pl-3 p-lg-0">Jeffrey <br className="d-block d-lg-none"/> ANAVILLELA</h1>
                                    <h3 className="p-3 ">Aka G-Fey</h3>
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
                                        <div className="col-lg-4 col-9 textpres">
                                            <h3>Développeur Web, Designer Web, Illustrateur, Monteur vidéo, VFX, Technicien informatique</h3>  
                                        </div>
                                    </Fade>
                                </animated.div>

                                <animated.div class="d-none d-lg-block " style={{ transform: props.xy.interpolate(trans4) }}>
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
                </Slide>

                <Slide className="principeslide">
                    <article id="A_propos" className=" d-flex align-items-center pl-0 pl-lg-5">
                        <div className="col-lg-5 pl-lg-5 col-12">
                            <Fade left cascade>
                                <div>
                                    <h2>À Propos de Moi</h2>
                                    <p>J'aime tout ce qui a un rapport avec le domaine de la création (Illustration, Montage, Animation, 3D, Développement...).</p>
                                
                                    <motion.button
                                    drag
                                    dragConstraints={{ left: 0, right: 0, top:0, bottom:0 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }} 
                                    className="b m-lg-5"  
                                    onClick={()=>window.location.href='/Aboutme'}><span>Voir plus !!</span></motion.button>
                                    
                                </div>
                            </Fade>
                        </div>
                        
                        <button onClick={()=>window.location.href='/Aboutme'} className="col-lg-7 animation">
                            <div >
                                <svg className="lune" viewBox="0 0 100 100" fill="#EBEFFF" xmlns="http://www.w3.org/2000/svg">
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
                        </button>
                    </article>
                </Slide>

                <Slide className="principeslide">
                    <article id="portfolio" className=" d-flex align-items-center pl-0 pl-lg-5">
                        <Fade left cascade><div className="col-lg-4 pl-lg-5">
                            <h2>Mes Projets</h2>
                            <p>Ici, vous pourrez voir toutes mes créations cliquez en bas pour voir.</p>
                            <motion.button
                            drag
                            dragConstraints={{ left: 0, right: 0, top:0, bottom:0 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} 
                            className="b m-lg-5" 
                            onClick={()=>window.location.href='/Project'}><span>Voir plus !!</span></motion.button>
                        </div></Fade>

                        <button onClick={()=>window.location.href='/Project'} className="travaux">
                            <div>
                                <Lottie 
                                    options={{
                                        loop: true,
                                        autoplay: true, 
                                        animationData:travaux,
                                        rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice'
                                        }}
                                    }
                                />
                            </div>
                        </button>
                    </article>  
                </Slide>

                <Slide className="principeslide">
                    <Contact/>
                </Slide>
                
            </FullPage>   
        </section>
    );
}

export default Home;