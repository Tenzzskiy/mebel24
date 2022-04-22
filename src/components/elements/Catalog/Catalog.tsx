import React, {useContext, useState} from 'react';
import styles from './Catalog.module.scss'
import FilterButton from "../FilterButton";
import CatalogCard from "../../cards/CatalogCard/CatalogCard";
import {useKeenSlider} from "keen-slider/react";
import classNames from "classnames";
import {
    AdditionalFiltersContext,
    CatalogCardsContext,
    CatalogFiltersContext,
    CategoryFiltersContext,
    PropsCardsContext, SEOContext
} from "../../../context/context";
import {useRouter} from "next/router";
import CatalogFilter from "../catalogFilter/catalogFilter";
import useWindowSize from "../../../hooks/useWindowSize";

interface element {
    url?:string;
    type?:boolean,
    imgArrayCount?:boolean,
    category?:boolean,
    addition?:boolean,
    CatalogCategoryCards?:any,
    CatalogAdditionalCards?:any,
}

const Catalog = ({CatalogAdditionalCards,addition=false,category=true,imgArrayCount = true,type=true,CatalogCategoryCards}:element) => {
    const CatalogName:any = useContext(SEOContext)
    const catalog:any = useContext(CatalogCardsContext)
    const page:any = useContext(PropsCardsContext)
    const filterData:any = useContext(CatalogFiltersContext);
    const category_filters:any = useContext(CategoryFiltersContext)
    const addition_filters:any = useContext(AdditionalFiltersContext)
    const categoryCards = typeof CatalogCategoryCards !== 'undefined' ? CatalogCategoryCards.filter((elem:any) => elem.url === page.url) : CatalogCategoryCards;
    const additionalCards = typeof CatalogAdditionalCards !== 'undefined' ? CatalogAdditionalCards.filter((elem:any) => elem.url === page.url) : CatalogAdditionalCards;
    const [currentArray,setCurrentArray] = useState(
        typeof CatalogCategoryCards !== 'undefined' ? categoryCards :
            typeof CatalogAdditionalCards !== 'undefined' ?  additionalCards :
                catalog
    );
    const startArray = typeof CatalogCategoryCards !== 'undefined' ? categoryCards :
        typeof CatalogAdditionalCards !== 'undefined' ?  additionalCards :
            catalog;
    const filters:any[] = filterData.filter((elem:any) => elem.url === page.url)
    const buttonsSlider = filters.length <1 ? filters : filters[0].title.map((elem:any,index:number) =>
        <div key={index} className={classNames(styles.slide,"keen-slider__slide number-slide1")}>
            <FilterButton category={category} pageUrl={elem.categoryPage} key={index} id={index} title={elem} />
        </div>
        )
    // const array = catalog.filter((elem:element) => elem.url === page.url )
    const catalogItems =
        // (router.asPath === `catalog/${page.url}` ? currentArray : array)
        currentArray.map((elem:any,index:number) =>
        <CatalogCard mainImgArray={elem.mainImgArray} complectation={elem.imgArray} count={elem.count} imgArrayCount={imgArrayCount}
                     key={elem.article} mainImg={elem.img} data={elem.imgArray} title={elem.title}
                     article={elem.article} price={elem.firstPrice} secondPrice={elem.secondPrice} />
    )
    const categoryItems = typeof categoryCards !== 'undefined' ?
        currentArray[0].cards.map((elem:any,index:number) => <CatalogCard mainImgArray={elem.mainImgArray} complectation={elem.imgArray} count={elem.count} imgArrayCount={imgArrayCount}  key={index} mainImg={elem.img} data={elem.imgArray} title={elem.title}
                                                                           article={elem.article} price={elem.firstPrice} secondPrice={elem.secondPrice} />)
        :
        []
    const additionalItems = typeof additionalCards !== 'undefined' ?
        currentArray[0].cards.map((elem:any,index:number) => <CatalogCard mainImgArray={elem.mainImgArray} complectation={elem.imgArray} count={elem.count} imgArrayCount={imgArrayCount}  key={index} mainImg={elem.img} data={elem.imgArray} title={elem.title}
                                                                           article={elem.article} price={elem.firstPrice} secondPrice={elem.secondPrice} />)
        :
        []


    const [ref] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: "auto",
            spacing: 0,
        },
    })

    const Category = typeof category_filters !== 'undefined' ? category_filters.filter((elem:any) => elem.url === page.url ) : []
    const Addition = typeof addition_filters !== 'undefined' ? addition_filters.filter((elem:any) => elem.url === page.url ) : []
    const categoryButtons = Category.map((elem:any,index:number) =>
        <div key={index} className={classNames(styles.slide,"keen-slider__slide number-slide1")}>
            <FilterButton category={category} link={elem.link} key={index} id={index} title={elem.title} />
        </div>
    )
    const additionButtons = Addition.map((elem:any,index:number) =>
        <div key={index} className={classNames(styles.slide,"keen-slider__slide number-slide1")}>
            <FilterButton category={category} link={elem.link} key={index} id={index} title={elem.title} />
        </div>
    )


        const lowHighSort = (array:any[]) =>{

            setCurrentArray((array:any) => [...array].sort((a,b) => Number(a.firstPrice) - Number(b.firstPrice)) )

        }
    const size = useWindowSize();
    return (
        <div className={styles.catalog} >
            {/*{currentArray.map((elem:any) => <div>{elem.firstPrice}</div>)}*/}

            <div className={styles.content}>
            <h2>{CatalogName.CatalogName}</h2>
                <div className={styles.filter}>
                    { type ?
                        <div ref={ref} className={classNames(styles.slider,"keen-slider")}>
                            <FilterButton category={category} title='Все' id="100" />
                            {buttonsSlider}
                        </div>
                        :
                        addition ?
                            <div ref={ref} className={classNames(styles.slider,"keen-slider")}>
                                <FilterButton category={category} title='Все' id="100" />
                                {additionButtons}
                            </div>
                            :
                        <div ref={ref} className={classNames(styles.slider,"keen-slider")}>
                            <FilterButton category={category} title='Все' id="100" />
                            {categoryButtons}
                        </div>
                    }
                    {
                        size.width < 720 ? <div className={styles.filterMobile}>
                            <div className={styles.sort}> Сортировать:</div>
                            <CatalogFilter lowHighSort={lowHighSort}
                                           array={currentArray}
                                           setCurrentArray={setCurrentArray}
                                           startArray={startArray}
                            />
                        </div> :  <CatalogFilter lowHighSort={lowHighSort}
                                                 array={currentArray}
                                                 setCurrentArray={setCurrentArray}
                                                 startArray={startArray}
                        />
                    }
                </div>
                <div className={styles.catalog_flex}>
                    {typeof CatalogCategoryCards !== 'undefined' ? categoryItems :
                        typeof CatalogAdditionalCards !== 'undefined' ?  additionalItems :
                            catalogItems}
                </div>
            </div>
        </div>
    );
};

export default Catalog;