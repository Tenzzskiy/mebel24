import React, {useContext} from 'react';
import styles from './BucketSetcion.module.scss'
import BucketElement from "../../elements/bucket/bucketElement";
import ActionSection from "../ActionSection/ActionSection";
import catalog from "../../../data/catalog.json";
import {PropsCardsContext, SliderCardsContext} from "../../../context/context";
import {parseSliderCardsData} from "../../../hooks/parsers/parser";
import Portal from "../../../hooks/Portal/Portal";
import OverlayingPopup from "../../../hooks/OverlayingPopup/OverlayingPopup";
import Menu from "../../elements/Menu";
import {AnimatePresence} from "framer-motion";
const BucketSection = ({MenuCards,menu, setMenu}:any) => {
    const SliderCards:any = useContext(SliderCardsContext)


    return (
        <>
         <div className={styles.section}>
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
            <BucketElement />
         </div>
            <ActionSection catalog={true} array={parseSliderCardsData(SliderCards)} catalogType={false} count={1} title='Подборки с мебелью' name='Для выставки' description='Информационные экраны,
специальная мебель и другое' />
        </>
    );
};

export default BucketSection;