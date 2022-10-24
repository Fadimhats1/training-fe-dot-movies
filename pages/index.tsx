import { LoadingOutlined } from '@ant-design/icons';
import { Pagination, PaginationProps, Typography } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ListCardLayout from '../components/Layout/ListCardLayout';
import PageLayout from '../components/Layout/PageLayout';
import { useStorage } from '../src/hooks/useStorage';
import { MoviesTypes } from '../src/services/model/data.model';
import { getFromApi } from '../src/services/utils';

const Home = () => {
  const router = useRouter();
  const querySearch = router.query;
  const [page, setPage] = useState(0);
  const [dataPerPage, setDataPerPage] = useState(10);
  const { data: movies, isLoading } = useStorage({
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
  const moviesDataPerPageHandle = (
    movies: MoviesTypes[],
    page: number,
    dataPerPage: number
  ) => {
    if (page > Math.floor(movies.length / dataPerPage)) {
      router.push('/404');
    }
    return movies.slice((page - 1) * dataPerPage, page * dataPerPage);
  };
  useEffect(() => {
    // to set the page using url address
    if (!querySearch.page) {
      if (router.isReady) {
        setPage(1);
      }
      return;
    }
    setPage(parseInt(querySearch.page as string));
  }, [querySearch.page, router.isReady]);
  if (!isLoading && page) {
    return (
      <PageLayout>
        <>
          <Typography.Title level={2} className="font-bold">
            Popular Movies
          </Typography.Title>
          {movies && (
            <ListCardLayout
              data={moviesDataPerPageHandle(movies, page, dataPerPage)}
            />
          )}
          <div className="flex justify-end mt-2">
            <Pagination
              responsive
              defaultCurrent={page}
              total={movies?.length}
              hideOnSinglePage
              pageSizeOptions={[10, 20, 30]}
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
