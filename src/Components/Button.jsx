import React from "react";
import { motion } from "framer-motion";
import styles from "./Styles/TweetStyles.module.css";

const buttonVariants = {
  hidden: {
    opacity: 0,
    x: "100vw"
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
        duration: 0.6,
        ease: "easeInOut",
        delay: .4,
    },
  },
};

const Button = ({ tweet }) => {
  return (
    <motion.a
      href={`https://twitter.com/intent/tweet?text=${tweet}`}
      target="_blank"
      rel="noopener noreferrer*"
      className="TweetLink"
    >
      <motion.button
        type="submit"
        className={styles.TweetButton}
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
      >
        <p className={styles.ButtonText}>Tweet</p>
      </motion.button>
    </motion.a>
  );
};

export default Button;
