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
            <div  className="d-flex justify-content-center ">
                <motion.div className=" m-2 d-flex align-items-center"
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={{
                    visible:{ opacity:1, scale:1},
                    hidden:{ opacity:0, scale:0}
                    }}
                    style={{height: "20em"}}
                >
                    <img 
                      style={{width: 250}}
                        src={data.lien_logo} 
                        alt={data.nom} >
                    </img>
                </motion.div>
            </div> 
            <h3>{data.nom}</h3>
            <p>{data.description}</p>
        </div>
            
    );

}

export default Rubrique_CI;