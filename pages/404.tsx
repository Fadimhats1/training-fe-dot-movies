import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import { Button, Drawer, Typography } from 'antd';

const PageNotFound = () => {
  return (
    <PageLayout>
      <div className="flex items-center justify-center flex-1">
        <Typography.Title>404 | Page Not Found</Typography.Title>
      </div>
    </PageLayout>
  );
};

export default PageNotFound;
