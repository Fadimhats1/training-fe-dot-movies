import React from 'react';
import Image from 'next/image';

type CardPropsType = {
  imageSrc: string;
  title?: string;
  rating?: number | null;
};

const Card = ({ imageSrc, title, rating = null }: CardPropsType) => {
  return (
    <div className="flex flex-col relative rounded p-1 bg-gray-200 shadow-sm hover:shadow-md ease-in-out duration-300">
      <Image
        className="rounded-t"
        src={imageSrc}
        height={280}
        width={200}
        alt="card-image"
      />
      {title && <div className="bg-gray-500 h-16 rounded-b">{title}</div>}
      {rating != null && (
        <div className="absolute bg-black/[0.5] left-1 top-1 rounded">
          <p className="text-sm text-white p-0.5">
            {rating != 0 ? rating : '?'}/10
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
