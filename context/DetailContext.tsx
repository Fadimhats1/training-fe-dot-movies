import { createContext } from 'react';

const DetailContext = createContext({
  detailMovie: {},
  setDetailMovie: (data: {}) => {},
});
export default DetailContext;
