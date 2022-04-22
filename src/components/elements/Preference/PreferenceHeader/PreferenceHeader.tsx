import React from 'react';
import styles from './PreferenceHeader.module.scss'
import {Props} from "./PreferenceHeader.props";


const PreferenceHeader = ({title,description}:Props) => {
    return (
      <div className={styles.header_content}>


            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>

      </div>
    );
};

export default PreferenceHeader;
