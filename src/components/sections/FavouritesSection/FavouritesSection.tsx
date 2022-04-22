import React from 'react';
import {useSelector} from "react-redux";
import styles from './FavouritesSection.module.scss'
import {element} from "prop-types";
import CatalogCard from "../../cards/CatalogCard/CatalogCard";
import Portal from "../../../hooks/Portal/Portal";
import OverlayingPopup from "../../../hooks/OverlayingPopup/OverlayingPopup";
import Menu from "../../elements/Menu";
import {AnimatePresence} from "framer-motion";
const FavouritesSection = ({MenuCards,menu, setMenu}:any) => {

    // @ts-ignore
    const items = useSelector(state => state.cart.favourites);

    const array = items.map((element:any,index:number) => <CatalogCard key={index} data={element.data} count={element.count} mainImg={element.mainImg} title={element.title}
                                                          article={element.article} price={element.price} secondPrice={element.secondPrice}
                                                                       imgArrayCount={false} />)
    return (
     <div className={styles.container}>
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
             <div className={styles.title}>

             </div>
             <div className={styles.favourites}>
                 {array}
             </div>
         </div>
     </div>
    );
};

export default FavouritesSection;