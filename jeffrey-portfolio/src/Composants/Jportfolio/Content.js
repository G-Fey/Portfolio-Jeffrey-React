import React from 'react';
import { motion} from "framer-motion";

const Content = (props) => {
    let data = props
    console.log(data);

    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="card-body cartebody"
      >
        <h3>{data.titre}</h3>        
        <a href={data.link} target='_blank' rel="noreferrer"><p>{data.link}</p></a>
        <p>{data.desciption}</p>
        <p>{data.category}</p>
      </motion.div>
    );
}

export default Content;
