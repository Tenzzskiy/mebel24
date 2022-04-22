import React, {useContext} from 'react';
import Header from "../../elements/header/header";
import PreferenceSection from "../../sections/PreferenceSection";
import Catalog from "../../elements/Catalog";
import ActionSection from "../../sections/ActionSection/ActionSection";
import PreferenceArenda from "../../elements/Preference/PreferenceArenda";
import styles from './CategoryPage.module.scss'
import Releases from "../../sections/RelisesSection/Releases";
import Asks from "../../elements/Asks/Asks";
import Seo from "../../sections/SEOSection/SEO";
import Feedback from "../../sections/FeedbackSection/Feedback";
import {AdditionalContext, PodborkiContext} from "../../../context/context";
import {AnimatePresence} from "framer-motion";
import Portal from "../../../hooks/Portal/Portal";
import OverlayingPopup from "../../../hooks/OverlayingPopup/OverlayingPopup";
import Menu from "../../elements/Menu";
import {MyImage} from "../../../hooks/MyImage";
const CategoryPage = ({MenuCards,menu, setMenu,mainImg,CatalogCategoryCards}:any) => {
    const Podborki = useContext(PodborkiContext)
    const Additional = useContext(AdditionalContext);
    return (
        <div className={styles.page}>
            <Header mainImg={mainImg} />
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
            <div className={styles.background1}>
                <MyImage
                    //@ts-ignore
                    itemProp="image" src={{default: '/bg2.svg'}} alt='' />
            </div>
            <div className={styles.background2}>
                <MyImage
                    //@ts-ignore
                    itemProp="image" src={{default: '/bg3.svg'}} alt='' />
            </div>
            <div className={styles.background3}>
                <MyImage
                    //@ts-ignore
                    itemProp="image" src={{default: '/bg4.svg'}} alt='' />
            </div>

           <div className={styles.content}>
               <PreferenceSection themes={true} />
               <Catalog CatalogCategoryCards={CatalogCategoryCards} category={false} type={false} />
               <div className={styles.preference_arenda}>
                   <PreferenceArenda />
               </div>
               <ActionSection count={2} title='Возможно вы ищите' name='Для выставки' description='Информационные экраны,
специальная мебель и другое' />
               <Releases title='Проведенные мерпориятия' />
               <ActionSection array={Podborki} count={1} title='Подборки с мебелью'  />
               <Asks />
               <Seo />
               <Feedback />
           </div>
        </div>
    );
};

export default CategoryPage;