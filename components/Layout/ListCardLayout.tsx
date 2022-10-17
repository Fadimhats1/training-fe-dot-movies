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
export default ListCardLayout;
