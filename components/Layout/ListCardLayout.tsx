import { Col, Row } from 'antd';
import Card from '../Card';

const ListCardLayout = ({ data }: any) => {
  let _cards: JSX.Element[] = data.map((d: any, i: any) => (
    <Col key={i + 1} xs={12} sm={8} md={6} lg={4}>
      <Card
        imageSrc={`https://image.tmdb.org/t/p/w500${d.poster_path}`}
        rating={d.vote_average}
        title={d.title}
        dataMovies={d.movie_detail}
        movieOrigin={d.original_language}
      />
    </Col>
  ));
  return <Row gutter={[8, 8]}>{_cards}</Row>;
};
{
  /* <div className='grid gap-2 grid-cols-2 mobM:grid-cols-3 mobL:grid-cols-4 tablet:grid-cols-7 mobXL:grid-cols-5 laptop:grid-cols-8 laptopL:grid-cols-10'>
      {_cards}
    </div> */
}
export default ListCardLayout;
