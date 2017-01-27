import 'universal-fetch';
import crypto from 'crypto';
import { API_PUBLIC, API_PRIVATE, BASE_URL } from './constants';

const generateAuthParams = () => {
  const timestamp = Math.round(+new Date() / 1000);
  const hash = crypto.createHash('md5').update(`${timestamp}${API_PRIVATE}${API_PUBLIC}`).digest('hex');
  return `?ts=${timestamp}&apikey=${API_PUBLIC}&hash=${hash}`;
};

const checkData = (data) => {
  if (data.status === 200) {
    return data.json ? data.json() : null;
  } throw new Error('an error occured');
};

const requestJson = (uri) => fetch(`${BASE_URL}${uri}${generateAuthParams()}`)
    .then(checkData)
    .catch(console.error);

export default requestJson;
