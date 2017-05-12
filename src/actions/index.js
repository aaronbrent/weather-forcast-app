import axios from 'axios'

const API_KEY = 'f3f444b5f2d0626d65c68c8e48d59127';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);



    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
