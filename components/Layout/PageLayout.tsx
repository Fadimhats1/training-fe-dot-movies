import { Layout } from 'antd';
import NavbarLayout from './Navbar/NavbarLayout';

const { Content, Footer } = Layout;

const PageLayout = ({
  childrenNavbar,
  childrenContent,
}: {
  childrenNavbar: JSX.Element;
  childrenContent: JSX.Element;
}) => {
  return (
    <Layout className="layout min-h-full">
      <NavbarLayout>{childrenNavbar}</NavbarLayout>
      <Content className="flex flex-col min-h-full px-2">
        {childrenContent}
      </Content>
      <Footer className="text-center"></Footer>
    </Layout>
  );
};

export default PageLayout;
