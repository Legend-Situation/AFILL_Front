
import Header from '@/components/header';
import localFont from 'next/font/local';

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
  return (
    <html lang="en" className={pretendard.variable}>
      <body>
      <Header />{children}</body>
    </html>
  );
}
