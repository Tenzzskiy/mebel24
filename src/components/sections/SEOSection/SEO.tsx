import React, {useContext} from 'react';
import styles from './SEO.module.scss'
import SEOCard from "../../cards/SEOCard/SEOCard";
import {MyImage} from "../../../hooks/MyImage";
import {SEOContext} from "../../../context/context";
import {LOCALHOST} from "../../../graphql/consstants";
const Seo = () => {
    const seoProps:any = useContext(SEOContext)
    const props= seoProps.seo;
    return (
        <>
         <div className={styles.seo}>
            <SEOCard text={props.text1} title={props.title1} />
         </div>
            <div className={styles.img} itemScope itemType="http://schema.org/ImageObject">

                <MyImage
                    //@ts-ignore
                    itemProp="contentUrl" src={{default: LOCALHOST + props.img1}} alt='' />
            </div>
            <div className={styles.seo}>
                <SEOCard text={props.text2} title={props.title2} />
            </div>
            <div className={styles.img} itemScope itemType="http://schema.org/ImageObject">
                <MyImage
                    //@ts-ignore
                    itemProp="contentUrl" src={{default:LOCALHOST +props.img2}} alt='' />
            </div>
            <div className={styles.seo}>
                <SEOCard text={props.text3} title={props.title3}/>
            </div>

            <div className={styles.seo2}>
                <SEOCard text={props.text1} title={props.title1}/>
                <div className={styles.flex}>
                    <div className={styles.item}>
                        <div className={styles.img2} itemScope itemType="http://schema.org/ImageObject">
                            <MyImage
                                //@ts-ignore
                                itemProp="contentUrl" src={{default: LOCALHOST + props.img1}} alt='' />
                        </div>
                        <SEOCard text={props.text2} title={props.title2}/>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.img2} itemScope itemType="http://schema.org/ImageObject">
                            <MyImage
                                //@ts-ignore
                                itemProp="contentUrl" src={{default: LOCALHOST + props.img2}} alt='' />
                        </div>
                        <SEOCard  text={props.text3} title={props.title3}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Seo;