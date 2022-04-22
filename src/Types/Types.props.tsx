export interface CatalogCardsProps{
    article:string;
    data:any[];
    imgArrayCount:boolean | undefined;
    mainImg:string;
    price:string | number | any;
    secondPrice:string | number;
    title:string;
    count:number;

}
export interface cardProps {
    card:CatalogCardsProps;
}