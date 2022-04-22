import '../assets/globals.scss'
import type { AppProps } from 'next/app'
import Layout from "../components/layout";
import StrapiApolloProvider, {client} from "../graphql/apollo";
import { useEffect } from 'react';
import {Provider} from "react-redux";
import {store} from './../redux/index'





// @ts-ignore
function MyApp({ Component, pageProps,News}: AppProps) {
    useEffect(() => {
        window.addEventListener('beforeunload', function (e) {
            localStorage.setItem('store', JSON.stringify(store.getState().cart.itemsInCart));
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return <StrapiApolloProvider>
     <Provider store={store}>
         <Layout >
             <Component {...pageProps} />
         </Layout>
     </Provider>
  </StrapiApolloProvider>
}

export default MyApp
