import React, { useState } from 'react'
import styles from "./Styles/TweetStyles.module.css"

import TextBox from './TextBox'
import Button from './Button'


const Container = () => {
    const [tweet, setTweet] = useState("")

    // const makeTweet = (e) => {
    //     if (e.key === "Enter") {

    //     }
    // }

  return (
    <div className={styles.Container}>
        <TextBox tweet={tweet} setTweet={setTweet} />
        <Button tweet={tweet} />
    </div>
  )
}

export default Container