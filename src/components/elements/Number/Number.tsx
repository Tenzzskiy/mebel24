import React from 'react';
import { number } from '../../../graphql/consstants';
import styles from "../../sections/headerSection/headerSection.module.scss";

const Number = () => {
    return (
        <>
            <a href={`tel:+${number}`} className={styles.item6} itemProp="telephone">
                8 999 999 99 99
            </a>
        </>
    );
};

export default Number;