import React, {useContext} from 'react';
import styles from './mainPage.module.scss'
import PreferenceSection from "../../sections/PreferenceSection/PreferenceSections";
import ActionSection from "../../sections/ActionSection/ActionSection";
import Releases from "../../sections/RelisesSection/Releases";
import Asks from "../../elements/Asks/Asks";
import Seo from "../../sections/SEOSection/SEO";
import Feedback from "../../sections/FeedbackSection/Feedback";
import Header from "../../elements/header/header";
import cards from './../../../data/categories.json'
import date from './../../../data/offer.json'
import {PodborkiContext} from "../../../context/context";
import Portal from "../../../hooks/Portal/Portal";
import OverlayingPopup from "../../../hooks/OverlayingPopup/OverlayingPopup";
import Menu from "../../elements/Menu";
import {AnimatePresence} from "framer-motion";






const MainPage = ({MenuCards,menu,setMenu,array}: any) => {
    const Podborki = useContext(PodborkiContext)
    return (
       <>
           <AnimatePresence>
               {menu && <Portal>
                   <OverlayingPopup isOpened={menu} onClose={() => {
                       // @ts-ignore
                       setMenu(prev => !prev);
                   }
                   }>
                       <Menu setMenu={setMenu} MenuCards={MenuCards}  />
                   </OverlayingPopup>
               </Portal>}
           </AnimatePresence>
           <div className={styles.mainpage}>
               <Header/>
               <PreferenceSection />
               <ActionSection array={Podborki} count={1} title='Подборки с мебелью' />
               <Releases title='Проведенные мерпориятия'/>
               <ActionSection array={Podborki}  count={2} title='Возможно вы ищите' name='Для выставки' description='Информационные экраны,
специальная мебель и другое'/>
               <Asks/>
               <Seo/>
               <Feedback/>
           </div>
       </>
    );
};

// @ts-ignore
export default MainPage;
// @ts-ignore