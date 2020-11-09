import React, {useState} from 'react';
import Rubrique_project from './Rubrique_project'
import Datajson from '../../data/data_portfolio.json'
import { motion, AnimatePresence, AnimateSharedLayout} from "framer-motion"

const S_Project = () => {

        // let datas = Datajson.Project
        const [selectedId, setSelectedId] = useState(false)

        return (
            <section id="projects" className="ml-5 pl-5">
                <h2 className="pl-5">Projets (Portfolio) </h2>

                {/* <div className="d-flex flex-wrap p-5">
                    {datas.map(data => {
                    return(
                        <Rubrique_project 
                            key={data.id} 
                            link={data.link}
                            image={data.image}
                            title={data.titre}
                            category={data.category}
                            
                        />
                    );})}
                </div> */}

                
                
                <AnimateSharedLayout type="crossfade">

                    <motion.div  
                      initial={{
                        opacity:1
                    }}
                    animate={{
                        opacity:1
                    }}
                    exit={{
                        opacity:1
                    }}
                    onClick={() => setSelectedId("1")}>

                    <motion.h5>test1</motion.h5>
                    <motion.h2>ok</motion.h2>
                    </motion.div>
      
                <AnimatePresence>
                    {selectedId && (
                    <motion.div 
                    initial={{
                        opacity:0,
                    }}
                    animate={{
                        opacity:1,
                    }}
                    exit={{
                        opacity:0
                    }}
                    >
                    <>
                        <motion.h5>test1</motion.h5>
                        <motion.h2>ok</motion.h2>
                        <motion.button onClick={() => setSelectedId(false)} />
                    </>
                    </motion.div>
                    )}
                </AnimatePresence>
                </AnimateSharedLayout>

            </section>
        );

}

export default S_Project;