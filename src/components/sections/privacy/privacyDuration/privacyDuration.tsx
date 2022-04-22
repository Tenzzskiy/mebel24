import React from 'react';
import styles from "../privacyMain/privacyMain.module.scss";
import {TextWithoutPoint, TextWithPoint} from "../privacyMain/privacyMain";

const PrivacyDuration = () => {
    return (
        <div className={styles.main}>
            <TextWithPoint text='О продлении аренды мебели необходимо сообщить не менее, чем за 24 часа до окончания основного срока аренды по договору.' />
            <TextWithPoint text='Продление аренды возможно только после подтверждения менеджером компании доступности выбранных позиций.' />
            <TextWithPoint text='Продление аренды производится на основании счет-договора по предоплате 100%.' />
            <TextWithPoint text='Стоимость продления аренды мебели считается как при оформлении нового заказа.' />
        </div>
    );
};

export default PrivacyDuration;