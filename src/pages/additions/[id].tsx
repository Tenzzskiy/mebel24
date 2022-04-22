import React, {useContext, useState} from 'react';
import {AloneArray} from "../../assets/Types/Types/Types.props";
import PodborkaPage from "../../components/pages/PodborkaPage";
import {
    getAdditionalSliderCards,
    getAdditionsPages,
    getAdditionsProps,
    getAllCatalogCards,
    getCatalogFilters, getDopCards, getDopFilters, getFooterCards, getMenuCards, getNews,
} from "../../utilites/api/api";

import {
    parseAdditionsPages,
    parseAdditionsProps,
    parseAllCatalogCards, parseCatalogAdditionalCards,
    parseCatalogFilters, parseDopFilters, parseFooter, parseMenuCards, parseNews, parseSliderCards
} from "../../hooks/parsers/parser";
import {AppWrapper} from "../../utilites/helpers/helpers";
import HeaderSection from "../../components/sections/headerSection";
import FooterSection from "../../components/sections/FooterSection/FooterSection";


const Category_index = ({parsedPages,FooterCards,MenuCards,CatalogAdditionalCards,AdditionalFilters,props,CatalogCards,CatalogFilters,SliderCards,News}:AloneArray) => {
    console.log(parsedPages)
    const [menu,setMenu] = useState(false);
    return (
        <AppWrapper SEO={parsedPages} AdditionalFilters={AdditionalFilters} props={props} CatalogCards={CatalogCards} CatalogFilters={CatalogFilters} News={News} SliderCards={SliderCards} >
            <HeaderSection menu={menu} setMenu={setMenu} />

            <PodborkaPage MenuCards={MenuCards} menu={menu} setMenu={setMenu} CatalogAdditionalCards={CatalogAdditionalCards} />
            <FooterSection FooterCards={FooterCards} />
        </AppWrapper>
    );
};

export async function getStaticPaths() {
    const data = await getAdditionsPages();
    // @ts-ignore
    const paths = parseAdditionsPages(data.straniczaDopolnitelnojMebelis.data).map((elem) => ({ params: { id:elem.url } }))
    return {
        paths,
        fallback: false
    };
}
export async function getStaticProps(context:any) {
    const Pages = await getAdditionsPages();
    const AdditionalFilters = await getDopFilters();
    const News = await getNews() ;
    const data = await getAdditionsProps();
    const CatalogCards = await getAllCatalogCards();
    const CatalogFilters = await getCatalogFilters();
    const SliderCards = await getAdditionalSliderCards();
    const CatalogAdditionalCards = await getDopCards();
    const MenuCards = await getMenuCards() ;
    const props = parseAdditionsProps(data.straniczaDopolnitelnojMebelis.data).find((elem:any) => elem.url === context.params.id)
    const FooterCards = await getFooterCards();
    const parsedPages = parseAdditionsPages(Pages.straniczaDopolnitelnojMebelis.data).find((elem:any) => elem.url === context.params.id)
    return {
        props: {props,
            parsedPages,
            FooterCards:parseFooter(FooterCards.futers.data),
            CatalogAdditionalCards:parseCatalogAdditionalCards(CatalogAdditionalCards.straniczaDopolnitelnojMebelis.data),
            AdditionalFilters:parseDopFilters(AdditionalFilters.filtrs.data),
            MenuCards:parseMenuCards(MenuCards.kartochkaMenyus.data),
            News:parseNews(News.novostis.data),
            CatalogCards:parseAllCatalogCards(CatalogCards.kartochkaKatalogas.data),
            CatalogFilters:parseCatalogFilters(CatalogFilters.categoryPages.data),
            SliderCards:parseSliderCards(SliderCards.straniczaDopolnitelnojMebelis.data)
        },
    }
}

export default Category_index;