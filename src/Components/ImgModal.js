import React from 'react'
import styles from "../Style/Style.module.css"

function Imgmodal(props) {
    const MODAL_STYLES = {
  position: "fixed",
  left:"30%",
  transform: "translate(-50%,-50%)",
  zIndex: 1000,
  height:"500px",
  width:"500px"
};

     if(!props.open) return null
    else{
      return (
        <div className={styles.popupContainer}>
          <div className={styles.overlayy}>
            <img src={props.image} alt="" />
            <button className={styles.closeBtn} onClick={props.closeImgHandler}>
              ✖
            </button>
          </div>
        </div>
      );
    }
    
}


export default Imgmodal