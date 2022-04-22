import React from 'react';
import styles from './ContactInfo.module.scss'
import Number from "../../../icons/number";
import {FULL_ADDRESS, MAIL, number} from '../../../../graphql/consstants';
import Email from "../../../icons/email";
import Address from "../../../icons/address";
import Youtube from "../../../icons/Youtube";
const ContactInfo = () => {
    return (
        <div className={styles.info} itemScope itemType="http://schema.org/Organization">
            <div className={styles.content}>
            <div className={styles.flex}>
                <div className={styles.item} itemProp="telephone"><div className={styles.icon}> <Number /></div> <a  href={`tel:${number}`} className={styles.span}>{number}</a></div>
                <div className={styles.item} itemProp="email"><div className={styles.icon}> <Email /></div>  <a href={`tel:${MAIL}`} className={styles.span}>{MAIL}</a></div>
                <div className={styles.item} ><div className={styles.icon}> <Address /></div>  <span className={styles.span} itemProp="address" itemScope itemType="https://schema.org/PostalAddress">{FULL_ADDRESS}</span></div>
                <div className={styles.youtube}> <Youtube /></div>
            </div>
            </div>
        </div>
    );
};

export default ContactInfo;