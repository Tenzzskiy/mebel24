


export interface PropsArray {
    id?:string | number ;
    img:string;
    title:string;
    description:string;
    color: boolean,
    link: string;
    imgArrayCount?:boolean;
    mainImg: string,
    name:string,
    imgArray:any[],
    article:string,
    price:string | number,
    secondPrice:string | number;
    url?:string;
    firstPrice:string;



}
 export interface Props {
    catalog?:boolean;
    array:PropsArray[] ;
    name?:string;
    description?:string;
    arrow?:boolean;
    img?:string | undefined;
     catalogType?:boolean;
     count:number;

 }