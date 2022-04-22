import React from 'react';
import styles from './ModalDescription.module.scss'
const ModalDescription = ({text}:any) => {
    return (
        <>
            <p className={styles.text}>{text}</p>
        </>
    );
};

export default ModalDescription;