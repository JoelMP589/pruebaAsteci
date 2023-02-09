import axios from "axios";

export const climateApi = axios.create({
    baseURL: 'https://api.datos.gob.mx/v1/condiciones-atmosfericas',
});