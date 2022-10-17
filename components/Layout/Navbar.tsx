import { CaretLeftOutlined } from '@ant-design/icons';
import { Layout, Typography } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { Content, Footer, Sider, Header } = Layout;

const Navbar = () => {
  const ROUTER = useRouter();
  return (
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
  );
};

export default Navbar;
