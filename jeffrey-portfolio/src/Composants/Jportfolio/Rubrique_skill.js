import React, { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
//TODO: IMPORTER TOUS LES LOGOS 


const Rubrique_skill = (props) => {

    let data = props
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
    if (inView) {
        controls.start("visible");
    }
    }, [controls, inView]);

    return (

        <div className="text-center col-lg-4 p-5">
            <div  className="d-flex justify-content-center">
                <motion.div className="rounded-circle m-2"
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                    visible:{ opacity:1, scale:1},
                    hidden:{ opacity:0, scale:0}
                    }}
                    style={{
                        height:250, 
                        width: 250,
                        background:"#2ECC71"
                        }}
                >      {/* TODO: logo compétence */}
                    <img 
                        src={data.nom_logo} 
                        alt={data.nom_logo} >
                    </img>
                </motion.div>
            </div> 
            <p>{data.nom_logo}</p>
            
            <div className="progress mt-2">
                <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={{
                   visible:{ opacity:1, width:data.mastery},
                   hidden:{ opacity:0, width:0}
                }}
                transition={{duration:1}}  

                className="progress-bar" 
                role="progressbar" 
                aria-valuenow={data.mastery} 
                aria-valuemin="0" 
                aria-valuemax="100"></motion.div>
            </div>
            <p className="mt-2">{data.mastery}</p>
        </div>
    )
}

export default Rubrique_skill;