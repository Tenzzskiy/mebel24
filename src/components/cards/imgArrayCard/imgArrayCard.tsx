import React, {Dispatch, EventHandler, SetStateAction, useEffect, useState} from 'react';
import styles from './imgArrayCard.module.scss'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import classNames from "classnames";
import {LOCALHOST} from "../../../graphql/consstants";
import CatalogArrow from "../../icons/CatalogArrow";
import {useSelector} from "react-redux";
import {current} from "@reduxjs/toolkit";
import ImgArrayCards from "../imgArrayCards/imgArrayCards";
export interface Array{
    id:number,
    img:string;
}
export interface Props {
    data?:Array[];
    setSliderSwipe?:Dispatch<SetStateAction<string>>,
    sliderSwipe?:string;
    setCard?:any,
    complectation?:any,
    card?:any,
    firstCard?:any,
}
const handler = (e:any) => {
    e.stopPropagation();
    e.preventDefault();
}

const ImgArrayCard = ({complectation,setCard,data=[],card,firstCard}:Props) => {

    const [active,setActive] = useState(1)
    const [slider2Ref] = useKeenSlider<HTMLDivElement>({
        rubberband: false,
        breakpoints: {
            '(min-width: 1000px)': {
                slides: {
                    perView: 'auto',
                    spacing: 12,
                }
            },
        },
        slides: {
            perView: 'auto',
            spacing: 5,
        },
        loop:true,
    });
    // @ts-ignore


    const handleChangeCard = (index:number,elem:any) =>{
        setActive(index+1)
        setCard({...card,
            mainImgArray:elem.mainImgArray,
            mainImg:elem.mainImg,
            title:elem.title,
            article:elem.article,
            price:Number(elem.price),
            secondPrice:Number(elem.secondPrice),
            count:elem.count,index:index})
    }

    const combineArray = [firstCard,...data]

    const cards = combineArray.map((elem:any, index:number) =>
        <ImgArrayCards
        key={index}
      mainImg={elem.mainImg}
      title={elem.title}
        index={index}
        element={elem}
        active={active}
        handleChangeCard={handleChangeCard}
    /> )

    return (
        <>
         <div ref={slider2Ref} className={classNames(styles.array)}>
             <div
                  className={classNames('keen-slider',styles.slider)}>
                 {cards}
             </div>
         </div>
        </>
    );
};

export default ImgArrayCard;