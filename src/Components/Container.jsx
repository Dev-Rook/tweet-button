import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from "./Styles/TweetStyles.module.css"

import TextBox from './TextBox'
import Button from './Button'


const containerVariants = {
    hidden: {
        opacity: 0,
        scale: 0,
    },

    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: .6,
            ease: "easeInOut"
        }
    }
}


const Container = () => {
    const [tweet, setTweet] = useState("")

    // const makeTweet = (e) => {
    //     if (e.key === "Enter") {

    //     }
    // }

  return (
    <motion.div className={styles.Container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
        <TextBox tweet={tweet} setTweet={setTweet} />
        <Button tweet={tweet} />
    </motion.div>
  )
}

export default Container