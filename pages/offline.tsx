import { Typography } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PageLayout from '../components/Layout/PageLayout';

const OfflinePage = () => {
  const [showDesc, setShowDesc] = useState<JSX.Element>(<></>);
  const router = useRouter();
  useEffect(() => {
    if (navigator.onLine && router.isReady) {
      setShowDesc(
        <Typography.Title>
          Please wait, You are being redirected to homepage...
        </Typography.Title>
      );
      setTimeout(() => router.push('/'), 3000);
    } else if (!navigator.onLine)
      setShowDesc(
        <Typography.Title>
          You are offline. Please connect to the internet.
        </Typography.Title>
      );
  }, []);
  return (
    <PageLayout>
      <div className="flex items-center justify-center flex-1 text-center">
        {showDesc}
      </div>
    </PageLayout>
  );
};

export default OfflinePage;
