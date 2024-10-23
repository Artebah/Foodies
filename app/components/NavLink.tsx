"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  href: string;
  children: string;
}

const NavLink = ({ children, href }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      className={classNames({
        navlink: true,
        active: pathname.includes(href),
      })}
      href={href}>
      {children}
    </Link>
  );
};

export { NavLink };
