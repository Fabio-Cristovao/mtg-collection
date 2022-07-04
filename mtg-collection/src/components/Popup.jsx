import React from 'react';
import styles from '../css/index.css';



export default function Popup() {
   return (
      <div id="popup1" styles={styles.modal}>
         <div className={styles.popup}>
            <h2>Here i am</h2>
            <div className={styles.content}>
               Thank to pop me out of that button, but now i'm done so you can close this window.
            </div>
         </div>
      </div>
   )
}

