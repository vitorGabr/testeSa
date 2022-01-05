
import axios from "axios";

export function getAPIClient(ctx?: any) {

    const baseURL = 'https://segware-book-api.segware.io/api'

    const api = axios.create({
        baseURL: baseURL,
    });


    return api;

}