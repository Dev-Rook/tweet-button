import React from "react";
import styles from "./Styles/TweetStyles.module.css";

const Button = ({tweet}) => {
  return (
    <a
      href={`https://twitter.com/intent/tweet?text=${tweet}`}
      target="_blank"
      rel="noopener noreferrer*"
      className="TweetLink"
    >
      <button type="submit" className={styles.TweetButton}>
        <p className={styles.ButtonText}>Tweet</p>
      </button>
    </a>
  );
};

export default Button;
