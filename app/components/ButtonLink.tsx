import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  children: string;
}

const ButtonLink = ({ children, href }: Props) => {
  return (
    <Link
      className="yellow-orange-gradient-highlight yellow-orange-gradient-highligh bg-gradient-to-r from-custom-orange to-custom-yellow px-2 py-1 rounded-md text-white shadow-md"
      href={href}>
      {children}
    </Link>
  );
};

export { ButtonLink };
