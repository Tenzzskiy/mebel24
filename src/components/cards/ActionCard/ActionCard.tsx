import React, {useContext} from 'react';
import {Props} from "./ActionCard.props";
import styles from './ActionCard.module.scss'
import Link from "next/link";
import { LOCALHOST } from '../../../graphql/consstants';
import {AdditionalContext} from "../../../context/context";
import { MyImage } from '../../../hooks/MyImage/MyImage';


const ActionCard = ({title,description,img,link,theme,count}:Props) => {



    return (
<>
    {link ?  <Link href={`${typeof theme !== 'undefined' ? '/additions' : '/category'}/${ link}`}><a>
        <div className={styles.card}>
            <div itemScope itemType="http://schema.org/ImageObject" className={styles.content}>
                <div className={styles.img}>
                    <MyImage
                        //@ts-ignore
                        itemProp="contentUrl" src={{default: LOCALHOST + img}} alt={title} />
                </div>
                <div className={styles.text}>
                    <h2>{title}</h2>
                    <h3 itemProp="description">{description}</h3>
                    <button>Выбрать</button>
                </div>
            </div>
        </div>

    </a></Link> : <a>
        <div className={styles.card}>
            <div itemScope itemType="http://schema.org/ImageObject" className={styles.content}>
                <div className={styles.img}>

                    <MyImage
                        //@ts-ignore
                        itemProp="contentUrl" src={{default: img}} alt={title} />


                </div>
                <div className={styles.text}>
                    <h2>{title}</h2>
                    <h3 itemProp="description">{description}</h3>
                    <button>Выбрать</button>
                </div>
            </div>
        </div>

    </a>

    }
</>
    );
};

export default ActionCard;