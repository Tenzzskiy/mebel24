import Link from 'next/link';
import React from 'react';
import styles from './NewsArrowCard.module.scss'
import NewsArrowLeft from "../../icons/NewsArrowLeft";
import NewsArrowRight from "../../icons/NewsArrowRight";
import classNames from "classnames";
import {AnimatePresence} from "framer-motion";
import Portal from "../../../hooks/Portal/Portal";
import OverlayingPopup from "../../../hooks/OverlayingPopup/OverlayingPopup";
import Menu from "../../elements/Menu";
import { LOCALHOST } from '../../../graphql/consstants';
const NewsArrowCard = ({prevImg,nextImg,MenuCards,menu, setMenu,prevLink,prevTitle,nextLink,nextTitle,position}:any) => {

    return (
        <>
            <div className={styles.button}>
                <AnimatePresence>
                    {menu && <Portal>
                        <OverlayingPopup isOpened={menu} onClose={() => {
                            // @ts-ignore
                            setMenu(prev => !prev);
                        }
                        }>
                            <Menu MenuCards={MenuCards} setMenu={setMenu}  />
                        </OverlayingPopup>
                    </Portal>}
                </AnimatePresence>
                <div className={styles.content}>
                    {position === 'right' ?
                        <Link href={`${prevLink}`}><a ><span className={classNames(prevLink ? '' : styles.disabled,styles.flex)}>
                        <div className={styles.svg}><NewsArrowLeft /></div>
                        <div className={styles.title}>{prevTitle}</div>
                        <div className={styles.img}><img src={LOCALHOST + prevImg} alt=""/></div>
                    </span></a></Link> :
                        <Link href={`${nextLink}`}><a ><span className={classNames(nextLink ? '' : styles.disabled,styles.flex)}>
                                <div className={styles.img}><img src={LOCALHOST + nextImg} alt=""/></div>
                              <div className={styles.title}>{nextTitle}</div>
                        <div className={styles.svg}><NewsArrowRight /></div>
                    </span></a></Link>
                    }


                </div>
            </div>
        </>
    );
};

export default NewsArrowCard;