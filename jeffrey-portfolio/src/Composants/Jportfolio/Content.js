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
        className="card-body"
      >
        <h3>{data.category}</h3>
        <h4>{data.titre}</h4>
        <a href={data.link} target='blank'><p>{data.link}</p></a>
        <p>{data.titre}</p>
      </motion.div>
    );
}

export default Content;
