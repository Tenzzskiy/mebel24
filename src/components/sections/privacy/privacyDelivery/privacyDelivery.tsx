import React from 'react';
import styles from "../privacyMain/privacyMain.module.scss";
import {TextWithoutPoint, TextWithPoint} from "../privacyMain/privacyMain";

const PrivacyDelivery = () => {
    return (
        <div className={styles.main}>
            <div className={styles.flex}>
                <p>Стоимость доставки подсчитывается в индивидуальном порядке и зависит
                    от места, времени и масштаба вашего заказа:</p>
            </div>
            <TextWithPoint text='Минимальная доставка туда/обратно мебели и оборудования – 500 руб.' />
            <TextWithPoint text='При сумме заказа от 40 тыс. рублей доставка в пределах МКАД бесплатна. ' />
            <TextWithPoint text='При заказе мебели в Московскую область или другие регионы расчеты ведутся индивидуально.' />
        </div>
    );
};

export default PrivacyDelivery;