import React from 'react';
import styles from './MenuCard.module.scss'
import {MenuCard} from "./MenuCard.props";
import Link from "next/link";
import {LOCALHOST} from "../../../graphql/consstants";
import {MyImage} from "../../../hooks/MyImage";
const MenuCard = ({url,title,img}:MenuCard) => {
    return (
        <Link href={`/catalog/${url}`}><a className={styles.a}>
            <div className={styles.card} itemScope itemType="http://schema.org/ImageObject">
                <div className={styles.content}>
                    <div className={styles.title} itemProp="description"> {title}</div>
                    <div className={styles.img}>
                        <MyImage
                            //@ts-ignore
                            itemProp="contentUrl" src={{default: LOCALHOST + img}} alt={title} />
                      </div>
                </div>
            </div>
        </a></Link>
    );
};

export default MenuCard;