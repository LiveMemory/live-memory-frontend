import axios from "axios";

export const api = axios.create({
    baseURL:'https://apimemoriaviva.azurewebsites.net/post/'
})

