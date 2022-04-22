import React, {ReactElement} from "react";

export interface PreferenceCard {
    id:number;
    title:string;
    color:string;
    description:string;
}
export interface Slider {
   array:PreferenceCard[];
   arrow?:boolean;
}