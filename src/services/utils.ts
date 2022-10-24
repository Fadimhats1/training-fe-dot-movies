import { getDataFromApi } from './service/api.service';

export const getFromApi = async () => {
  let listId: number[] = [];
  for (let i = 1; i <= 3; i++) {
    const _temp = await getDataFromApi('movie/popular', { page: i });
    _temp.results.forEach((element: { id: number }) => {
      listId.push(element.id);
    });
  }

  const _totalId = listId.length; // to get detail data from movie
  let data = [];
  for (let i = 0; i < _totalId; i++) {
    const _temp = await getDataFromApi(`movie/${listId[i]}`);
    data.push(_temp);
  }
  return data;
};
