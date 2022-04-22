import React from 'react';
import styles from './ElseButton.module.scss'
interface Props  {
    title:string;
}


const ElseButton = ({title}:Props) => {
    return (
        <div className={styles.else}>
        <button>
            {title}
        </button>
        </div>
    );
};

export default ElseButton;