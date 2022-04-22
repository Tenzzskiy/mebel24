import React from 'react';
import styles from "../privacyMain/privacyMain.module.scss";
import {TextWithoutPoint, TextWithPoint} from "../privacyMain/privacyMain";

const PrivacyFeedBack = () => {
    return (
        <div className={styles.main}>
            <div className={styles.flex}>
            <p>Для того чтобы вернуть мебель и оборудование, вам стоит учесть некоторые правила:</p>
            </div>
            <TextWithPoint text='Мебель необходимо вернуть в срок, указанный в договоре. ' />
            <TextWithPoint text='При сдаче мебели арендодателю должен присутствовать арендатор или уполномоченное им лицо с доверенностью и документом, удостоверяющим личность. ' />
            <TextWithPoint text='При выявлении арендодателем неучтенных повреждений мебели, а также ее недостачи, составляется акт порчи/утери и подписывается обеими сторонами.' />
            <TextWithPoint text='На основании акта порчи/утери:' />
            <TextWithoutPoint text='в случае доставки, арендатору выставляется счет для оплаты причиненного ущерба' />
            <TextWithoutPoint text='при самовывозе сумма ущерба вычитается из залога. В случае, если оплата была наличными, расчет происходит на складе. При оплате на
            реквизиты компании выставляется дополнительный счет на ущерб.' />

        </div>
    );
};

export default PrivacyFeedBack;