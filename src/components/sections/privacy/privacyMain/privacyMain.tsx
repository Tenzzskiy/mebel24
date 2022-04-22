import React from 'react';
import styles from './privacyMain.module.scss'
import classNames from "classnames";
const PrivacyMain = () => {
    return (
        <div className={styles.main}>
            <div className={styles.flex}>
            <p>Наши условия удобны и выгодны для тех, кто хочет провести разовое мероприятие,
                деловую выставку, праздничное торжество, а также – для тех,
                кого интересует более длительное использование мебели и оборудования.</p>
            </div>
            <TextWithPoint text='Аренда мебели и оборудования рассчитывается:' />
            <TextWithoutPoint text='менеджером компании по телефону'/>
            <TextWithoutPoint text='через Корзину на сайте при добавлении позиций в нужном количестве.'/>
            <TextWithPoint text='Доставка рассчитывается менеджером нашей компании после оформления заказа'/>
            <TextWithPoint text='Мы работаем на основании счёт-договора по предоплате 50%. Оплата заказа должна
            быть произведена за 24 часа до отгрузки мебели.'/>
            <TextWithPoint text='Началом срока аренды является время доставки заказа арендатору.'/>
            <TextWithPoint text='Аренда мебели рассчитывается посуточно. Но есть отдельное оборудование, услуги или работа персонала. Все это расчитывается отдельно с менеджером.'/>
            <TextWithPoint text='Все оборудование (мебель), предоставляемое в аренду, является бывшим в употреблении, а потому может иметь следы естественного износа, такие как потёртости, царапины или сколы, не влияющего на его использование по назначению.'/>
            <TextWithPoint color={true} text='Если вы не нашли необходимый товар на сайте, сообщите об этом менеджеру — он найдет подходящий товар или услугу и наших партнеров!'/>
        </div>
    );
};

export default PrivacyMain;

export const TextWithPoint = ({text,color=false}:any) =>{
    return(
        <>
        <div className={styles.textArea}>
        <div className={styles.point}> </div>
            <span className={classNames(color ? styles.color : null,styles.text)}>{text}</span>
        </div>
        </>
    )
}
export const TextWithoutPoint = ({text}:any) =>{
    return(
        <>
            <div className={styles.textArea2}>
                <div className={styles.point2}>-</div>
                <span className={styles.text}>{text}</span>
            </div>
        </>
    )
}