import React from 'react';
import styles from './FlagElement.module.scss'
import Flag from "../Flag/Flag";


const FlagElement = ({text='',id}:any) => {
    return (
        <div className={styles.flagElement}>
            <div className={styles.flex}>
            <div className={styles.ribbon}> <Flag id={id} /></div>
                <div className={styles.text}>{text}</div>
            </div>
        </div>
    );
};

export default FlagElement;