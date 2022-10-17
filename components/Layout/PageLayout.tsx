import { Layout } from 'antd';
import Navbar from './Navbar';

const { Content, Footer } = Layout;

const PageLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Layout className="layout min-h-full laptopL:max-w-5xl mobM:max-w-sm mobL:max-w-xl tablet:max-w-2xl tabletL:max-w-4xl mx-auto drop-shadow-lg">
        <Navbar />
        <Content className="flex flex-col gap-2 my-2 px-2">{children}</Content>
      </Layout>
      <Footer className="text-center mt-8">Made with love by Fadim</Footer>
    </>
  );
};

export default PageLayout;
