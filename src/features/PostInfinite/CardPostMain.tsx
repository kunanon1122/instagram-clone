import React, { FC } from "react";
import Image from "next/image";

import Title from "@/components/Title";
import SubTitle from "@/components/SubTitle";
import Profile from "@/components/Profile";

import { PostDetail } from "@/constant/api";

export type CardPostMainProps = {
  post: PostDetail;
  onDoubleClick: (e: React.MouseEvent) => void;
};

const CardPostMain: FC<CardPostMainProps> = ({ post, onDoubleClick }) => {
  return (
    <div className="mb-5 relative">
      <div className="flex gap-1 items-center mb-3">
        <Profile url={post.url} id={post.id} size="sm" />
        <Title>{post.id}</Title>
        <SubTitle size="sm" gray>
          •
        </SubTitle>
        <SubTitle size="sm" gray>
          {post.id}
        </SubTitle>
      </div>
      <div onDoubleClick={onDoubleClick}>
        <Image
          unoptimized
          className="rounded"
          src={post.url}
          alt={post.id}
          height={post.height || 468}
          width={468}
        />
      </div>
      <div className="flex justify-between my-2">
        <div className="flex gap-4">
          <Image
            src="/img/like-icon.png"
            alt="like-icon.png"
            height={24}
            width={24}
          />
          <Image
            className="p-0.25"
            src="/img/comment-icon.png"
            alt="comment-icon.png"
            height={24}
            width={24}
          />
          <Image
            className="p-0.25"
            src="/img/share-icon.png"
            alt="share-icon.png"
            height={24}
            width={24}
          />
        </div>
        <Image
          className="p-0.25"
          src="/img/save-icon.png"
          alt="save-icon"
          height={24}
          width={24}
        />
      </div>
      <Title>ถูกใจ 0 คน</Title>
      <div className="flex gap-1">
        <Title>{post.id}</Title>
        <SubTitle size="sm">{post.id}</SubTitle>
      </div>
      <SubTitle size="sm" gray>
        เพิ่มความคิดเห็น
      </SubTitle>
      <hr className="mt-4" />
    </div>
  );
};

export default CardPostMain;
