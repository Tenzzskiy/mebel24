import { client } from "../../graphql/apollo";
import {
    GET_ALL_ADDITIONS_PAGES,
    GET_ALL_ADDITIONS_PROPS,
    GET_ALL_ALLCATALOG_CARDS,
    GET_ALL_CATEGORY_PAGES,
    GET_ALL_PODBORKA_CARDS,
    GET_ALL_PODBORKA_PAGES,
    GET_ALL_TITLES,
    GET_CATALOG_FILTERS,
    GET_NEWS,
    GET_NEWS_PAGES,
    GET_PODKATALOG_CARDS,
    GET_PODKATALOG_FILTERS,
    GET_PODKATALOG_PAGES,
    GET_PODKATALOG_SLIDER_CARDS,
    GET_SLIDER_CARDS,
    GET_CATEGORY_FILTERS,
    GET_CATEGORY_CARDS,
    GET_DOP_FILTERS,
    GET_DOP_CARDS,
    GET_BUCKET_SLIDER_CARDS,
    GET_ADDITIONAL_SLIDER_CARDS, GET_MENU_CARDS, GET_FOOTER_CARDS, GET_MAINPAGE_DATA,

} from "../../graphql/consstants";

export const getCatalogCards = async () => {

    const {data} = await client.query({
        query: GET_ALL_TITLES,
    });

    return data;

}
export const getCatalogPages = async () => {

    const {data} = await client.query({
        query: GET_ALL_CATEGORY_PAGES,
    });

    return data;

}
export const getPodborkaCards = async () => {

    const {data} = await client.query({
        query: GET_ALL_PODBORKA_CARDS,
    });
    return data;

}
export const getPodborkaPages = async () => {

    const {data} = await client.query({
        query: GET_ALL_PODBORKA_PAGES,
    });
    return data;

}
export const getAdditionsProps = async () => {

    const {data} = await client.query({
        query: GET_ALL_ADDITIONS_PROPS,
    });
    return data;

}
export const getAdditionsPages = async () => {

    const {data} = await client.query({
        query: GET_ALL_ADDITIONS_PAGES,
    });
    return data;

}
export const getAllCatalogCards = async () => {

    const {data} = await client.query({
        query: GET_ALL_ALLCATALOG_CARDS,
    });
    return data;

}
export const getCatalogFilters = async () => {

    const {data} = await client.query({
        query: GET_CATALOG_FILTERS,
    });
    return data;

}
export const getSliderCards = async () => {

    const {data} = await client.query({
        query: GET_SLIDER_CARDS,
    });
    return data;

}
export const getNews = async () => {

    const {data} = await client.query({
        query: GET_NEWS,
    });
    return data;

}
export const getNewsPages = async () => {

    const {data} = await client.query({
        query: GET_NEWS_PAGES,
    });
    return data;

}
export const getPodkatalogPages = async () => {

    const {data} = await client.query({
        query: GET_PODKATALOG_PAGES,
    });
    return data;

}
export const getPodkatalogFilters = async () => {

    const {data} = await client.query({
        query: GET_PODKATALOG_FILTERS,
    });
    return data;

}
export const getPodkatalogCards = async () => {

    const {data} = await client.query({
        query: GET_PODKATALOG_CARDS,
    });
    return data;

}
export const getPodkatalogSliderCards = async () => {

    const {data} = await client.query({
        query: GET_PODKATALOG_SLIDER_CARDS,
    });
    return data;

}
export const getCategoryFilters = async () => {

    const {data} = await client.query({
        query: GET_CATEGORY_FILTERS,
    });
    return data;

}
export const getCategoryCards = async () => {

    const {data} = await client.query({
        query: GET_CATEGORY_CARDS,
    });
    return data;

}
export const getDopCards = async () => {

    const {data} = await client.query({
        query: GET_DOP_CARDS,
    });
    return data;

}
export const getDopFilters = async () => {

    const {data} = await client.query({
        query: GET_DOP_FILTERS,
    });
    return data;

}
export const getBucketSliderCards = async () => {

    const {data} = await client.query({
        query: GET_BUCKET_SLIDER_CARDS,
    });
    return data;

}
export const getAdditionalSliderCards = async () => {

    const {data} = await client.query({
        query: GET_ADDITIONAL_SLIDER_CARDS,
    });
    return data;

}
export const getMenuCards = async () => {

    const {data} = await client.query({
        query: GET_MENU_CARDS,
    });
    return data;

}
export const getFooterCards = async () => {

    const {data} = await client.query({
        query: GET_FOOTER_CARDS,
    });
    return data;

}
export const getMainPageData = async () => {

    const {data} = await client.query({
        query: GET_MAINPAGE_DATA,
    });
    return data;

}
