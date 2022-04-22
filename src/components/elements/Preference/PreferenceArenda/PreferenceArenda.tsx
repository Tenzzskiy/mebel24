import React, {useContext} from 'react';
import styles from './PreferenceArenda.module.scss'
import PreferenceArendaCard from "../../../cards/PreferenceArendaCard";
import ElseButton from "../../ElseButton/ElseButton";
import classNames from "classnames";
import TypesContext from './../../../../context/context'

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

    const cards =   array.map((elem:element) => <PreferenceArendaCard url={elem.url} name={name} key={elem.id} title={elem.title} img={elem.img}  />)

    return (
        <div className={classNames(styles.arenda)}>
            <div className={styles.title}>Сдаём в аренду </div>
            <div className={styles.content}>
                {cards}{cards}{cards}{cards}{cards}{cards}
                {cards}{cards}{cards}{cards}{cards}{cards}
                {cards}{cards}{cards}{cards}{cards}{cards}
                {cards}{cards}{cards}{cards}{cards}{cards}
            </div>
            <div className={styles.button}>
                <ElseButton title='Показать еще 16 категорий' />
            </div>
        </div>
    );
};

export default PreferenceArenda;