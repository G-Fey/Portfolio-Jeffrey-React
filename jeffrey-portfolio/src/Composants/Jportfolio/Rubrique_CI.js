import React, { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
//TODO: IMPORTER TOUS LES LOGOS 


const Rubrique_CI = (props) => {

    let data = props
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
    if (inView) {
        controls.start("visible");
    }
    }, [controls, inView]);
  
    return (
        
        <div key={data.id} className="text-center col-lg-4 p-5">
            <div  className="d-flex justify-content-center">
                <motion.div className=" m-2"
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
            <h3>{data.nom}</h3>
            <p>{data.description}</p>
        </div>
            
    );

}

export default Rubrique_CI;