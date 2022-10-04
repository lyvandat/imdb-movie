import React from "react";
import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

// import { Container } from './styles';
const BASE_IMAGE_URL = "https://www.themoviedb.org/t/p/original";

function Card({ item }) {
  return (
    <div className="mb-5 flex flex-col text-gray-200 cursor-pointer select-none hover:text-white active:text-red-500">
      <div>
        <Image
          src={BASE_IMAGE_URL + item.backdrop_path}
          width={200}
          height={100}
          layout="responsive"
          className="max-w-full max-h-[260px] self-center pointer-events-none"
        ></Image>
      </div>

      <div className="px-3">
        <h2 className="truncate text-base font-medium mt-2">
          {item.title || item.name}
        </h2>
        <p className="truncate">{item.overview}</p>
        <div>
          <p className="inline-block mr-4 italic">
            {item.release_date || item.first_air_date}
          </p>
          <HandThumbUpIcon className="h-5 inline-block mr-2" />
          <span>{item.vote_count}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
