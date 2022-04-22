import React from 'react';
import PreferenceHeader from "../../elements/Preference/PreferenceHeader";
import styles from './PreferenceSection.module.scss'
import PreferenceAdditions from "../../elements/Preference/PreferenceAdditions";
import PreferenceArenda from "../../elements/Preference/PreferenceArenda";
import classNames from "classnames";
import {string} from "prop-types";
import {LOCALHOST} from "../../../graphql/consstants";
import {MyImage} from "../../../hooks/MyImage";

interface props {

    themes?:boolean;
}
const PreferenceSection = ({themes=false,}:props) =>{

    return (
        <section>
            <div className={classNames(themes  ?  styles.preference_padding : null,styles.preference)}>


                <div className={styles.content}>
                <PreferenceHeader title='Мебель в аренду' description='С доставкой и установкой по Москве и МО' />
                <PreferenceAdditions />
                    {themes ? null : <PreferenceArenda />}
                </div>
            </div>
        </section>
    )
}
// @ts-ignore
export default PreferenceSection;