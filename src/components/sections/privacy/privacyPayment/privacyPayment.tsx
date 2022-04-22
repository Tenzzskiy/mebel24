import React from 'react';
import styles from "../privacyMain/privacyMain.module.scss";
import {TextWithoutPoint, TextWithPoint} from "../privacyMain/privacyMain";

const PrivacyPayment = () => {
    return (
        <div className={styles.main}>
            <div className={styles.flex}>
                <p>Оплата заказа осуществляется одним из способов:</p>
            </div>
            <TextWithPoint text='Безналичный расчет путем перечисления на расчетный счет.' />
            <TextWithPoint text='Банковской картой. Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт следующих платёжных систем: ' />
            <TextWithoutPoint text='VISA International'/>
            <TextWithoutPoint text='Mastercard Worldwide'/>
            <TextWithoutPoint text='МИР'/>
            <TextWithoutPoint text='JCB'/>
            <TextWithPoint text='Наличными'/>
        </div>
    );
};

export default PrivacyPayment;