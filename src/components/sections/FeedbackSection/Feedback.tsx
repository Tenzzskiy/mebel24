import React, {useState} from 'react';
import styles from './Feedback.module.scss'
import {LOCALHOST} from "../../../graphql/consstants";
import {MyImage} from "../../../hooks/MyImage";
import Portal from "../../../hooks/Portal/Portal";
import OverlayingPopup from "../../../hooks/OverlayingPopup/OverlayingPopup";
import OrderModal from "../../elements/orderModal";
import {AnimatePresence} from "framer-motion";


const Feedback = () => {
    const [orderModal,setOrderModal] = useState(false);
    return (
     <>
         <div className={styles.feedback}>
             <AnimatePresence>
                 {orderModal && <Portal>
                     <OverlayingPopup isOpened={orderModal} onClose={() => {
                         // @ts-ignore
                         setOrderModal(prev => !prev);
                     }
                     }>
                         <OrderModal setOrderModal={setOrderModal}  />
                     </OverlayingPopup>
                 </Portal>}
             </AnimatePresence>
             <MyImage className={styles.img}
                 //@ts-ignore
                 itemProp="contentUrl" src={{default: "/images/feedback/1.png"}} alt='' />
             <div className={styles.content}>
        <span> Не нашли то что искали?</span>
                 <p>
                     Оставьте заявку и наш менеджер перезвонит вам в ближайшее время и ответит на все ваши вопросы
                 </p>
                 <div className={styles.button}>
                 <button
                     onClick={() => setOrderModal(true)}
                 >Оставить заявку</button>
                 </div>
             </div>
         </div>
     </>
    );
};

// @ts-ignore
export default Feedback;