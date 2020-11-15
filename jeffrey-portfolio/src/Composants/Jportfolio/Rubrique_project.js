import React, {useState, useEffect} from 'react';
import Content from './Content'
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import './../../scss/Project.scss';
import { useInView } from "react-intersection-observer";

const Rubrique_project = (props) =>{

    const controls = useAnimation();
    const [ref, inView] = useInView();
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    let donne = props.data.item

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        }, [controls, inView]);

    return (
        <motion.div ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
           visible:{ opacity:1, scale:1},
           hidden:{ opacity:0, scale:0}
        }}
        transition={{duration:"1"}} 
        className="project p-3">

            <motion.li layout onClick={toggleOpen} className="card-deck ">
                <motion.div layout >
                    <img className="" src={donne.source} alt={donne.titre}></img>
                </motion.div>
                <AnimatePresence>{isOpen && <Content titre={donne.titre} link={donne.link} category={donne.category} desciption={donne.desciption} />}</AnimatePresence>
            </motion.li>

        </motion.div>
    );
}
 
export default Rubrique_project;
