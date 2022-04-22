import React, { useState} from 'react';
import {getFooterCards, getMenuCards, getNews} from "../../utilites/api/api";
import {parseFooter, parseMenuCards, parseNews} from "../../hooks/parsers/parser";
import styles from './index.module.scss'
import ReleasesCard from "../../components/cards/ReleasesCard/ReleasesCard";
import {AnimatePresence} from "framer-motion";
import Portal from "../../hooks/Portal/Portal";
import OverlayingPopup from "../../hooks/OverlayingPopup/OverlayingPopup";
import Menu from "../../components/elements/Menu";
import HeaderSection from "../../components/sections/headerSection";
import FooterSection from "../../components/sections/FooterSection/FooterSection";

const Index = ({FooterCards,props,MenuCards}: any) => {

    const items = props.map((elem: any, index: number) => <ReleasesCard key={index} title={elem.title} img={elem.img}
                                                                        date={elem.date} link={elem.url} news={true}/>);
    const [menu,setMenu] = useState(false);

    return (
       <>
           <HeaderSection menu={menu} setMenu={setMenu} />
           <div className={styles.news}>
               <AnimatePresence>
                   {/*// @ts-ignore*/}
                   {menu && <Portal>
                       <OverlayingPopup isOpened={menu} onClose={() => {
                           // @ts-ignore
                           setMenu(prev => !prev);
                       }
                       }>
                           {/*// @ts-ignore*/}
                           <Menu MenuCards={MenuCards} setMenu={setMenu}  />
                       </OverlayingPopup>
                   </Portal>}
               </AnimatePresence>
               <div className={styles.content}>
                   <div className={styles.title}>
                       Проведенные мероприятия
                   </div>
                   <div className={styles.flex}>
                       {items}
                   </div>
               </div>
           </div>
           <FooterSection FooterCards={FooterCards}/>
       </>
    );
};

export async function getStaticProps(context: any) {
    const data = await getNews();
    const props = parseNews(data.novostis.data);
    const MenuCards = await getMenuCards() ;
    const FooterCards = await getFooterCards();
    return {
        props: {props,
            MenuCards:parseMenuCards(MenuCards.kartochkaMenyus.data),
            FooterCards:parseFooter(FooterCards.futers.data),
        },
    }
}

export default Index;