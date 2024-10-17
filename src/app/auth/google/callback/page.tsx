'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const Callback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
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

  return (
    <div>
      로딩중...
    </div>
  );
};

export default Callback;