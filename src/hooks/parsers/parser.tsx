import {element} from "prop-types";

interface parseCatalogPaths{
    id?:number | string;
    title?:string;
    img?:string;
    url?:string;
    attributes?:any;

}
export const parseCatalogPaths = (data:any) => {

    return data.map((card: parseCatalogPaths) => {
        return {
            id: card.attributes.metaData.id,
            title: card.attributes.metaData.h1,
            description: card.attributes.metaData.description,
            metaHead: card.attributes.metaData.metaHead,
            metaDescription: card.attributes.metaData.metaDescription,
            mainImg: card.attributes.metaData.mainImg.data.attributes.url,
            url: card.attributes.url,
            cardID:card.attributes.kategorii.data.id,
            CatalogName:card.attributes.CatalogName,
            seo:{
                text1:card.attributes.SEO.text1,
                text2:card.attributes.SEO.text2,
                text3:card.attributes.SEO.text3,
                title1:card.attributes.SEO.title1,
                title2:card.attributes.SEO.title2,
                title3:card.attributes.SEO.title3,
                img1:card.attributes.SEO.img1.data.attributes.url,
                img2:card.attributes.SEO.img2.data.attributes.url,
            }
        }
    });
}
export const parseCatalogProps = (data:any) => {

    return data.kategoriis.data.map((card: parseCatalogPaths) => {
        return {
            id: card.id,
            title: card.attributes.title,
            img: card.attributes.img.data.attributes.url,
            url: card.attributes.kategoriya.data.attributes.url
        }
    });
}



export const parsePodborkaProps = (data:any) => {

    return data.podborkas.data.map((card: parseCatalogPaths) => {
        return {
            id: card.attributes.PodborkaCard[0].id,
            title: card.attributes.PodborkaCard[0].title,
            img: card.attributes.PodborkaCard[0].img.data.attributes.url,
            description:card.attributes.PodborkaCard[0].description,
            url: card.attributes.card_podborki.data.attributes.url,

        }
    });
}
export const parsePodborkaPages = (data:any) => {

    return data.straniczaPodborkis.data.map((card: parseCatalogPaths) => {
        return {
                url:card.attributes.url,
                mainImg:card.attributes.metaData.mainImg.data.attributes.url,
                description:card.attributes.metaData.description,
                title:card.attributes.metaData.h1,
                metaHead:card.attributes.metaData.metaHead,
                metaDescription:card.attributes.metaData.metaDescription,
                id:card.attributes.metaData.id,
            CatalogName:card.attributes.CatalogName,
            seo:{
                text1:card.attributes.SEO.text1,
                text2:card.attributes.SEO.text2,
                text3:card.attributes.SEO.text3,
                title1:card.attributes.SEO.title1,
                title2:card.attributes.SEO.title2,
                title3:card.attributes.SEO.title3,
                img1:card.attributes.SEO.img1.data.attributes.url,
                img2:card.attributes.SEO.img2.data.attributes.url,
            }
        }
    });
}
export const parseMainPageData = (data:any) => {

    return {
                    mainImg:data.mainPage.data.attributes.metaData.mainImg.data.attributes.url,
                    description:data.mainPage.data.attributes.metaData.description,
                    title:data.mainPage.data.attributes.metaData.h1,
                    metaHead:data.mainPage.data.attributes.metaData.metaHead,
                    metaDescription:data.mainPage.data.attributes.metaData.metaDescription,
                    seo:{
                        text1:data.mainPage.data.attributes.SEO.text1,
                        text2:data.mainPage.data.attributes.SEO.text2,
                        text3:data.mainPage.data.attributes.SEO.text3,
                        title1:data.mainPage.data.attributes.SEO.title1,
                        title2:data.mainPage.data.attributes.SEO.title2,
                        title3:data.mainPage.data.attributes.SEO.title3,
                        img1:data.mainPage.data.attributes.SEO.img1.data.attributes.url,
                        img2:data.mainPage.data.attributes.SEO.img2.data.attributes.url,
                    }
    }

    // data.mainPage.data.map((card: parseCatalogPaths) => {
    //     return {
    //             url:card.attributes.url,
    //             mainImg:card.attributes.metaData.mainImg.data.attributes.url,
    //             description:card.attributes.metaData.description,
    //             h1:card.attributes.metaData.h1,
    //             metaHead:card.attributes.metaData.metaHead,
    //             metaDescription:card.attributes.metaData.metaDescription,
    //             seo:{
    //                 text1:card.attributes.SEO.text1,
    //                 text2:card.attributes.SEO.text2,
    //                 text4:card.attributes.SEO.text3,
    //                 title1:card.attributes.SEO.title1,
    //                 title2:card.attributes.SEO.title2,
    //                 title3:card.attributes.SEO.title3,
    //                 img1:card.attributes.SEO.img1.data.attributes.url,
    //                 img2:card.attributes.SEO.img2.data.attributes.url,
    //             }
    //
    //     }
    // });
}
export const parseAdditionsProps = (data:any) => {

    return data.map((card: parseCatalogPaths) => {
        return {
            url:card.attributes.url,
            theme:card.attributes.dopolnitelnaya_mebel.data.attributes.Card[0].theme,
            description:card.attributes.dopolnitelnaya_mebel.data.attributes.Card[0].description,
            title:card.attributes.dopolnitelnaya_mebel.data.attributes.Card[0].title,
            id:card.attributes.dopolnitelnaya_mebel.data.attributes.Card[0].id,
            img:card.attributes.dopolnitelnaya_mebel.data.attributes.Card[0].img.data.attributes.url,
        }
    });
}
export const parseAdditionsPages = (data:any) => {

    return data.map((card: parseCatalogPaths) => {
        return {
            url:card.attributes.url,
            description:card.attributes.metaData[0].description,
            metaHead:card.attributes.metaData[0].metaHead,
            metaDescription:card.attributes.metaData[0].metaDescription,
            title:card.attributes.metaData[0].h1,
            mainImg:card.attributes.metaData[0].mainImg.data.attributes.url,
            CatalogName:card.attributes.CatalogName,
            seo:{
                text1:card.attributes.SEO.text1,
                text2:card.attributes.SEO.text2,
                text3:card.attributes.SEO.text3,
                title1:card.attributes.SEO.title1,
                title2:card.attributes.SEO.title2,
                title3:card.attributes.SEO.title3,
                img1:card.attributes.SEO.img1.data.attributes.url,
                img2:card.attributes.SEO.img2.data.attributes.url,
            }
        }
    });
}
export const parseAllCatalogCards = (data:any) => {

   if (typeof data !== 'undefined'){
       return data.map((card: parseCatalogPaths) => {
           return {
               title:card.attributes.CatalogCards[0].title,
               article:card.attributes.CatalogCards[0].article,
               firstPrice:card.attributes.CatalogCards[0].firstPrice,
               secondPrice:card.attributes.CatalogCards[0].secondPrice,
               img:card.attributes.CatalogCards[0].img.data.attributes.url,
               mainImgArray:card.attributes.CatalogCards[0].mainImgArray.data.map((elem:any) =>{
                   return{
                       url:elem.attributes.url
                   }
               }),
               imgArray:card.attributes.CatalogCards[0].Complectation.length !== 0 ?
                   card.attributes.CatalogCards[0].Complectation.map((elem:any) => {
                   return{
                       mainImgArray:elem.mainImgArray.data.map((elem:any) =>{
                           return{
                               url:elem.attributes.url
                           }
                       }),
                       title:elem.title,
                       article:elem.article,
                       price:elem.firstPrice,
                       secondPrice:elem.secondPrice,
                       mainImg:elem.img.data[0].attributes.url,
                       count:elem.count
                   }
               }) : [],
               url:card.attributes.stranicza_kategorii.data.attributes.url,
               count:card.attributes.CatalogCards[0].count
           }
       });
   } else {
       return [];
   }
}
export const parseCatalogFilters = (data:any) => {

   if (typeof data !== 'undefined'){
       return data.map((card: parseCatalogPaths) => {
           return {
               title:card.attributes.filtrs.data.map((elem:any) => elem.attributes.Filter[0].title),
               url:card.attributes.url,
                link:card.attributes.filtrs.data.map((elem:any) => elem.attributes.stranicza_podkataloga.data.attributes.url)
           }
       });
   } else {
       return [];
   }
}
export const parseSliderCards = (data:any) => {

   if (typeof data !== 'undefined'){
       return data.map((card: parseCatalogPaths) => {
           return {
                url:card.attributes.url,
                slides:card.attributes.kartochka_slajderas.data.map((elem:any) => elem.attributes.SliderCard),
           }
       });
   } else {
       return [];
   }
}

export const parseSliderCardsData = (data:any) => {
   if (typeof data !== 'undefined' || data == []){
       return data[0].slides.map((card: parseCatalogPaths | any) => {
           return {
                article:card[0].article,
                firstPrice:card[0].firstPrice,
                secondPrice:card[0].secondPrice,
                title:card[0].title,
                count:card[0].count,
                mainImg:card[0].img.data.attributes.url,
               mainImgArray:card[0].mainImgArray.data.map((elem:any) =>{
                   return{
                       url:elem.attributes.url
                   }
               }),
                imgArray:card[0].Complectation.length !== 0 ?
                    card[0].Complectation.map((elem:any) => {
                        return{
                            mainImgArray:elem.mainImgArray.data.map((elem:any) =>{
                                return{
                                    url:elem.attributes.url
                                }
                            }),
                            title:elem.title,
                            article:elem.article,
                            price:elem.firstPrice,
                            secondPrice:elem.secondPrice,
                            mainImg:elem.img.data[0].attributes.url,
                            count:elem.count
                        }
                    }) : [],

           }
       });
   } else {
       return [];
   }
}

export const parseNews = (data:any) => {

   if (typeof data !== 'undefined'){
       return data.map((card: parseCatalogPaths | any) => {
           return {
               date:card.attributes.card[0].date,
               url:card.attributes.stranicza_novostej.data.attributes.url,
               title:card.attributes.card[0].title,
               description:card.attributes.card[0].description,
               prevLink:card.attributes.card[0].prevLink,
               prevTitle:card.attributes.card[0].prevTitle,
               nextLink:card.attributes.card[0].nextLink,
               nextTitle:card.attributes.card[0].nextTitle,
               img:card.attributes.card[0].img.data.attributes.url,
               prevImg:card.attributes.card[0].prevImg.data.attributes.url,
               nextImg:card.attributes.card[0].nextImg.data.attributes.url,
               imgArray:card.attributes.card[0].imgArray.data.map((elem:any) => elem.attributes.url),

           }
       });
   } else {
       return [];
   }
}
export const parseNewsPages = (data:any) => {
   if (typeof data !== 'undefined'){
       return data.map((card: parseCatalogPaths | any) => {
           return {
               url:card.attributes.stranicza_novostej.data.attributes.url,

           }
       });
   } else {
       return [];
   }
}
export const parsePodkatalogPages = (data:any) => {
   if (typeof data !== 'undefined'){
       return data.map((card: parseCatalogPaths | any) => {
           return {
            url:card.attributes.url,
            mainImg:card.attributes.metaData[0].mainImg.data.attributes.url,
            id:card.attributes.metaData[0].id,
            metaHead:card.attributes.metaData[0].metaHead,
               title: card.attributes.metaData[0].h1,
               description: card.attributes.metaData[0].description,
            metaDescription:card.attributes.metaData[0].metaDescription,
               CatalogName:card.attributes.CatalogName,
               seo:{
                   text1:card.attributes.SEO.text1,
                   text2:card.attributes.SEO.text2,
                   text3:card.attributes.SEO.text3,
                   title1:card.attributes.SEO.title1,
                   title2:card.attributes.SEO.title2,
                   title3:card.attributes.SEO.title3,
                   img1:card.attributes.SEO.img1.data.attributes.url,
                   img2:card.attributes.SEO.img2.data.attributes.url,
               }
           }
       });
   } else {
       return [];
   }
}
export const parsePodkatalogProps = (data:any) => {
   if (typeof data !== 'undefined'){
       return data.map((card: parseCatalogPaths | any) => {
           return {
               id: card.attributes.metaData.id,
               title: card.attributes.metaData.h1,
               description: card.attributes.metaData.description,
               metaHead: card.attributes.metaData.metaHead,
               metaDescription: card.attributes.metaData.metaDescription,
               mainImg: card.attributes.metaData.mainImg.data.attributes.url,
               url: card.attributes.url,


           }
       });
   } else {
       return [];
   }
}
export const parsePodkatalogFilters = (data:any) => {
   if (typeof data !== 'undefined'){
       return data.map((card: parseCatalogPaths | any) => {
           return {
               title:card.attributes.filtrs.data.map((elem:any) => elem.attributes.Filter[0].title),
               url:card.attributes.url,
               link:card.attributes.url,
                categoryPage:card.attributes.stranicza_kategorii.data.attributes.url,

           }
       });
   } else {
       return [];
   }
}
export const parseAllPodcatalogCards = (data:any) => {

    if (typeof data !== 'undefined'){
        return data.map((card: parseCatalogPaths) => {
            return {
                title:card.attributes.CatalogCards[0].title,
                article:card.attributes.CatalogCards[0].article,
                firstPrice:card.attributes.CatalogCards[0].firstPrice,
                secondPrice:card.attributes.CatalogCards[0].secondPrice,
                img:card.attributes.CatalogCards[0].img.data.attributes.url,
                mainImgArray:card.attributes.CatalogCards[0].mainImgArray.data.map((elem:any) =>{
                    return{
                        url:elem.attributes.url
                    }
                }),
                imgArray:card.attributes.CatalogCards[0].Complectation.length !== 0 ?
                    card.attributes.CatalogCards[0].Complectation.map((elem:any) => {
                        return{
                            mainImgArray:elem.mainImgArray.data.map((elem:any) =>{
                                return{
                                    url:elem.attributes.url
                                }
                            }),
                            title:elem.title,
                            article:elem.article,
                            price:elem.firstPrice,
                            secondPrice:elem.secondPrice,
                            mainImg:elem.img.data[0].attributes.url,
                            count:elem.count
                        }
                    }) : [],
                url:card.attributes.stranicza_podkatalogas.data.attributes.url,
                count:card.attributes.CatalogCards[0].count
            }
        });
    } else {
        return [];
    }
}
export const parseCatalogCategoryCards = (data:any) => {
    if (typeof data !== 'undefined'){
        return data.map((card: parseCatalogPaths) => {
            return {

                url:card.attributes.url,
                cards:
                        card.attributes.kartochka_katalogases.data.length !== 0 ?
                            card.attributes.kartochka_katalogases.data.map((elem: any, index: number) => {
                                    return {
                                        title: elem.attributes.CatalogCards[0].title,
                                        article: elem.attributes.CatalogCards[0].article,
                                        firstPrice: elem.attributes.CatalogCards[0].firstPrice,
                                        secondPrice: elem.attributes.CatalogCards[0].secondPrice,
                                        img: elem.attributes.CatalogCards[0].img.data.attributes.url,
                                        mainImgArray:elem.attributes.CatalogCards[0].mainImgArray.data.map((elem:any) =>{
                                            return{
                                                url:elem.attributes.url
                                            }
                                        }),
                                        imgArray:elem.attributes.CatalogCards[0].Complectation.length !== 0 ?
                                            elem.attributes.CatalogCards[0].Complectation.map((elem:any) => {
                                                return{
                                                    mainImgArray:elem.mainImgArray.data.map((elem:any) =>{
                                                        return{
                                                            url:elem.attributes.url
                                                        }
                                                    }),
                                                    title:elem.title,
                                                    article:elem.article,
                                                    price:elem.firstPrice,
                                                    secondPrice:elem.secondPrice,
                                                    mainImg:elem.img.data[0].attributes.url,
                                                    count:elem.count
                                                }
                                            }) : [],
                                        count:elem.attributes.CatalogCards[0].count
                                    }
                                }
                            )
        :
            [],

            }
        });
    } else {
        return [];
    }
}
export const parseCatalogAdditionalCards = (data:any) => {

    if (typeof data !== 'undefined'){
        return data.map((card: parseCatalogPaths) => {
            return {

                url:card.attributes.url,
                cards:
                        card.attributes.kartochka_katalogas.data.length !== 0 ?
                            card.attributes.kartochka_katalogas.data.map((elem: any, index: number) => {
                                    return {
                                        title: elem.attributes.CatalogCards[0].title,
                                        article: elem.attributes.CatalogCards[0].article,
                                        firstPrice: elem.attributes.CatalogCards[0].firstPrice,
                                        secondPrice: elem.attributes.CatalogCards[0].secondPrice,
                                        img: elem.attributes.CatalogCards[0].img.data.attributes.url,
                                        mainImgArray:elem.attributes.CatalogCards[0].mainImgArray.data.map((elem:any) =>{
                                            return{
                                                url:elem.attributes.url
                                            }
                                        }),
                                        imgArray:elem.attributes.CatalogCards[0].Complectation.length !== 0 ?
                                            elem.attributes.CatalogCards[0].Complectation.map((elem:any) => {
                                                return{
                                                    mainImgArray:elem.mainImgArray.data.map((elem:any) =>{
                                                        return{
                                                            url:elem.attributes.url
                                                        }
                                                    }),
                                                    title:elem.title,
                                                    article:elem.article,
                                                    price:elem.firstPrice,
                                                    secondPrice:elem.secondPrice,
                                                    mainImg:elem.img.data[0].attributes.url,
                                                    count:elem.count
                                                }
                                            }) : [],
                                        count:elem.attributes.CatalogCards[0].count
                                    }
                                }
                            )
        :
            [],

            }
        });
    } else {
        return [];
    }
}

export const parsePodkatalogSliderCards = (data:any) => {

    if (typeof data !== 'undefined'){
        return data.map((card: parseCatalogPaths) => {
            return {
                url:card.attributes.url,
                slides:card.attributes.kartochka_slajderas.data.map((elem:any) => elem.attributes.SliderCard),
            }
        });
    } else {
        return [];
    }
}
export const parseCategoryFilters = (data:any) => {

    if (typeof data !== 'undefined'){
        return data.map((card: parseCatalogPaths) => {
            return {
                url:card.attributes.stranicza_podborkis.data.length !==0 ? card.attributes.stranicza_podborkis.data[0].attributes.url
                    : card.attributes.stranicza_podborkis.data,
                title: card.attributes.Filter[0].title,
                link:card.attributes.Filter[0].url

            }
        });
    } else {
        return [];
    }
}
export const parseDopFilters = (data:any) => {
    if (typeof data !== 'undefined'){
        return data.map((card: parseCatalogPaths) => {
            return {
                url:card.attributes.stranicza_dopolnitelnoj_mebelis.data.length !==0 ? card.attributes.stranicza_dopolnitelnoj_mebelis.data[0].attributes.url
                    : card.attributes.stranicza_dopolnitelnoj_mebelis.data,
                title: card.attributes.Filter[0].title,
                link:card.attributes.Filter[0].url

            }
        });
    } else {
        return [];
    }
}
export const parseMenuCards = (data:any) => {
    if (typeof data !== 'undefined'){
        return data.map((card: parseCatalogPaths) => {
            return {
            url:card.attributes.stranicza_kategorii.data.attributes.url,
            title:card.attributes.MenuCard[0].title,
            img:card.attributes.MenuCard[0].img.data[0].attributes.url,
            }
        });
    } else {
        return [];
    }
}
export const parseFooter = (data:any) => {
    if (typeof data !== 'undefined'){
        return data.map((card: parseCatalogPaths) => {
            return {
            column:card.attributes.FooterCard[0].column,
            title:card.attributes.FooterCard[0].title,
            id:card.id,
            }
        });
    } else {
        return [];
    }
}




