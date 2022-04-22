import React, {useEffect} from 'react';
import styles from './bucketCard.module.scss'
import AddButton from "../../elements/AddButton";
import {cardProps, CatalogCardsProps} from "../../../Types/Types.props";
import {useDispatch, useSelector} from "react-redux";
import Plus from "../../icons/Plus";
// @ts-ignore
import {deleteItemFromCart} from "../../../redux/cart/reducer";
import { LOCALHOST } from '../../../graphql/consstants';
import {MyImage} from "../../../hooks/MyImage";
const BucketCard = ({card,value,duration,setDuration,data}:any) => {

    const time = (Array.isArray(value) ? Math.ceil(Math.abs(value[1].getTime() - value[0].getTime()) / (1000 * 3600 * 24)) : 1);

    // @ts-ignore
    const items = useSelector(state => state.cart.itemsInCart);
    let sum = 0;
    items && items.length !== 0 ? items.map((elem:CatalogCardsProps) => sum += Number(elem.price) + (Number(elem.secondPrice) * Number(elem.count) * time) ) : 0 ;
    const dispatch = useDispatch();
    const handleDelete = () =>{
        dispatch(deleteItemFromCart(card.article))
    }

    return (
        <div className={styles.card} itemScope itemType="http://schema.org/Product">
            <div className={styles.content}>
                <div className={styles.exit} onClick={() =>{
                    handleDelete();
                }}><Plus /></div>
            <div>
                <MyImage
                    //@ts-ignore
                     itemProp="image" src={{default: LOCALHOST + card.mainImg}} alt={card.title} />
                <div className={styles.price2}>
                    <div itemProp="price">{card.price} ₽<span>1-ый день</span></div>
                    <div>{card.secondPrice} ₽<span>со 2-го дня</span></div>
                </div>
            </div>
                <div className={styles.description} itemProp="offers" itemScope itemType="http://schema.org/Offer">
                <div className={styles.title} >
                <h2 itemProp="name">{card.title}</h2>
                    <span>Артикул: {card.article}</span>
                </div>
                    <div className={styles.price}>
                    <div itemProp="price">{card.price} ₽<span>1-ый день</span></div>
                    <div>{card.secondPrice} ₽<span>со 2-го дня</span></div>
                    </div>
                    <div className={styles.totalPrice}>
                   <div>
                       <div className={styles.price3}>
                           <div itemProp="price">{card.price} ₽<span>1-ый день</span></div>
                           <div>{card.secondPrice} ₽<span>со 2-го дня</span></div>
                       </div>
                       <div className={styles.total}>
                           <span>Стоимость</span>
                           <div>{time !== 1 ? Number(card.price) + ((Number(card.secondPrice) * Number(card.count)) * time ) - Number(card.secondPrice) :Number(card.price)  * Number(card.count) } <span>₽</span></div>
                       </div>
                   </div>
                        <div className={styles.button}>
                            <AddButton card={card}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BucketCard;