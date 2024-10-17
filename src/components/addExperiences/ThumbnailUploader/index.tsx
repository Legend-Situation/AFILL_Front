import React from "react";
import * as s from "./stlye.css";
import Button from "@/components/button";

interface ThumbnailUploaderProps {
  thumbnail: string | null;
  setThumbnail: React.Dispatch<React.SetStateAction<string | null>>;
}

const ThumbnailUploader = ({ thumbnail, setThumbnail }: ThumbnailUploaderProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setThumbnail(URL.createObjectURL(file));
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
          onClick={() => document.getElementById("fileInput")?.click()}
        />
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
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
