import React, {useState} from 'react';
import styles from './../../src/assets/errorStyles.module.scss'
import HeaderSection from "../components/sections/headerSection";
import Portal from "../hooks/Portal/Portal";
import OverlayingPopup from "../hooks/OverlayingPopup/OverlayingPopup";
import Menu from "../components/elements/Menu";
import {AnimatePresence} from "framer-motion";
import {getFooterCards, getMenuCards} from "../utilites/api/api";
import {parseFooter, parseMenuCards} from "../hooks/parsers/parser";
import Link from 'next/link';
import FooterSection from "../components/sections/FooterSection/FooterSection";

export async function getStaticProps() {
    const MenuCards = await getMenuCards() ;
    const FooterCards = await getFooterCards();
    return {
        props: {
            MenuCards:parseMenuCards(MenuCards.kartochkaMenyus.data),
            FooterCards:parseFooter(FooterCards.futers.data),
        },
    }
}

const Page_404 = ({FooterCards,MenuCards}:any) => {
    const [menu,setMenu] = useState(false);
    return (
        <div className={styles.error}>
            <HeaderSection menu={menu} setMenu={setMenu} />
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
                <div className={styles.errorImg}> <img  src="/error.jpg" alt="Ошибка"/></div>
               <div className={styles.desc}>
                   <span className={styles.span1}>Страница не найдена :(</span>
                   <span className={styles.span2}>Страница в ремонте или не существует, вы можете вернуться на главную</span>
                   <Link href="/"><a>
                       <button className={styles.button}>Вернуться на главную</button>
                   </a></Link>
               </div>
            </div>
            <FooterSection FooterCards={FooterCards} />
        </div>
    );
};

export default Page_404;