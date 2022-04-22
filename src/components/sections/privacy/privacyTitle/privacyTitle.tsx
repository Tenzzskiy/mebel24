import React from 'react';
import styles from './privacyTitle.module.scss'

const PrivacyTitle = ({title,id}:any) => {
    return (
        <div id={id} className={styles.title}>
            {title}
        </div>
    );
};

export default PrivacyTitle;