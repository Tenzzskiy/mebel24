import React, {useContext} from 'react';
import { LOCALHOST } from '../../../graphql/consstants';
import styles from "../../pages/mainPage/mainPage.module.scss";
import {SEOContext} from "../../../context/context";

const Header = ({mainImg}:any) => {
    const data:any = useContext(SEOContext);
    return (
        <>
            <div className={styles.content}>
                <div className={styles.item1}> </div>
                <div className={styles.item2}> </div>
                <img className={styles.img} src={mainImg ? LOCALHOST + mainImg : "/images/mainPage/1.jpg"} alt={data.title}/>
                <div className={styles.description}>
                    <h1>{data.title}</h1>
                    <div className={styles.text}>{data.description}</div>
                </div>
            </div>
        </>
    );
};

export default Header;