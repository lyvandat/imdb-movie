import React from "react";
import Image from "next/image";
import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

// import { Container } from './styles';

function Header() {
  return (
    <section>
      <ul>
        <li>
          <HomeIcon className="h-6" />
          <p>Home</p>
        </li>
        <li>
          <UserIcon className="h-6" />
          <p>Account</p>
        </li>
        <li>
          <PhoneIcon className="h-6" />
          <p>Contact</p>
        </li>
        <li>
          <InformationCircleIcon className="h-6" />
          <p>About</p>
        </li>
      </ul>
    </section>
  );
}

export default Header;
