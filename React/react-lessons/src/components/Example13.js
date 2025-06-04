"use client";
import styles from "./Example13.module.css";
export default function UserProfile(){
    return(
        <div>
            <h1 className={styles.h1}>User Proile</h1>
            <p className={styles.name}>Name:koko</p>
            <input className={styles.userInput}/>
        </div>
    );
}