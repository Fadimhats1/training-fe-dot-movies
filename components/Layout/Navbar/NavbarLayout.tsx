import React from 'react';
import { Breadcrumb, Layout, Carousel, Tabs, Row, Col, Pagination } from 'antd';

const { Header } = Layout;

const NavbarLayout = ({ children }: { children: JSX.Element }) => {
  return <Header className="flex">{children}</Header>;
};

export default NavbarLayout;
