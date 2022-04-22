import {FC, PropsWithChildren} from "react";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import React from 'react'
import {GRAPHQL_ENDPOINT} from './consstants'


export const client = new ApolloClient({
    uri:GRAPHQL_ENDPOINT,
    cache:new InMemoryCache()
})
export const StrapiApolloProvider:React.FC<PropsWithChildren<{}>> = ({children}) => {
    return <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
}
export default StrapiApolloProvider;