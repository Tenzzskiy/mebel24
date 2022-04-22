import React, {useContext, useState} from 'react';
import {AloneArray} from "../../assets/Types/Types/Types.props";
import CatalogPage from "../../components/pages/catalogPage/CatalogPage";
import {
    parseAdditionsProps, parseAllCatalogCards, parseCatalogFilters,
    parseCatalogPaths, parseFooter, parseMenuCards, parseNews, parseSliderCards
} from "../../hooks/parsers/parser";
import {
    getAdditionsProps,
    getAllCatalogCards,
    getCatalogFilters,
    getCatalogPages, getFooterCards, getMenuCards, getNews,
    getSliderCards
} from "../../utilites/api/api";
import {AppWrapper} from "../../utilites/helpers/helpers";
import HeaderSection from "../../components/sections/headerSection";
import FooterSection from "../../components/sections/FooterSection/FooterSection";




const Category_index = ({FooterCards,MenuCards,props,AdditionalCards,CatalogCards,CatalogFilters,SliderCards,News}:AloneArray) => {
    const [menu,setMenu] = useState(false);

    return (
    <AppWrapper SEO={props} AdditionalCards={AdditionalCards} CatalogCards={CatalogCards} News={News} props={props} CatalogFilters={CatalogFilters} SliderCards={SliderCards} >
        <HeaderSection menu={menu} setMenu={setMenu} />
        <CatalogPage MenuCards={MenuCards} menu={menu} setMenu={setMenu} mainImg={props.mainImg}  />
        <FooterSection FooterCards={FooterCards}/>
    </AppWrapper>
    );
};

export async function getStaticPaths() {
    const CatalogPages = await getCatalogPages() ;
    // @ts-ignore
    const paths = parseCatalogPaths(CatalogPages.categoryPages.data).map((elem) => ({ params: { id:elem.url } }))
    return {
        paths,
        fallback: false
    };
}
export async function getStaticProps(context:any) {
    const MenuCards = await getMenuCards() ;
    const CatalogPages = await getCatalogPages() ;
    const AdditionalCards = await getAdditionsProps();
    const CatalogCards = await getAllCatalogCards();
    const CatalogFilters = await getCatalogFilters();
    const SliderCards = await getSliderCards();
    const News = await getNews() ;
    const FooterCards = await getFooterCards();
    const props = parseCatalogPaths(CatalogPages.categoryPages.data).find((elem:any) => elem.url === context.params.id)
    return {
        props: {props,
            News:parseNews(News.novostis.data),
            MenuCards:parseMenuCards(MenuCards.kartochkaMenyus.data),
            CatalogFilters:parseCatalogFilters(CatalogFilters.categoryPages.data),
            AdditionalCards:parseAdditionsProps(AdditionalCards.straniczaDopolnitelnojMebelis.data),
            CatalogCards:parseAllCatalogCards(CatalogCards.kartochkaKatalogas.data),
            SliderCards:parseSliderCards(SliderCards.categoryPages.data),
            FooterCards:parseFooter(FooterCards.futers.data),
        },

    }
}

export default Category_index;