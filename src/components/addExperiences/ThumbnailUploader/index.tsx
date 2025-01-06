import React from 'react';
import * as s from './stlye.css';
import Button from '@/components/button';
import axios from 'axios';

interface ThumbnailUploaderProps {
  thumbnail: string | null;
  setThumbnail: React.Dispatch<React.SetStateAction<string | null>>;
  onUploadComplete: (url: string) => void;
}

const ThumbnailUploader = ({
  thumbnail,
  setThumbnail,
  onUploadComplete
}: ThumbnailUploaderProps) => {
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = await uploadImage(file);
      if (url) {
        setThumbnail(url);
        onUploadComplete(url);
      }
    }
  };

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('img', file);
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('Access token not found');
      return;
    }

    try {
      const response = await axios.post(
        'https://afill-back.hash-squad.kro.kr/upload/image',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            accessToken: accessToken
          }
        }
      );
      
      if (response.status !== 200) {
        throw new Error('이미지 업로드 실패');
      }

      return response.data.data.url;
    } catch (error) {
      console.error('업로드 중 오류 발생:', error);
    }
  };

  return (
    <div className={s.ThumbnailUpContainer}>
      <div className={s.ThumbnailUpInfo}>
        <div className={s.ThumbnailUpTextContainer}>
          <span className={s.ThumbnailUpMainText}>썸네일 업로드</span>
          <span className={s.ThumbnailUpText}>
            경험과 관련있는 이미지 파일을 업로드해주세요.
          </span>
        </div>
        <Button
          text="파일 업로드"
          color="blue"
          onClick={() => document.getElementById('fileInput')?.click()}
        />
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
      {thumbnail && (
        <img
          src={thumbnail}
          alt="썸네일 미리보기"
          className={s.ThumbnailImage}
        />
      )}
    </div>
  );
};

export default ThumbnailUploader;
