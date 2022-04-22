import Link from 'next/link';
import React from 'react';
import styles from './PreferenceArendaCard.module.scss'
import {Props} from "./PreferenceArendaCard.props";
import {LOCALHOST} from "../../../graphql/consstants";
import {MyImage} from "../../../hooks/MyImage";
const PreferenceArendaCard = ({img,title,url}:Props) => {


    return (
        <><Link href={`/catalog/${url}`}><a>
            <div className={styles.arenda_flex}>


                <div className={styles.arenda}>
                    <div className={styles.content} itemScope itemType="http://schema.org/ImageObject">
                        <span itemProp="name">{title}</span>
                        <div>
                            <MyImage
                                //@ts-ignore
                                itemProp="contentUrl" src={{default: LOCALHOST + img}} alt={title} />
                        </div>

                    </div>
                </div>
                <div className={styles.desc}>
                    {title}
                </div>
            </div>

        </a></Link>
       </>
    );
};

export default PreferenceArendaCard;