"use client";
import Header from '@/components/header';
import localFont from 'next/font/local';
import { usePathname } from 'next/navigation';

export const pretendard = localFont({
  src: '../../public/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHeaderVisible = pathname !== '/login';
  return (
    <html lang="en" className={pretendard.variable}>
      <body>
      {isHeaderVisible && <Header />}
      {children}</body>
    </html>
  );
}
