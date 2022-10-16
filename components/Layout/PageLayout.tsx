import { Layout, Typography } from 'antd';
import { CaretLeftOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BreadCrumb from '../BreadCrumb';

const { Content, Footer, Sider, Header } = Layout;

const PageLayout = ({ children }: { children: JSX.Element }) => {
  const ROUTER = useRouter();
  return (
    <>
      <Layout className="layout min-h-full laptopL:max-w-5xl mobM:max-w-sm mobL:max-w-xl tablet:max-w-2xl tabletL:max-w-4xl mx-auto drop-shadow-lg">
        <Header className="px-4">
          <div className="flex justify-center items-center h-full relative">
            {ROUTER.pathname !== '/' && (
              <div className="text-white absolute left-0 text-2xl top-2.5">
                <Link href={'/'}>
                  <CaretLeftOutlined />
                </Link>
              </div>
            )}
            <div className="absolute">
              <Link href={'/'}>
                <Typography.Title
                  className="text-white m-0 cursor-pointer"
                  level={3}
                >
                  Movie List
                </Typography.Title>
              </Link>
            </div>
          </div>
        </Header>
        <Content className="flex flex-col min-h-full gap-2 my-2 px-2">
          {children}
        </Content>
      </Layout>
      <Footer className="text-center mt-8">Made with love by Fadim</Footer>
    </>
  );
};

export default PageLayout;
