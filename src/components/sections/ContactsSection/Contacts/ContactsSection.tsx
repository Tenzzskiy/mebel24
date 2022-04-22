import React from 'react';
import styles from './ContactsSection.module.scss'
import ContactInfo from "../ContactInfo";
import Portal from "../../../../hooks/Portal/Portal";
import OverlayingPopup from "../../../../hooks/OverlayingPopup/OverlayingPopup";
import Menu from "../../../elements/Menu";
import {AnimatePresence} from "framer-motion";
const ContactsSection = ({MenuCards,menu, setMenu}:any) => {
    return (
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
            <div className={styles.content}>
            <h2 className={styles.title}>Контакты</h2>

            </div>
            <div className={styles.flex}>
                <ContactInfo />
                <div className={styles.map} style={{position:'relative',overflow:'hidden',border:0,outline:'none'}}><a
                    href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps"
                    style={{color:'#eee',fontSize:'12px',position:'absolute',top:'0'}}>Яндекс Карты</a><a
                    href="https://yandex.ru/maps/?ll=37.910639%2C55.342703&utm_medium=mapframe&utm_source=maps&z=14"
                    style={{color:'#eee',fontSize:'12px',position:'absolute',top:'14px'}} >Яндекс Карты — транспорт, навигация,
                    поиск мест</a>
                    <iframe src="https://yandex.ru/map-widget/v1/-/CBRhZMuO2C" width="100%" height="100%" frameBorder="1"
                            allowFullScreen={true} style={{position:'relative',border:0}}> </iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactsSection;