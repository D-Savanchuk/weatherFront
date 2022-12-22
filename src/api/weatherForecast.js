import api from './api';
import axios from 'axios';


const getWeatherForecast = async (url) => {
//   const { data } = await api.post(`/api/weather/`, url);
//   const { data2 } = await api.get(`/api/weather/`);
//   console.log(data);
//   console.log(data2);
//   return data;
console.log(url.url);

const res = await axios.get('http://'+url.url);
console.log(res.data)
return res.data;
};
export { getWeatherForecast };

// api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=8ac1ba9aaa7ab31874c9b9683d9ee2dc
