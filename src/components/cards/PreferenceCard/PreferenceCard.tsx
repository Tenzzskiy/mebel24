import React from 'react';
import {Props} from "./PreferenceCard.props";
import styles from './PreferenceCard.module.scss'
import ShowRoom from "../../icons/ShowRoom";
import classNames from "classnames";
import SecondDay from "../../icons/SecondDay";
import SaleForEvents from "../../icons/SaleForEvents";
import Flag from "../../elements/Flag/Flag";


const PreferenceCard = ({description,title,color,id}:Props) => {

    return (
        <>
            <div className={classNames(styles.block, id === 2 ? styles.background2 : id === 3 ? styles.background3 : id === 1 ? styles.background1 : null)}>
                <span >{title} </span>
                <Flag id={id}/>
            </div>
            <div className={classNames(styles.block2, id === 2 ? styles.background2 : id === 3 ? styles.background3 : id === 1 ? styles.background1 : null)}>

               <div className={styles.flex}>
                   <span >{title} </span>
                   <div className={styles.desc}> {description}</div>
               </div>
                <div className={styles.flag}>
                <Flag id={id}/></div>
                <div className={classNames(styles.back, id === 2 ? styles.background2 : id === 3 ? styles.background3 : null)}> </div>
            </div>

        </>
    );
};

export default PreferenceCard;