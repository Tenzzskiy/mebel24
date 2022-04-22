import {Dispatch, SetStateAction} from "react";

export interface Array{
    id:number,
    img:string;
}
export interface Props {
    count:number;
    sliderSwipe?:string;
    imgArrayCount?:boolean;
    mainImg: string,
    title:string,
    article:string,
    price:string | number,
    secondPrice:string | number;
    data?:any;
    setSliderSwipe?: Dispatch<SetStateAction<string>>;
    name?:any;
    firstPrice?:string;
    complectation?:any[]
    mainImgArray?:any[]
}