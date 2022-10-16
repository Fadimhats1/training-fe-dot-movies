import React from 'react';
import { Breadcrumb, Layout, Carousel, Tabs, Row, Col, Pagination } from 'antd';

const BreadCrumb = () => {
  return (
    <Breadcrumb style={{ margin: '8px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumb;
