import React from "react";
import Image from "next/image";
import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

// import { Container } from './styles';

function Header() {
  return (
    <section className="flex flex-col p-5 items-center sm:flex-row sm:justify-between bg-gray-700 select-none text-gray-200 ">
      <ul className="flex space-x-5 mb-5 sm:space-x-7 sm:mb-0 items-center">
        <li className="flex flex-col items-center hover:text-white active:text-red-500">
          <HomeIcon className="h-6" />
          <p>Home</p>
        </li>

        <li className="flex flex-col items-center hover:text-white active:text-red-500">
          <UserIcon className="h-6" />
          <p>Account</p>
        </li>
        <li className="flex flex-col items-center hover:text-white active:text-red-500">
          <PhoneIcon className="h-6" />
          <p>Contact</p>
        </li>
        <li className="flex flex-col items-center hover:text-white active:text-red-500">
          <InformationCircleIcon className="h-6" />
          <p>About</p>
        </li>
      </ul>
      <Image
        src="https://th.bing.com/th/id/R.96d6a3163510b47bda4d016b465fb380?rik=RdmM%2faKqGkQOUw&riu=http%3a%2f%2fimg4.wikia.nocookie.net%2f__cb20130124112826%2flogopedia%2fimages%2f8%2f8e%2fIMDB.png&ehk=Svd7%2fn42Zig1owSS1hb%2b2k8bFFdbEKW6iFyTQu2u5yw%3d&risl=&pid=ImgRaw&r=0"
        width={80}
        height={500}
        layout="fixed"
        className="hover:brightness-110"
      />
    </section>
  );
}

export default Header;
