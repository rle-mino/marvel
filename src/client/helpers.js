import crypto from 'crypto';
import { API_PUBLIC, API_PRIVATE } from './constants';

const generateAuthParams = () => {
  const timestamp = Math.round(+new Date() / 1000);
  const hash = crypto.createHash('md5').update(`${timestamp}${API_PRIVATE}${API_PUBLIC}`).digest('hex');
  return `?ts=${timestamp}&apikey=${API_PUBLIC}&hash=${hash}`;
};
