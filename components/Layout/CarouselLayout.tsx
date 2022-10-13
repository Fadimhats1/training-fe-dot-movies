import React from 'react';
import { Breadcrumb, Layout, Carousel, Tabs, Row, Col, Pagination } from 'antd';

const contentStyle: React.CSSProperties = {
  color: '#fff',
};

const CarouselLayout = () => {
  return (
    <Carousel autoplay>
      <div>
        <div className="h-36 bg-blue-500 flex items-center justify-center">
          <h3 style={contentStyle}>2</h3>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselLayout;
