import React, {useEffect, useState} from 'react';
import styles from './CatalogCard.module.scss'
import {Props} from "./CatalogCard.props";
import ImgArrayCard from "../imgArrayCard";
import FavouritesIcon from "../../icons/FavouritesIcon";
import AddButton from "../../elements/AddButton";
import classNames from "classnames";
import {LOCALHOST} from "../../../graphql/consstants";
import {useDispatch, useSelector} from 'react-redux';
import {CatalogCardsProps} from "../../../Types/Types.props";
// @ts-ignore
import {deleteFavourite, setFavourite, setItemInCart, updateCount} from "../../../redux/cart/reducer";
import ImgArrayCards from "../imgArrayCards/imgArrayCards";
import CatalogFavouriteIcon from "../../icons/CatalogFavouriteIcon";
import CatalogArrow from "../../icons/CatalogArrow";
import Portal from "../../../hooks/Portal/Portal";
import OverlayingPopup from "../../../hooks/OverlayingPopup/OverlayingPopup";
import Menu from "../../elements/Menu";
import {AnimatePresence} from "framer-motion";
import CatalogCardModal from "../../elements/CatalogCardModal";
import {useKeenSlider} from "keen-slider/react";
import {MyImage} from "../../../hooks/MyImage";
import AddModal from "../../elements/AddModal";
import BucketIcon from "../../icons/bucketIcon";



const CatalogCard = ({mainImgArray,sliderSwipe,setSliderSwipe,complectation,imgArrayCount,mainImg,title,article,price,secondPrice,data,count}:Props) => {
    const [addModal,setAddModal] = useState(false)
    const [addFavouriteModal,setFavouriteModal] = useState(false)
    const isAdded = false;
    const isFavourite = false;
    const [active,setActive] = useState(true);
    const dispatch = useDispatch();
    const firstCard = {imgArrayCount,mainImg,title,article,price,secondPrice,data,count,isFavourite,isAdded,mainImgArray}
    const [card,setCard] = useState({imgArrayCount,mainImg,title,article,price,secondPrice,data,count,isFavourite,isAdded,mainImgArray})
    // const card:CatalogCardsProps = {imgArrayCount,mainImg,title,article,price,secondPrice,data,count};

    // @ts-ignore
    const items = useSelector(state => state.cart.itemsInCart);
    const handleAddCard = (card:CatalogCardsProps) =>{

        // @ts-ignore
        setCard({...card,isAdded: true})
        dispatch(setItemInCart(card))
        setAddModal(true);
        const timedId = setTimeout(() =>{
            setAddModal(false);
            clearTimeout(timedId)
        },1500)
    }

    const handleIsAdded = (data:CatalogCardsProps) =>{
        if ( items.find((elem:CatalogCardsProps) => elem.article === data.article ? true : false)) {
            return(
                <AddButton card={card} />
            )
        } else {
            return (
                <div className={styles.images} >
                    <div onClick={() =>{
                        handleAddCard(card);
                    }}>
                    <BucketIcon />
                    </div>

                </div>
            )
        }
    }

    const [activeFavourite,setActiveFavourite] = useState(1);
    const handleChangeFavourites = (index:number,elem:any) =>{
        setCard({...card,isFavourite:!card.isFavourite})
    }
    const combineArray = [firstCard,...data]
    const favourites = combineArray.map((elem:any, index:number) => <CatalogFavouriteIcon
        setFavouriteModal={setFavouriteModal}
        activeFavourite={activeFavourite}
        setActiveFavourite={setActiveFavourite}
        card={card}
        key={index}
        index={index}
        element={elem}
        handleChangeCard={handleChangeFavourites}
    /> )

    const [cardAdded,setCardAdded] = useState(false);
    const [cardAddedLength,setCardAddedLength] = useState(0);

    const setLength = () =>{
        let lengthArray = 0;
        for (let i =0 ; i< combineArray.length; i++){

            if (items.filter((elem:any) => combineArray[i].article === elem.article).length !== 0 ){
                lengthArray+=1
            }


        }
        setCardAddedLength(lengthArray)
    }
    useEffect(() =>{
        if (cardAddedLength !== 0 ) {
            setCardAdded(true)
        } else if (cardAddedLength === 0 ){
            setCardAdded(false)
        }
    })
    useEffect(() =>{
        setLength();

    },[items])
    const [activeModal,setActiveModal] = useState(false);


    return (
        <div>
            <AnimatePresence>
                {addModal && <Portal >
                    <OverlayingPopup overlayClass={styles.overlay} isOpened={addModal} onClose={() => {
                        // @ts-ignore
                        setAddModal(prev => !prev);
                    }
                    }>
                        <AddModal setAddModal={setAddModal}   />
                    </OverlayingPopup>
                </Portal>}
            </AnimatePresence>
            <AnimatePresence>
                {addFavouriteModal && <Portal >
                    <OverlayingPopup overlayClass={styles.overlay} isOpened={addFavouriteModal} onClose={() => {
                        // @ts-ignore
                        setFavouriteModal(prev => !prev);
                    }
                    }>
                        <AddModal catalog={false} setFavouriteModal={setFavouriteModal}   />
                    </OverlayingPopup>
                </Portal>}
            </AnimatePresence>
            <AnimatePresence>
                {activeModal && <Portal>
                    <OverlayingPopup isOpened={activeModal} onClose={() => {
                        // @ts-ignore
                        setActiveModal(prev => !prev);
                    }
                    }>
                        <CatalogCardModal cardAdded={cardAdded} cardAddedLength={cardAddedLength} active={active} favourites={favourites} firstCard={firstCard} setActiveModal={setActiveModal} card={card} setCard={setCard}  />
                    </OverlayingPopup>
                </Portal>}
            </AnimatePresence>
         <div  className={classNames(!imgArrayCount ? styles.catalogCard2 : '' ,!active ? styles.background : null,styles.catalogCard,cardAdded ? styles.activeBorder : null)} onMouseEnter={(e) => {
             setActive(false);
         }} onMouseLeave={() => setActive(true)} itemScope itemType="http://schema.org/Product">
             <div className={classNames(cardAdded ? null : styles.disable ,styles.position)}> <div className={classNames(styles.arrow)}><CatalogArrow /> </div>{cardAddedLength}</div>
         <div className={styles.content}>
         <div className={styles.flex}>
         <div className={styles.img}>
             <MyImage
                 //@ts-ignore
                 itemProp="image" src={{default: LOCALHOST + card.mainImg}} alt={card.title} />
         </div>
         <div className={classNames(!imgArrayCount ? styles.description2 : '' ,styles.description)}>
             <div className={styles.array}>
             <span className={ !imgArrayCount ? styles.imgArray : styles.imgArray2}>Комплектация</span>
                 <div className={ !imgArrayCount ? styles.imgArray : styles.imgArray2}>
                <ImgArrayCard firstCard={firstCard} complectation={complectation} setCard={setCard} card={card} data={data} sliderSwipe={sliderSwipe} setSliderSwipe={setSliderSwipe} />
                 </div>
             </div>
             <div className={styles.field} itemProp="offers" itemScope itemType="http://schema.org/Offer"
                  onClick={() => setActiveModal(true)}
             >
                 <div className={styles.title} itemProp="name">
                     <span>{card.title}</span>
                     <p>Артикул: {card.article}</p>
                 </div>
                 <div className={styles.price}>
                     <span className={styles.firstPrice} itemProp="price">{card.price} ₽ <span>1-ый день</span></span>
                     <span className={styles.secondPrice}>{card.secondPrice} ₽ <span> со 2-го дня</span></span>
                 </div>
             </div>
             <div className={classNames( active ? styles.appear : null,styles.bucket)}>
                 <div>  {favourites}</div>
                 {handleIsAdded(card)}
             </div>
         </div>
         </div>
         </div>
         </div>
        </div>
    );
};

export default CatalogCard;