import axios from 'axios';

const ROOTAPI: string = 'https://api.themoviedb.org/3/';
const KEYAPI: string =
  'api_key=3c4c3212a043d7d95ef1c284b8c22a56&language=en-US';

export const getDataFromApi = async (params: string, query?: {}) => {
  let _query = '';
  if (query) {
    Object.keys(query).forEach((key) => {
      _query += '&' + key + '=' + query[key as keyof {}];
    });
  }
  try {
    const response = await axios.get(
      `${ROOTAPI}${params}?${KEYAPI}${query ? _query : ''}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
