import { LoadingOutlined } from '@ant-design/icons';
import { Pagination, PaginationProps, Typography } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import ListCardLayout from '../components/Layout/ListCardLayout';
import PageLayout from '../components/Layout/PageLayout';
import { useLocalStorage } from '../hooks/useLocalStorage';

const getFromApi = async () => {
  let data: any[] = [];

  for (let i = 1; i <= 10; i++) {
    let _url = `https://api.themoviedb.org/3/movie/popular?api_key=3c4c3212a043d7d95ef1c284b8c22a56&language=en-US&page=${i}`;
    const _temp = await axios.get(_url);
    _temp.data.results.forEach((element: any) => {
      data.push(element);
    });
  }
  const _totalResults = data.length; // to get detail data from movie
  let newData = [];
  for (let i = 0; i < _totalResults; i++) {
    let _url = `https://api.themoviedb.org/3/movie/${data[i].id}?api_key=3c4c3212a043d7d95ef1c284b8c22a56&language=en-US`;
    const _temp = await axios.get(_url);
    newData.push({ ...data[i], movie_detail: _temp.data });
  }
  return newData;
};

const Home = () => {
  const [page, setPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);
  const { data: movies, isLoading } = useLocalStorage({
    key: 'movies',
    initialValue: async () => await getFromApi(),
  });

  const pageHandle: PaginationProps['onChange'] = (page) => {
    setPage(page);
  };

  const pageSizeHandle: PaginationProps['onShowSizeChange'] = (page, size) => {
    setPage(page);
    setDataPerPage(size);
  };

  if (!isLoading) {
    return (
      <PageLayout>
        <>
          <Typography.Title level={2} className="font-bold">
            Popular Movies
          </Typography.Title>
          {movies && (
            <ListCardLayout
              data={movies.slice((page - 1) * dataPerPage, page * dataPerPage)}
            />
          )}
          <div className="flex justify-end mt-2">
            <Pagination
              responsive
              defaultCurrent={page}
              total={movies.length}
              hideOnSinglePage
              onChange={pageHandle}
              onShowSizeChange={pageSizeHandle}
            />
          </div>
        </>
      </PageLayout>
    );
  }
  return (
    <PageLayout>
      <div className="flex-1 justify-center flex items-center">
        <LoadingOutlined style={{ fontSize: '2rem' }} />
      </div>
    </PageLayout>
  );
};

export default Home;
