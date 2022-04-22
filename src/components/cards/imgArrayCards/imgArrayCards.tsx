import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import styles from "../imgArrayCard/imgArrayCard.module.scss";
import CatalogArrow from "../../icons/CatalogArrow";
import {LOCALHOST} from "../../../graphql/consstants";
import {useSelector} from "react-redux";
import {MyImage} from "../../../hooks/MyImage";

const ImgArrayCards = ({mainImg,title,handleChangeCard,index,element,active}:any) => {
    // @ts-ignore
    const items = useSelector(state => state.cart.itemsInCart);
    const [currentCard,setCurentCard] = useState(false)
    const check = items.find((elem:any) => elem.article ===  element.article);

    useEffect(() =>{
        if (typeof check !== 'undefined') {
            setCurentCard(true)
        } else if (typeof check === 'undefined'){
            setCurentCard(false)
        }
    })
    return (
        <div  onClick={() => handleChangeCard(index,element)}
                className={classNames('keen-slider__slide',styles.slide,index+1 === active ? styles.activeBorder : null)}>
            <div className={classNames(currentCard ? styles.activeAdd : null,styles.add)}><div className={styles.arrow}><CatalogArrow /></div> </div>
            {/*<img*/}
            {/*    // @ts-ignore*/}
            {/*    src={LOCALHOST + (typeof elem.attributes.url == 'undefined' ?  elem.img : elem.attributes.url )} alt=""/>*/}
            <MyImage
                //@ts-ignore
                itemProp="contentUrl" src={{default: LOCALHOST + mainImg}} alt={title} />
        </div>
    );
};

export default ImgArrayCards;