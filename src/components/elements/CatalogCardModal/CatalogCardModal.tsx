import React, {useRef} from 'react';
import styles from './CatalogCardModal.module.scss'
import {LOCALHOST} from "../../../graphql/consstants";
import ImgArrayCard from "../../cards/imgArrayCard";
import classNames from "classnames";
import {CatalogCardsProps} from "../../../Types/Types.props";
import AddButton from "../AddButton";
import {useDispatch, useSelector} from "react-redux";
import {setItemInCart} from "../../../redux/cart/reducer";
import CatalogFavouriteIcon from "../../icons/CatalogFavouriteIcon";
import CatalogArrow from "../../icons/CatalogArrow";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import useWindowSize from "../../../hooks/useWindowSize";
import ModalDescription from "../ModalDescription";
import Plus from "../../icons/Plus";
import MainImgArray from "../mainImgArray";
import {MyImage} from "../../../hooks/MyImage";
const CatalogCardModal = ({cardAdded,cardAddedLength,active,favourites,firstCard,setCard,setActiveModal,card}:any) => {
    // @ts-ignore
    const items = useSelector(state => state.cart.itemsInCart);
    const dispatch=useDispatch();
    const handleAddCard = (card:CatalogCardsProps) =>{

        // @ts-ignore
        setCard({...card,isAdded: true})
        dispatch(setItemInCart(card))
    }
    const handleIsAdded = (data:CatalogCardsProps) =>{
        if ( items.find((elem:CatalogCardsProps) => elem.article === data.article ? true : false)) {
            return(
                <AddButton card={card} />
            )
        } else {
            return (
                <div className={styles.images}>
                    <MyImage
                        //@ts-ignore
                        itemProp="contentUrl" src={{default: '/images/addItem.svg'}} alt='' />
                </div>
            )
        }
    }
    const modal_f = useRef(null);
    const size= useWindowSize();
    useOnClickOutside(modal_f,() => size.width > 720 ? setActiveModal(false) : null)
    const texts = [
        'Гардероб VIP - уникально новое решение для гардеробной зоны с возможностью размещения вашего логотипа или брендинга на стенки шкафа. А также есть полка под акссесуары и сумки.',
        'Секция собирается из специального профиля, который позволяет размещать качественные декоративные панели или модули светодиодных экранов. Чем больше заказываете секций, тем меньше итоговая стоимость!',
        ' В стоимость входит: гардеробная конструкция, VIP плечики и номерки, сборка и разборка секций'
    ]
    const descriptions = texts.map((elem,index ) => <ModalDescription key={index} text={elem}/>)
    return (
        <div className={styles.modal}>
        <div className={styles.content}>
            <div className={styles.card}
                 ref={modal_f}
            >
                <div className={styles.exit}
                onClick={() => setActiveModal(false)}
                ><Plus /></div>
                <div className={classNames(cardAdded ? null : styles.disable ,styles.position)}> <div className={classNames(styles.arrow)}><CatalogArrow /> </div>{cardAddedLength}</div>
                    <div className={styles.img}>
                        <MainImgArray card={card}/>
                    </div>
                <div className={styles.complectation}>
                <span className={styles.name}>Комплектация:</span>
                    {typeof card.data !== 'undefined' ?
                        <ImgArrayCard firstCard={firstCard} complectation={card.complectation} setCard={setCard} card={card} data={card.data}/>
                        :
                        null
                    }
                    <div className={styles.field}>
                        <div className={styles.title}>
                            <span>{card.title}</span>
                            <p>Артикул: {card.article}</p>
                        </div>
                        <div className={styles.price}>
                            <span className={styles.firstPrice}>{card.price} ₽ <span>1-ый день</span></span>
                            <span className={styles.secondPrice}>{card.secondPrice} ₽ <span> со 2-го дня</span></span>
                        </div>
                        <div className={classNames( active ? styles.appear : null,styles.bucket)}>
                            <div>  {favourites}</div>
                            <div onClick={() =>{
                                handleAddCard(card);
                            }} >{handleIsAdded(card)}</div>

                        </div>
                        <div className={styles.desc}>
                                <span className={styles.descTitle}>Описание</span>
                                <div className={styles.text}>
                                    {descriptions}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CatalogCardModal;