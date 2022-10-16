import Image from 'next/image';
import React from 'react';

type CarouselItemPropsType = {
  carouselHeight?: number;
};

const CarouselItem = ({ carouselHeight = 200 }: CarouselItemPropsType) => {
  return (
    <div>
      <div className="bg-blue-500 flex">
        <div className="basis-1/3">
          <Image
            src={`https://static.wikia.nocookie.net/bandori/images/c/c3/Itou_Miku.jpg/revision/latest?cb=20210912192754`}
            width={carouselHeight}
            height={carouselHeight}
            layout="responsive"
            alt="istrinya Dimas"
            priority
          />
        </div>
        <div className="basis-2/3 py-1 px-2">
          <p>Lorem ipsum dolor, </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
