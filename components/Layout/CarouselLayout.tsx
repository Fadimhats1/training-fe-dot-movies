import React from 'react';
import { Breadcrumb, Layout, Carousel, Tabs, Row, Col, Pagination } from 'antd';
import CarouselItem from '../CarouselItem';

type CarouselPropsType = {
  carouselHeight?: number;
};
const CarouselLayout = ({ carouselHeight }: CarouselPropsType) => {
  let _carouselItem: JSX.Element[] = [];
  for (let i = 0; i < 10; i++) {
    _carouselItem.push(<CarouselItem key={i + 1} carouselHeight={100} />);
  }
  return <Carousel>{_carouselItem}</Carousel>;
};

export default CarouselLayout;
