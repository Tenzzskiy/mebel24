import React from 'react';
import styles from './privacyNavigation.module.scss'
import {useKeenSlider} from "keen-slider/react";
import PrivacyNavButton from "../privacyNavButton/privacyNavButton";
import classNames from "classnames";
import Link from 'next/link';
const PrivacyNavigation = () => {
    const buttons = [
        'Основное','Доставка','Оплата','Самовывоз',
        'Монтаж и демонтаж','Возврат','Продление',
    ]
    // const [ref] = useKeenSlider<HTMLDivElement>({
    //     slides: {
    //         perView: "auto",
    //         spacing: 20,
    //     },
    // })
    const navButtons = buttons.map((elem:any,index:number) =>
        <Link key={index} href={`#${index+1}`}><a className={styles.a} >
        <div  className={classNames(styles.slide,"keen-slider__slide number-slide1")}>
            <PrivacyNavButton index={index} title={elem} />
        </div>
        </a>
    </Link>
    )
    return (
        <div>
            <div  className={classNames(styles.slider,"keen-slider")}>
                {navButtons}
            </div>
        </div>
    );
};

export default PrivacyNavigation;