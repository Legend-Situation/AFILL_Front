"use client";
import Header from '@/components/header';
import { usePathname } from 'next/navigation';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHeaderVisible = pathname !== '/login';
  return (
    <html lang="en" >
      <body>
      {isHeaderVisible && <Header />}
      {children}</body>
    </html>
  );
}
