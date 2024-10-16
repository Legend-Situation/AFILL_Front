"use client";

import React, { useEffect, useState } from "react";
import { Logo } from "@/ui/src/assets";
import * as s from "./style.css";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

const Header = () => {
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "경험카드", href: "/experiences" },
    { name: "자기소개서", href: "/self-introduction" },
  ];

  useEffect(() => {
    const googleAuthState = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          const { data } = await axios.get('https://afill.legend-situation.kro.kr/auth/google/authstate', {
            headers: {
              "accessToken": accessToken
            }
          });
          setUser(data);
        }
      } catch (error) {
        console.error('인증 상태 확인 중 오류 발생:', error);
        setUser(null);
      }
    }
    googleAuthState();
  }, []);

  return (
    <header className={s.container}>
      <div className={s.logo} onClick={() => router.push("/")}>
        <Logo width={96} />
      </div>
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
      {user && (
        <div className={s.profile}>
          <p className={s.profileName}>{user.data.nickname}님</p>
          <img src={user.data.profileImg} className={s.profileIcon}></img>
        </div>
      )}
    </header>
  );
};

export default Header;