import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
// Don't forget to replace the API_KEY and dont rely on this because it can be changed anytime.
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}
