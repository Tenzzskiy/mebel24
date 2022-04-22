import Link from 'next/link';
import React from 'react';
import styles from './privacyNavButton.module.scss'
const PrivacyNavButton = ({title,index}:any) => {
    return (
        <div className={styles.button} >
                <div className={styles.content}>
                    {title}
                </div>
            </div>

    );
};

export default PrivacyNavButton;