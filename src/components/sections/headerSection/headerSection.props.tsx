import {Dispatch, SetStateAction} from "react";


export interface header {
    menu?:boolean;
    setMenu?: Dispatch<SetStateAction<boolean>>;
}