import React, {Dispatch, SetStateAction} from 'react';
import styles from './Menu.module.scss'
import MenuCard from "../../cards/MenuCard";
import FavouritesIcon from "../../icons/FavouritesIcon";
import Youtube from "../../icons/Youtube";
import Instagram from "../../icons/Instagram";
import {motion} from "framer-motion";
import Logotype from "../../icons/Logotype";
import Link from 'next/link';
import {number} from "../../../graphql/consstants";

interface setMenu {
    setMenu?: Dispatch<SetStateAction<boolean>>;
    MenuCards: [];
}

const variants = {
    initial: {
        y: '-100%',
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
    hidden: {
        y: '-100%',
        opacity: 0,
    }
}

const Menu = ({MenuCards, setMenu}: setMenu) => {
    const menuItems = MenuCards.map((elem: { title: string, img: string, url: string }, index: number) => <MenuCard
        url={elem.url} key={index} title={elem.title} img={elem.img}/>)

    return (
        <>
            <motion.div className={styles.menu}
                        variants={variants}
                        initial='initial'
                        animate='visible'
                        exit='hidden'
                        transition={{duration: 0.3, type: 'tween'}}
            >

                <div className={styles.content}>
                    <div className={styles.button_flex}><div> <Logotype /></div>
                        {/*// @ts-ignore*/}
                        <div className={styles.button} onClick={typeof setMenu !== 'undefined' ? () => setMenu(prev => !prev) : null}>Закрыть </div>  </div>

                    <div className={styles.leftSide}>
                        <div className={styles.menuItems}>
                            {menuItems}
                            {menuItems}
                            {menuItems}
                            {menuItems}
                            {menuItems}
                            {menuItems}
                            {menuItems}
                            {menuItems}
                            {menuItems}
                        </div>

                        <div className={styles.leftSideTitle}>
                            Подборки мебели и оборудования
                        </div>
                        <div className={styles.menuItems2}>
                            <div className={styles.menuItems}>
                                {menuItems}
                                {menuItems}
                                {menuItems}
                                {menuItems}
                                {menuItems}
                                {menuItems}
                                {menuItems}
                                {menuItems}
                                {menuItems}
                                {menuItems}
                            </div>
                        </div>
                        <div className={styles.leftSideTitle}>
                            Тематические подборки
                        </div>
                        <div className={styles.menuItems2}>


                            <div className={styles.menuItems}>
                                {menuItems}
                                {menuItems}
                                {menuItems}

                            </div>
                        </div>
                    </div>
                    <div className={styles.flex}>



                        <div className={styles.grid}>
                            <Link href='/news'><a><div>Мероприятия</div></a></Link>
                            <Link href='/privacy'><a><div>Условия аренды</div></a></Link>
                            <div className={styles.favourite}><FavouritesIcon /></div>
                        </div>
                        <Link href='/privacy'><a><div className={styles.cont}>Контакты</div></a></Link>
                        <div className={styles.grid2}>
                            <div className={styles.contacts}>
                                <span>{number} </span>
                                <p> звонок бесплатный</p>
                            </div>
                            <div className={styles.icons}>
                                <Youtube />
                                <Instagram />
                            </div>
                        </div>
                    </div>
                    <div className={styles.flex3}>
                        <Link href='/news'><a><div>Мероприятия</div></a></Link>
                        <Link href='/privacy'><a><div>Условия аренды</div></a></Link>
                        <Link href='/contacts'><a><div className={styles.cont}>Контакты</div></a></Link>
                    </div>
                </div>
            </motion.div>
        </>
    );
};
//@ts-ignore
export default Menu;