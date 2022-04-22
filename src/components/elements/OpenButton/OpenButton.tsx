import React, {Dispatch, SetStateAction, useState} from 'react';
import styles from './OpenButton.module.scss'
import classNames from "classnames";


export interface Props {
    title:string;
    setStep: Dispatch<SetStateAction<boolean>>;
    length:number;
    setArray?:Dispatch<SetStateAction<any>>;
    data?:any[];
}
const OpenButton = ({title,setStep,length}:Props) => {
    const [disabled,setDisabled] = useState(false);
    return (
        <div onClick={() => {
            setStep(false);
            setDisabled(true);
        }} className={classNames(disabled ? styles.disabled : null,styles.button)}>
            <button>{title}</button>
        </div>
    );
};

export default OpenButton;