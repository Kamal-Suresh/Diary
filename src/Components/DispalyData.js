import React from "react";
import styles from "../Style/Style.module.css"

function Dispalydata(props) {
    
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.memoryHeading}>Memory - {props.id}</h2>
        <div className={styles.memoryContainer}>
          <img className={styles.image} src={props.img} alt="" />
          <p className={styles.memory}>{props.memory}</p>
          <div className={styles.removeButton}>
            <button onClick={props.removeMemory}>✖</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dispalydata;
