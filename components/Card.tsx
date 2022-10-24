import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CardPropsTypes } from '../src/services/model/data.model';

const Card = ({ imageSrc, dataMovies }: CardPropsTypes) => {
  if (dataMovies) {
    return (
      <Link href={`/detail/${dataMovies.id}`}>
        <div
          className={`flex flex-col relative rounded p-1 bg-gray-200 shadow-sm hover:shadow-md ease-in-out duration-300 cursor-pointer`}
        >
          <Image
            className="rounded-t"
            src={imageSrc}
            height={280}
            width={280}
            alt="card-image"
            priority
          />
          <div className="bg-slate-700 rounded-b h-16 px-2 py-2 flex justify-center gap-1.5 items-center">
            <h4 className="text-center text-white font-bold text-md line-clamp-2 leading-tight text-md">
              {dataMovies.title}
            </h4>
          </div>
          <div className="absolute bg-black/[0.5] left-1 top-1 rounded">
            <p className="text-sm text-white px-1 py-0.5 font-bold">
              {dataMovies.vote_average != 0
                ? dataMovies.vote_average.toFixed(1)
                : '?'}
              /10
            </p>
          </div>
          <div className="absolute bg-yellow-500/[0.5] right-1 top-1 rounded">
            <p className="text-sm text-white px-2 py-0.5 font-bold">
              {dataMovies.original_language
                ? dataMovies.original_language.toUpperCase()
                : '?'}
            </p>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <div
      className={`flex flex-col relative rounded p-1 bg-gray-200 ease-in-out duration-300`}
    >
      <Image
        className="rounded-t"
        src={imageSrc}
        height={280}
        width={280}
        alt="card-image"
        priority
      />
    </div>
  );
};

export default Card;
