import { LoadingOutlined } from '@ant-design/icons';
import { Pagination, PaginationProps, Typography } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import ListCardLayout from '../components/Layout/ListCardLayout';
import PageLayout from '../components/Layout/PageLayout';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Home = () => {
  const [page, setPage] = useState(1);
  const { data: movies, isLoading } = useLocalStorage({
    key: 'movies',
    initialValue: async () => {
      let data = [];

      for (let i = 1; i <= 10; i++) {
        let _url = `https://api.themoviedb.org/3/movie/popular?api_key=3c4c3212a043d7d95ef1c284b8c22a56&language=en-US&page=${i}`;
        const _TEMP = await axios.get(_url);
        data.push(_TEMP.data);
      }
      const _TOTALPAGE = data.length;
      let newData = [];
      for (let i = 0; i < 10; i++) {
        const _TOTALRESULTS = data[i].results.length;
        let _temp = [];
        for (let j = 0; j < _TOTALRESULTS; j++) {
          let _url = `https://api.themoviedb.org/3/movie/${data[i].results[j].id}?api_key=3c4c3212a043d7d95ef1c284b8c22a56&language=en-US`;
          const _TEMP = await axios.get(_url);
          _temp.push({ ...data[i].results[j], movie_detail: _TEMP.data });
        }
        newData.push({ ...data[i], results: _temp });
      }
      return newData;
    },
  });

  const pageHandle: PaginationProps['onChange'] = (page) => {
    setPage(page);
  };

  if (!isLoading) {
    return (
      <PageLayout>
        <>
          <Typography.Title level={2}>Popular Movies</Typography.Title>
          {movies && <ListCardLayout data={movies[page - 1]} />}
          <div className="flex justify-end mt-2">
            <Pagination
              responsive
              defaultCurrent={page}
              total={10 * 20}
              defaultPageSize={20}
              hideOnSinglePage
              pageSizeOptions={[20]}
              onChange={pageHandle}
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
