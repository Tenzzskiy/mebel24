import React, {useContext, useState} from 'react';
import data1 from './../../data/categories.json'
import {AloneArray} from "../../assets/Types/Types/Types.props";
import CategoryPage from './../../components/pages/CategoryPage/index'
import {
    parseAdditionsProps, parseAllCatalogCards, parseCatalogCategoryCards, parseCatalogFilters,
    parseCatalogProps, parseCategoryFilters, parseFooter, parseMenuCards, parseNews,
    parsePodborkaPages,
    parsePodborkaProps
} from "../../hooks/parsers/parser";
import {AppWrapper} from "../../utilites/helpers/helpers";
import {
    getAdditionsProps, getAllCatalogCards,
    getCatalogCards, getCatalogFilters, getCategoryCards, getCategoryFilters, getFooterCards, getMenuCards, getNews,
    getPodborkaCards,
    getPodborkaPages
} from "../../utilites/api/api";
import HeaderSection from "../../components/sections/headerSection";
import FooterSection from "../../components/sections/FooterSection/FooterSection";




const Category_index = ({FooterCards,CatalogCategoryCards,
                            props,
    MenuCards,
                            CategoryCards,
                            PodborkaCards,
                            AdditionalCards,
                            CatalogCards,
                            CatalogFilters,
                            SliderCards,
                            News,
                            CategoryFilters}:AloneArray) => {
    const [menu,setMenu] = useState(false);
    console.log(props)
    return (

        <AppWrapper
            SEO={props}
            CategoryFilters={CategoryFilters}
                    CatalogCards={CatalogCards}
                    News={News}
                    CategoryCards={CategoryCards}
                    props={props}
                    PodborkaCards={PodborkaCards}
                    AdditionalCards={AdditionalCards}
                    CatalogFilters={CatalogFilters}
                    SliderCards={SliderCards}>
            <HeaderSection menu={menu} setMenu={setMenu} />
            <CategoryPage MenuCards={MenuCards} menu={menu} setMenu={setMenu} CatalogCategoryCards={CatalogCategoryCards}  mainImg={props.mainImg}/>
            <FooterSection FooterCards={FooterCards} />
        </AppWrapper>
    );
};

export async function getStaticPaths() {
    const PodborkaCards = await getPodborkaCards();

    // @ts-ignore
    const paths = parsePodborkaProps(PodborkaCards).map((elem) => ({ params: { id:elem.url } }))

    return {
        paths,
        fallback: false
    };
}
export async function getStaticProps(context:any) {

    const MenuCards = await getMenuCards() ;
    const Titles = await getCatalogCards();
    const PodborkaCards = await getPodborkaCards();
    const PodborkaPages = await getPodborkaPages();
    const AdditionalCards = await getAdditionsProps();
    const CatalogCards = await getAllCatalogCards();
    const CatalogFilters = await getCatalogFilters();
    const News = await getNews() ;
    const CategoryFilters = await getCategoryFilters();
    const CatalogCategoryCards = await getCategoryCards();
    const FooterCards = await getFooterCards();

    const props = parsePodborkaPages(PodborkaPages).find((elem:any) => elem.url === context.params.id)
    return {
        props: {
            FooterCards:parseFooter(FooterCards.futers.data),
            props,
            CatalogCategoryCards:parseCatalogCategoryCards(CatalogCategoryCards.straniczaPodborkis.data),
            CategoryFilters:parseCategoryFilters(CategoryFilters.filtrs.data),
            News:parseNews(News.novostis.data),
            CatalogCards:parseAllCatalogCards(CatalogCards.kartochkaKatalogas.data),
            MenuCards:parseMenuCards(MenuCards.kartochkaMenyus.data),
            CategoryCards:parseCatalogProps(Titles),
            PodborkaCards:parsePodborkaProps(PodborkaCards),
            AdditionalCards:parseAdditionsProps(AdditionalCards.straniczaDopolnitelnojMebelis.data),
            CatalogFilters:parseCatalogFilters(CatalogFilters.categoryPages.data),
        },
    }
}


    export default Category_index;