import React, {useState} from 'react';
import styles from './headerSection.module.scss'
import BusketIcon from "../../icons/BusketIcon";
import BurgerIcon from "../../icons/BurgerIcon";
import Logotype from "../../icons/Logotype";
import classNames from "classnames";
import FavouritesIcon from "../../icons/FavouritesIcon";
import {header} from "./headerSection.props";
import GoldenBucket from "../../icons/GoldenBucket";
import HeaderBucket from "../../elements/HeaderBucket/HeaderBucket";
import Number from "../../elements/Number/Number";
import Link from 'next/link';
import {useSelector} from "react-redux";
import DisabledBucket from "../../elements/HeaderBucket/disabled/DisabledBucket";

const HeaderSection = ({menu, setMenu}: header) => {
    // @ts-ignore
    const items = useSelector(state => state.cart.itemsInCart);
    const quantity = items.length;
    const [scroll, setScroll] = React.useState(0);
    const [lastScroll,setLastScroll] = useState(1)
    const handleScroll = () => {
        setScroll(window.scrollY);
        setLastScroll(scroll)
    };
    React.useEffect(() => {

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <div className={classNames(styles.header,  scroll>lastScroll ? styles.header_fixed : null)}>
            <div className={styles.header_content}>
                <div className={classNames(styles.bucketClose, styles.item)}>
                    <BusketIcon/>
                </div>
                <div className={styles.item2}>

                    <Logotype classname={styles.logotype}/>
                </div>
                <div className={classNames(styles.burger, styles.item)}
                     onClick={() => typeof setMenu !== 'undefined' ? setMenu(true) : null}>
                    <BurgerIcon/>
                    <span>Меню</span>
                </div>
                <div className={styles.item3}>
                </div>
                <div className={styles.item4}>
                   <Link href="/favourites"><a>
                       <FavouritesIcon />

                   </a></Link>
                </div>
                    <HeaderBucket/>
                <Number/>

            </div>
        </div>
    );
};

export default HeaderSection;
