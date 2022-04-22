import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import styles from "../../cards/CatalogCard/CatalogCard.module.scss";
import {LOCALHOST} from "../../../graphql/consstants";
import {useKeenSlider} from "keen-slider/react";
import {MyImage} from "../../../hooks/MyImage";

const MainImgArray = ({card}:any) => {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    useEffect(() => {
        instanceRef && instanceRef.current?.moveToIdx(0)
    }, [card])
    const [loaded, setLoaded] = useState(false)
    const [slider2Ref, instanceRef] = useKeenSlider<HTMLDivElement>({

        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },

        rubberband: false,

    })

    let cards = card.mainImgArray.map((elem:any,index:number) => {
        return(
            <div key={index}
                className={classNames('keen-slider__slide',styles.slide)}>
                <MyImage
                    //@ts-ignore
                    itemProp="contentUrl" src={{default: LOCALHOST + elem.url}} alt={card.title} />
            </div>
        )
    });
    return (
        <div className={classNames(styles.array)}>
            <div className={classNames(styles.wrapper,"navigation-wrapper")}>
                <div
                    className={classNames('keen-slider',styles.slider)}
                    ref={slider2Ref}
                >
                    {cards}


                </div>
                {loaded && instanceRef.current && (
                    <>
                       <div>
                           <Arrow
                               left
                               onClick={(e: any) =>
                                   e.stopPropagation() || instanceRef.current?.prev()
                               }
                               disabled={currentSlide === 0}
                           />
                       </div>

                        <div >
                            <Arrow
                                onClick={(e: any) =>
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                    currentSlide ===
                                    instanceRef.current.track.details.slides.length - 1
                                }
                            />
                        </div>
                    </>
                )}
                {loaded && instanceRef.current && (
                    <div className={styles.dots}>
                        {[
                            //@ts-ignore
                            ...Array(instanceRef.current.track.details.slides.length).keys(),
                        ].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx)
                                    }}
                                    className={"dot" + (currentSlide === idx ? "active_dot" : "")}
                                />
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};
function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabeld = props.disabled ? styles.disabledArrow : ""
    return (
        <div className={props.left ? styles.arrowLeft : styles.arrowRight} onClick={props.onClick}>
            <svg
                className={`arrow ${
                    props.left ? styles.leftArrow : styles.rightArrow
                } ${disabeld}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 7 12"
                width="7" height="12"
            >
                {props.left && (
                    <path opacity="0.5" d="M6 1L2 6L6 11" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                )}
                {!props.left && (
                    <path opacity="0.5" d="M1 1L5 6L1 11" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                )}
            </svg>
        </div>
    )
}

export default MainImgArray;