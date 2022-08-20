import React from "react";
import styles from "./Styles/TweetStyles.module.css";

import Button from "./Button";

const TextBox = ({ tweet, setTweet }) => {
  return (
    <textarea
      placeholder="What Happening?"
      autoFocus
      name=""
      id=""
      cols="30"
      rows="10"
      value={tweet}
      className={styles.TextBox}
      onChange={(e) => setTweet(e.target.value)}
    ></textarea>
  );
};

export default TextBox;
