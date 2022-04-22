import React, {useState} from 'react';
import {useKeenSlider} from "keen-slider/react";
import classNames from "classnames";
import styles from './PreferenceSlider.module.scss';
import ActionCard from "../../../cards/ActionCard/ActionCard";
import {Arrow} from "../../Slider";
import {Slider} from "./PreferenceSlider.props";
import PreferenceCard from "../../../cards/PreferenceCard";

const PreferenceSlider = ({arrow=false,array}:Slider) => {

    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: {
            perView: 'auto',
            spacing: 15,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })
    const sliderItems = array.map((elem) => <div key={elem.id} className={classNames("keen-slider__slide number-slide1", styles.slider_card)}>
    <PreferenceCard  title={elem.title} color={elem.color} id={elem.id} description={elem.description} />
    </div> )
    return (
        <>
            <div className={classNames("navigation-wrapper",styles.wrapper)}>
                <div ref={sliderRef} className={classNames(styles.slider, "keen-slider")}>
                    {sliderItems}
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
                                   instanceRef.current.track.details.slides.length - 1
                               }
                        /> </div>
                    </>
                ) : null}
            </div>

        </>
    )

};

export default PreferenceSlider;