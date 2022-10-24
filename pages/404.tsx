import { Typography } from 'antd';
import PageLayout from '../components/Layout/PageLayout';

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
