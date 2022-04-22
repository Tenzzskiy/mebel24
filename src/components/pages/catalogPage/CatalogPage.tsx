import React, {useContext} from 'react';
import styles from "../mainPage/mainPage.module.scss";
import Header from "../../elements/header/header";
import ActionSection from "../../sections/ActionSection/ActionSection";
import Releases from "../../sections/RelisesSection/Releases";
import Asks from "../../elements/Asks/Asks";
import Seo from "../../sections/SEOSection/SEO";
import Catalog from "../../elements/Catalog/index";
import date from './../../../data/offer.json'
import {PropsCardsContext, SliderCardsContext} from "../../../context/context";
import {parseSliderCardsData} from "../../../hooks/parsers/parser";
import Portal from "../../../hooks/Portal/Portal";
import OverlayingPopup from "../../../hooks/OverlayingPopup/OverlayingPopup";
import Menu from "../../elements/Menu";
import {AnimatePresence} from "framer-motion";

const CatalogPage = ({MenuCards,menu, setMenu,mainImg,CatalogCards}:any) => {
    const SliderCards:any = useContext(SliderCardsContext)
    const page:any = useContext(PropsCardsContext)
    const array = SliderCards.filter((elem:any) => elem.url === page.url)

    return (
        <>
            <div className={styles.mainpage}>
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
                <Header mainImg={mainImg}/>
                <Catalog/>
                <ActionSection catalog={true} array={array.length < 1 ? array : parseSliderCardsData(array)} catalogType={true} count={1} title='Подборки с мебелью' name='Для выставки' description='Информационные экраны,
специальная мебель и другое' />
                <Releases title='Проведенные мерпориятия' />
                <ActionSection array={date} count={2} title='Возможно вы ищите' name='Для выставки' description='Информационные экраны,
специальная мебель и другое' />
                <Asks />
                <Seo />
            </div>
        </>
    );
};

export default CatalogPage;