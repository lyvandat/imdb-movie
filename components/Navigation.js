import React from "react";
import { useRouter } from "next/router";
import Responses from "../Responses";

// import { Container } from './styles';

function Navigation() {
  const router = useRouter();

  return (
    <section className="bg-gray-500 p-3">
      <ul className="flex space-x-3 justify-center items-center text-gray-200 select-none">
        {Object.entries(Responses).map(([key, { title, url }]) => {
          return (
            <li
              key={key}
              className="hover:text-white active:text-red-500 cursor-pointer text-xl"
              onClick={() => router.push(`?genre=${key}`)}
            >
              {title}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Navigation;
