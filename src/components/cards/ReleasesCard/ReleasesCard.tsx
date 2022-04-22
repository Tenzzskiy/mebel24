import Link from 'next/link';
import React from 'react';
import styles from './ReleasesCard.module.scss'
import {Props} from "./ReleasesCard.props";
import {LOCALHOST} from "../../../graphql/consstants";
import {MyImage} from "../../../hooks/MyImage";


const ReleasesCard = ({title, date,img,news,link}:Props) => {
    return (
        <>
           <Link href={`${news ? `news/` + link : `/news/`}`}><a className={styles.a}>
               <div className={styles.releasesCard} >
                   <div className={styles.content} itemScope itemType="http://schema.org/ImageObject">
                       <div className={styles.img}>
                           <MyImage
                               //@ts-ignore
                               itemProp="contentUrl" src={{default: LOCALHOST + img}} alt={title} />
                       </div>
                       <div className={styles.description}>
                           <h3 itemProp="name">
                               {title}
                           </h3>
                           <span>
                        {date}
                        </span>
                       </div>
                   </div>
               </div>
           </a></Link>
        </>
    );
};

export default ReleasesCard;