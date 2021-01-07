import React,{useState} from "react";
import styles from "../Style/Style.module.css"
import ImgModal from "./ImgModal";

function Dispalydata(props) {
     const [open, setOpen] = useState(false); 

     const openImageHandler=()=>{
       setOpen(!open)
     }
     const closeImgHandler=()=>{
       setOpen(!open);
     }

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.memoryHeading}>Memory - {props.id}</h2>
        <div className={styles.memoryContainer}>
          <img
            className={styles.image}
            src={props.img}
            alt=""
            onClick={openImageHandler}
          />
          <ImgModal
            image={props.img}
            open={open}
            closeImgHandler={closeImgHandler}
          />
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
