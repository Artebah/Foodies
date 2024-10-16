import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";

const MainHeader = () => {
  return (
    <header className="max-w-4xl mx-auto px-4 h-16 text-light-yellow flex justify-between items-center gap-6">
      <Link className="flex gap-5 items-center font-bold uppercase" href="/">
        <Image src={Logo} alt="Logo" width={60} height={60} priority />
        NextLevel Food
      </Link>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
