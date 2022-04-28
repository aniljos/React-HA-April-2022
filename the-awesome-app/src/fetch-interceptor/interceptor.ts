import fetchInterceptor from "fetch-intercept";
import { store } from '../redux/store';

export const accessTokenInterceptor = () => {

    const unregister = fetchInterceptor.register({

        request: function (url: string, config: RequestInit) {

            if (process.env.REACT_APP_PRODUCTS_URL && url.startsWith(process.env.REACT_APP_PRODUCTS_URL)) {


                //intercepting code
                let headers;
                if (config && config.headers) {
                    headers = {
                        ...config.headers
                    }
                }
                else {
                    headers = {}
                }
                headers = {
                    ...headers,
                    "authorization": "bearer " + store.getState().auth.accessToken
                }
                const updatedConfig = {
                    ...config,
                    headers
                }
                console.log("intercepting the fetch request");
                return [url, updatedConfig]
            }
            else {
                return [url, config]
            }
        }

    })

}

