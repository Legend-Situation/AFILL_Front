"use client"

import React from "react";
import { Logo } from "@/ui/src/assets";
import * as s from "./style.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    {
      name: "경험카드",
      href: "/experience-card",
    },
    {
      name: "자기소개서",
      href: "/self-introduction",
    },
  ];

  return (
    <header className={s.container}>
      <Logo width={96} />
      <nav className={s.menu}>
        {navItems.map((item) => (
          <div
            key={item.href}
            className={`${s.menuItem} ${pathname === item.href ? s.active : ""}`}
            onClick={() => router.push(item.href)}
          >
            {item.name}
          </div>
        ))}
      </nav>
      <div className={s.profile}>
        <p>강민지님</p>
        <div className={s.profileIcon}></div>
      </div>
    </header>
  );
};

export default Header;