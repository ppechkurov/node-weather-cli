import axios from 'axios';
import { getKeyValue, keys } from './storage.service.js';

function getIcon({ weather }) {
  switch (weather[0].icon.slice(0, -1)) {
    case '01':
      return 'âī¸';
    case '02':
      return 'đ¤ī¸';
    case '03':
      return 'âī¸';
    case '04':
      return 'âī¸';
    case '09':
      return 'đ§ī¸';
    case '10':
      return 'đĻī¸';
    case '11':
      return 'đŠī¸';
    case '13':
      return 'âī¸';
    case '50':
      return 'đĢī¸';
  }
}

async function getWeather(city) {
  const token = process.env.TOKEN ?? await getKeyValue(keys.token);
  if (!token) {
    throw new Error('No token is set. Use -t [API_KEY]');
  }

  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: token,
      lang: 'en',
      units: 'metric'
    }
  });

  return data;
}

export { getWeather, getIcon };