import axios from 'axios';

const API_KEY ='c629bc6d7faca689635007d6b1da0dc9';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`
	const request = axios.get(url);
	render {
		type: FETCH_WEATHER,
		payload: request
	};
}