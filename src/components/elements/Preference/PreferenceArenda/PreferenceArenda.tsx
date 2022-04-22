import React, {useContext, useState} from 'react';
import styles from './PreferenceArenda.module.scss'
import PreferenceArendaCard from "../../../cards/PreferenceArendaCard";
import ElseButton from "../../ElseButton/ElseButton";
import classNames from "classnames";
import TypesContext from './../../../../context/context'
import useWindowSize from "../../../../hooks/useWindowSize";

interface Arenda {
    name?:string | undefined;
}
interface element {
    url: string | undefined;
    id:string | number;
    title:string;
    img:string;
}
const PreferenceArenda = ({name}:Arenda) => {
    const array:any = useContext(TypesContext);
    const size = useWindowSize();
    const [step,setStep] = useState(size.width < 720 ? 8 : array.length)
    const cards =   array.slice(0,step).map((elem:element) => <PreferenceArendaCard url={elem.url} name={name} key={elem.id} title={elem.title} img={elem.img}  />)

    return (
        <div className={classNames(styles.arenda)}>
            <div className={styles.title}>Сдаём в аренду </div>
            <div className={styles.content}>
                {cards}{cards}{cards}{cards}{cards}{cards}
                {cards}{cards}{cards}{cards}{cards}{cards}
                {cards}{cards}{cards}{cards}{cards}{cards}
                {cards}{cards}{cards}{cards}{cards}{cards}
            </div>
            <div className={classNames(step !== array.length ? null : styles.disable,styles.button)} onClick={() => setStep(array.length)}>
                <ElseButton title='Показать еще 16 категорий' />
            </div>
        </div>
    );
};

export default PreferenceArenda;