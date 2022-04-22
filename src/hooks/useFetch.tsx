import {FC, ReactChild, useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {string} from "prop-types";

interface Props {
    url: string  ;
}
const useFetch = (url: string) =>{
    const [data,setDate] = useState<[]>([]);
    const [error,setError] = useState<boolean | null | unknown>(null);
    const [loading,setLoading] = useState<boolean | null>(true);
    useEffect( () => {

        setLoading(true);


        axios.get(url)

            .then(response => {
                setDate(response.data.data);
            });
        setLoading(false)




    },[url])
    return {loading,error,data}
}
export default useFetch;