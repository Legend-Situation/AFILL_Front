'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

const CallbackContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    const fetchData = async () => {
      const accessToken = searchParams.get('accessToken');
      const refreshToken = searchParams.get('refreshToken');
      
      if (accessToken && refreshToken) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        console.log('토큰 저장 성공:', { accessToken, refreshToken });
        router.push('/experiences');
      } else {
        console.error('토큰을 찾을 수 없습니다.');
      }
    };
    fetchData();
  }, [router, searchParams]);

  return <div>로딩중...</div>;
};

const Callback = () => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <CallbackContent />
    </Suspense>
  );
};

export default Callback;
