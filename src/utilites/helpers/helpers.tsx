
import { ReactNode} from "react";
import TypesContext, {
    AdditionalContext, AdditionalFiltersContext,
    CatalogCardsContext, CatalogFiltersContext, CategoryFiltersContext, MenuContext, NewsContext,
    PodborkiContext,
    PropsCardsContext, SEOContext, SetMenuContext, SliderCardsContext
} from '../../context/context'
import {useContext} from "react";
import Menu from "../../components/elements/Menu";
export const MathRound = (num:number) =>{
    return Math.round((num )/10) * 10
}
export function translit(word:string){
    let answer = '';
    let converter = {
        'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
        'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
        'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
        'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
        'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
        'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
        'э': 'e',    'ю': 'yu',   'я': 'ya',

        'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
        'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
        'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
        'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
        'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
        'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
        'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
    };

    for (let i = 0; i < word.length; ++i ) {
        // @ts-ignore
        if (converter[word[i]] == undefined){
            answer += word[i];
        } else {
            // @ts-ignore
            answer += converter[word[i]];
        }
    }

    return answer.toLowerCase();
}


export const convertToNumberWithSpaces = (x: number) => {
    if (isNaN(x) || x === null || x === undefined) {
        return '0';
    }

    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};



interface AppWrapper{
    children?:ReactNode;
    CategoryCards?:any;
    PodborkaCards?:any;
    AdditionalCards?:any;
    CatalogCards?:any;
    props?:any;
    CatalogFilters?:any;
    SliderCards?:any;
    News?:any;
    CategoryFilters?:any;
    AdditionalFilters?:any;
    SEO?:any;
}
export function AppWrapper({SEO,AdditionalFilters,CategoryFilters,News,SliderCards, children,props,CategoryCards,PodborkaCards,AdditionalCards,CatalogCards,CatalogFilters }:AppWrapper) {
    return (
        <TypesContext.Provider value={CategoryCards} >
            <PodborkiContext.Provider value={PodborkaCards}>
                <AdditionalContext.Provider value={AdditionalCards}>
                    <CatalogCardsContext.Provider value={CatalogCards}>
                        <PropsCardsContext.Provider value={props}>
                            <CatalogFiltersContext.Provider value={CatalogFilters}>
                                <SliderCardsContext.Provider value={SliderCards}>
                                    <NewsContext.Provider value={News}>
                                        <CategoryFiltersContext.Provider value={CategoryFilters}>
                                            <AdditionalFiltersContext.Provider value={AdditionalFilters}>
                                                    <SEOContext.Provider value={SEO}>
                                                        {children}
                                                    </SEOContext.Provider>
                                            </AdditionalFiltersContext.Provider>
                                        </CategoryFiltersContext.Provider>
                                    </NewsContext.Provider>
                                </SliderCardsContext.Provider>
                            </CatalogFiltersContext.Provider>
                        </PropsCardsContext.Provider>
                    </CatalogCardsContext.Provider>
                </AdditionalContext.Provider>
            </PodborkiContext.Provider>
        </TypesContext.Provider>
    );
}

export function useTypesContext() {
    return useContext(TypesContext);
}

export const getCartFromLocaleStorage = () => {
    let cart = [];

    if (typeof window !== 'undefined') {
        if (localStorage.getItem('store')) {
            // @ts-ignore
            const store:any = JSON.parse(localStorage.getItem('store'));

            if (store && store.length) {
                cart = store;
            }
        }
    }

    return cart;
};


export async function sendEmail(cards:any[],contactsInfo:string,type:string,totalPrice:number|string) {
    const POST_URL = '/api/email'


    const response = await fetch(POST_URL,{
        method:'POST',
        headers:{
            "Content-Type":"application/json",

        },
        body:JSON.stringify({type:type,cards:cards,phone:contactsInfo,totalPrice:totalPrice})
    })

}

export function numberWithSpaces(x:number | string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
// @ts-ignore
export const ymClick = target => {
    // @ts-ignore

    // @ts-ignore
    if (window && window.ym) {
        // @ts-ignore
        window.ym(86736157, 'reachGoal', target);
    }
};