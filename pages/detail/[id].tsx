import { Tag } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Card from '../../components/Card';
import PageLayout from '../../components/Layout/PageLayout';
import { LoadingOutlined } from '@ant-design/icons';
import { useStorage } from '../../src/hooks/useStorage';
import { MoviesTypes } from '../../src/services/model/data.model';
const colors = [
  'magenta',
  'red',
  'volcano',
  'gold',
  'green',
  'lime',
  'cyan',
  'blue',
  'geekblue',
  'purple',
];

var _dataDetailMovie: MoviesTypes; // case that happened in this page is async that is not syncrhonous while assign data to _dataDetailMovie, the _dataDetailMovie didn't declare first.

const DetailMovie = () => {
  const { data: movies } = useStorage({ key: 'movies' });
  const router = useRouter();
  const idDetail = parseInt(router.query.id as string);

  if (movies) {
    movies.forEach((elementData: MoviesTypes) => {
      if (elementData.id == idDetail) {
        _dataDetailMovie = elementData;
      }
    });
  }

  if (_dataDetailMovie) {
    const TAGS = _dataDetailMovie.genres.map(
      (d: { id: number; name: string }, index: number) => (
        <Tag key={d.id} color={colors[index]}>
          {d.name}
        </Tag>
      )
    );
    const PRODUCTION_LOGO = _dataDetailMovie.production_companies.map(
      (d: { id: number; logo_path: string; name: string }) => {
        if (d.logo_path)
          return (
            <div key={d.id}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${d.logo_path}`}
                height={1000}
                width={2000}
                layout={'responsive'}
                alt={d.name}
              />
            </div>
          );
        else
          return (
            <div
              key={d.id}
              className="flex justify-center items-center w-full h-20 border-4 drop-shadow-lg"
            >
              <p className="font-bold">{d.name}</p>
            </div>
          );
      }
    );
    const productionCountryLen = _dataDetailMovie.production_countries.length;
    const PRODUCTION_COUNTRY = _dataDetailMovie.production_countries.map(
      (element, index) => (
        <p key={element.name}>
          {element.name}
          {index < productionCountryLen - 1 ? ',' : ''}
        </p>
      )
    );
    return (
      <PageLayout>
        {_dataDetailMovie ? (
          <div>
            <div className="mx-auto max-w-[160px]">
              <Card
                imageSrc={`https://image.tmdb.org/t/p/w500${_dataDetailMovie.poster_path}`}
              />
            </div>
            <div className="flex justify-center my-2">
              <h3 className="m-0 text-2xl font-bold">
                {_dataDetailMovie.title}
              </h3>
            </div>
            <div className="bg-gray-200 rounded p-4 flex flex-col gap-4 drop-shadow-md">
              <div>
                <h4 className="text-xl font-bold">Overview:</h4>
                <p>{_dataDetailMovie.overview}</p>
              </div>
              <div>
                <h4 className="text-xl font-bold">Tags:</h4>
                <div className="mt-2">{TAGS}</div>
              </div>
              <div className="flex justify-between flex-wrap gap-2">
                <div>
                  <h4 className="text-xl font-bold">Vote:</h4>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <p className="font-bold">Vote Average:</p>
                      <div className="flex">
                        <p className="text-yellow-500 font-bold">
                          {_dataDetailMovie.vote_average.toFixed(1)}
                        </p>
                        /10
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="font-bold"> Vote Count:</p>
                      <p className="text-yellow-500 font-bold">
                        {_dataDetailMovie.vote_count}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Duration:</h4>
                  <p>
                    {Math.floor(_dataDetailMovie.runtime / 60)} hours{' '}
                    {_dataDetailMovie.runtime % 60} minutes
                  </p>
                </div>
              </div>
              <div className="flex justify-between flex-wrap gap-2">
                <div>
                  <h4 className="text-xl font-bold">Production:</h4>
                  <div className="flex gap-1">
                    <p className="font-bold">Countries:</p> {PRODUCTION_COUNTRY}
                  </div>
                  <div className="flex gap-1">
                    <p className="font-bold">Release Date:</p>
                    <p className="text-yellow-500 font-bold">
                      {_dataDetailMovie.release_date.toString()}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Production Companies:</h4>
                  <div className="flex flex-col gap-4">{PRODUCTION_LOGO}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
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

export default DetailMovie;
