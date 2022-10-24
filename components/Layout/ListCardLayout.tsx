import { Col, Row } from 'antd';
import Card from '../Card';
const imageURL = 'https://image.tmdb.org/t/p/w500';
const ListCardLayout = ({ data }: any) => {
  let _cards: JSX.Element[] = data.map((_data: any, i: any) => (
    <Col key={i + 1} xs={12} sm={8} md={6} lg={4}>
      <Card imageSrc={imageURL + _data.poster_path} dataMovies={_data} />
    </Col>
  ));
  return <Row gutter={[8, 8]}>{_cards}</Row>;
};
export default ListCardLayout;
