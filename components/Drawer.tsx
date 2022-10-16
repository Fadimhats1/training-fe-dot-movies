import { Button, Drawer, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';

const Draw = ({
  isOpen,
  drawHandle,
}: {
  isOpen: boolean;
  drawHandle: () => void;
}) => {
  return (
    <>
      <Drawer
        title="Category"
        placement="right"
        onClose={drawHandle}
        open={isOpen}
        width={'200px'}
      >
        <Link href={'people'}>
          <Typography.Title level={5}>People</Typography.Title>
        </Link>
      </Drawer>
    </>
  );
};

export default Draw;
