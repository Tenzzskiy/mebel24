import React from 'react';
import styles from './privacyComponent.module.scss'
import PrivacyNavigation from "../privacyNavigation/privacyNavigation";
import PrivacyTitle from "../privacyTitle/privacyTitle";
import PrivacyMain from "../privacyMain/privacyMain";
import PrivacyDelivery from "../privacyDelivery/privacyDelivery";
import PrivacyPayment from "../privacyPayment/privacyPayment";
import PrivacySelfDelivery from "../privacySelfDelivery/privacySelfDelivery";
import PrivacyMontage from "../privacyMontage/privacyMontage";
import PrivacyFeedBack from "../privacyFeedBack/privacyFeedBack";
import PrivacyDuration from "../privacyDuration/privacyDuration";
import {AnimatePresence} from "framer-motion";
import Portal from "../../../../hooks/Portal/Portal";
import OverlayingPopup from "../../../../hooks/OverlayingPopup/OverlayingPopup";
import Menu from "../../../elements/Menu";

const PrivacyComponent = ({MenuCards,menu, setMenu}:any) => {
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
            <div className={styles.pageName}>
                Условия аренды
            </div>
            <nav className={styles.nav}>
                <PrivacyNavigation />
            </nav>
            <PrivacyTitle title='Основное' id={1} />
            <PrivacyMain />
            <PrivacyTitle title='Доставка' id={2} />
            <PrivacyDelivery />
            <PrivacyTitle title='Оплата' id={3} />
            <PrivacyPayment />
            <PrivacyTitle title='Самовывоз' id={4} />
            <PrivacySelfDelivery />
            <PrivacyTitle title='Монтаж и демонтаж' id={5} />
            <PrivacyMontage />
            <PrivacyTitle title='Возврат' id={6} />
            <PrivacyFeedBack />
            <PrivacyTitle title='Продление' id={7} />
            <PrivacyDuration />

        </div>
    );
};

export default PrivacyComponent;