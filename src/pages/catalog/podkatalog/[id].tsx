import React, {useContext, useState} from "react";
import {
    getAdditionsProps, getFooterCards, getMenuCards,
    getNews,
    getPodkatalogCards,
    getPodkatalogFilters,
    getPodkatalogPages,
    getPodkatalogSliderCards,

} from "../../../utilites/api/api";
import {
    parseAdditionsProps,
    parseAllPodcatalogCards, parseFooter, parseMenuCards,
    parseNews, parsePodkatalogFilters, parsePodkatalogPages, parsePodkatalogSliderCards,

} from "../../../hooks/parsers/parser";
import {AloneArray} from "../../../assets/Types/Types/Types.props";
import { AppWrapper } from "../../../utilites/helpers/helpers";
import CatalogPage from "../../../components/pages/catalogPage";
import HeaderSection from "../../../components/sections/headerSection";
import FooterSection from "../../../components/sections/FooterSection/FooterSection";

const PodborkaPage = ({FooterCards,MenuCards,props,AdditionalCards,CatalogCards,CatalogFilters,SliderCards,News}:AloneArray) => {
    const [menu,setMenu] = useState(false);
    return (
        <AppWrapper SEO={props} AdditionalCards={AdditionalCards} CatalogCards={CatalogCards} News={News} props={props} CatalogFilters={CatalogFilters} SliderCards={SliderCards} >
            <HeaderSection menu={menu} setMenu={setMenu} />
            <CatalogPage MenuCards={MenuCards} menu={menu} setMenu={setMenu} mainImg={props.mainImg}  />
            <FooterSection FooterCards={FooterCards} />
        </AppWrapper>
    );
};

export async function getStaticPaths() {
    const PodkatalogPages = await getPodkatalogPages()
    // @ts-ignore
    const paths = parsePodkatalogPages(PodkatalogPages.straniczaPodkatalogas.data).map((elem) => ({ params: { id:elem.url } }))
    return {
        paths,
        fallback: false
    };
}
export async function getStaticProps(context:any) {
    const MenuCards = await getMenuCards() ;
    const FooterCards = await getFooterCards();
    const AdditionalCards = await getAdditionsProps();
    const CatalogCards = await getPodkatalogCards();
    const CatalogFilters = await getPodkatalogFilters();
    const SliderCards = await getPodkatalogSliderCards();
    const News = await getNews() ;
    const Podkatalog = await getPodkatalogPages();
    const props = parsePodkatalogPages(Podkatalog.straniczaPodkatalogas.data).find((elem:any) => elem.url === context.params.id)
    return {
        props: {props,
            News:parseNews(News.novostis.data),
            CatalogFilters:parsePodkatalogFilters(CatalogFilters.straniczaPodkatalogas.data),
            AdditionalCards:parseAdditionsProps(AdditionalCards.straniczaDopolnitelnojMebelis.data),
            CatalogCards:parseAllPodcatalogCards(CatalogCards.kartochkaKatalogas.data),
            MenuCards:parseMenuCards(MenuCards.kartochkaMenyus.data),
            SliderCards:parsePodkatalogSliderCards(SliderCards.straniczaPodkatalogas.data),
            FooterCards:parseFooter(FooterCards.futers.data),
        },

    }
}

export default PodborkaPage;