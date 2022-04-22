import React, {useContext, useState} from 'react';
import styles from './Slider.module.scss'
import {Props, PropsArray} from "./Slider.props";
import {useKeenSlider} from "keen-slider/react";
import ActionCard from "../../cards/ActionCard/ActionCard";
import 'keen-slider/keen-slider.min.css'
import classNames from "classnames";
import CatalogCard from "../../cards/CatalogCard/CatalogCard";
import {AdditionalContext} from "../../../context/context";

const Slider = ({arrow=true,array,count,catalogType}: Props) => {

    const additions:any = useContext(AdditionalContext)
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: {
            perView: 'auto',
            spacing: 20,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    // @ts-ignore
    const items = (count === 1 ? array : count === 2 ? additions : null )?.map( (elem) =>
        <div key={elem.id} className={classNames("keen-slider__slide", styles.slider_card)}><ActionCard
            title={elem.title} count={count} theme={elem.theme} link={elem.url} description={elem.description}  img={elem.img}/></div>
    )

    return (
        <>
            <div className={classNames(styles.wrapper,"navigation-wrapper")}>
                <div ref={sliderRef} className={classNames(styles.slider, "keen-slider")}>
                    {items}
                    {items}
                    {items}
                    {items}
                    {items}
                    {items}
                    {items}
                    {items}
                    {items}
                    {items}
                </div>
                {arrow ?  loaded && instanceRef.current && (
                    <><div className={styles.arrows}>
                        <Arrow arrowLeft={styles.arrowLeft} arrowRight={styles.arrowRight} arrowDisabled={styles.arrowDisabled}
                               left
                               onClick={(e: any) =>
                                   e.stopPropagation() || instanceRef.current?.prev()
                               }
                               disabled={currentSlide === 0}
                        />

                        <Arrow arrowLeft={styles.arrowLeft} arrowRight={styles.arrowRight} arrowDisabled={styles.arrowDisabled}
                               onClick={(e: any) =>
                                   e.stopPropagation() || instanceRef.current?.next()
                               }
                               disabled={
                                   currentSlide ===
                                   instanceRef.current.track.details.slides.length-4
                               }
                        /> </div>
                    </>
                ) : null}
            </div>

        </>
    )
}

export function Arrow(props: {
    arrowDisabled:any;
    arrowLeft:any;
    arrowRight:any;
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabeld = props.disabled ? props.arrowDisabled : ""
    return (

        <svg width="50" height="50"
            onClick={props.onClick}
            className={`arrow ${
                props.left ? props.arrowLeft : props.arrowRight
            } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 50 50"
             fill="none"
        >
            <circle cx="25" cy="25" r="24" stroke="#B7B4AE" strokeWidth="2"/>
            {props.left && (


                    <path d="M34 26C34.5523 26 35 25.5523 35 25C35 24.4477 34.5523 24 34 24L34 26ZM14.2929 24.2929C13.9024 24.6834 13.9024 25.3166 14.2929 25.7071L20.6569 32.0711C21.0474 32.4616 21.6805 32.4616 22.0711 32.0711C22.4616 31.6805 22.4616 31.0474 22.0711 30.6569L16.4142 25L22.0711 19.3431C22.4616 18.9526 22.4616 18.3195 22.0711 17.9289C21.6805 17.5384 21.0474 17.5384 20.6569 17.9289L14.2929 24.2929ZM34 24L15 24L15 26L34 26L34 24Z" fill="#D9D7D4"/>


            )}
            {!props.left && (

               <path d="M16 24C15.4477 24 15 24.4477 15 25C15 25.5523 15.4477 26 16 26L16 24ZM35.7071 25.7071C36.0976 25.3166 36.0976 24.6834 35.7071 24.2929L29.3431 17.9289C28.9526 17.5384 28.3195 17.5384 27.9289 17.9289C27.5384 18.3195 27.5384 18.9526 27.9289 19.3431L33.5858 25L27.9289 30.6569C27.5384 31.0474 27.5384 31.6805 27.9289 32.0711C28.3195 32.4616 28.9526 32.4616 29.3431 32.0711L35.7071 25.7071ZM16 26L35 26L35 24L16 24L16 26Z" fill="#B7B4AE"/>


            )}
        </svg>

    );
}

export default Slider;