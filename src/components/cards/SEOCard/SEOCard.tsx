import React from 'react';
import styles from './SEOCard.module.scss'
import classNames from "classnames";

const SeoCard = ({title,text}:any) => {
    return (
        <>
            <div className={styles.text}>
                <div className={styles.title}>
                    {title}
                </div>
                <p className={classNames(styles.p,styles.p2)}>
                    {text}
                </p>

            </div>
        </>
    );
};

export default SeoCard;