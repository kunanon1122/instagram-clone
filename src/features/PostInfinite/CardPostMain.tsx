import React, { FC, useState } from "react";
import Image from "next/image";

import Title from "@/components/Title";
import SubTitle from "@/components/SubTitle";
import Profile from "@/components/Profile";

import { PostDetail } from "@/constant/api";

export type CardPostMainProps = {
  post: PostDetail;
  user: string;
  onDoubleClick: (e: React.MouseEvent) => void;
};

const CardPostMain: FC<CardPostMainProps> = ({ post, user, onDoubleClick }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [comment, setComment] = useState<string[]>([]);

  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setTimeout(() => setIsFocus(false), 150);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
  };

  const handleComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const input = target[0] as HTMLInputElement;

    if (!input.value) return;
    setComment((prev) => [...prev, input.value]);

    setTimeout(() => {
      input.value = "";
    }, 10);
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    onDoubleClick(e);
    setIsLiked(true);
  };

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
      <div onDoubleClick={handleDoubleClick}>
        <Image
          className="rounded-md"
          unoptimized
          src={post.url}
          alt={post.id}
          height={post.height || 468}
          width={468}
        />
      </div>
      <div className="flex justify-between my-2">
        <div className="flex gap-4">
          <Image
            className="cursor-pointer"
            src={isLiked ? "/img/liked-icon.png" : "/img/like-icon.png"}
            alt={isLiked ? "liked-icon" : "like-icon"}
            height={24}
            width={24}
            onClick={handleLike}
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
      <Title>ถูกใจ {isLiked ? 1 : 0} คน</Title>

      <div className="flex gap-1 items-center">
        <Title>{post.id}</Title>
        <SubTitle size="sm">{post.id}</SubTitle>
      </div>

      <SubTitle gray>ดูความคิดเห็นทั้งหมด</SubTitle>
      {comment.map((text, index) => (
        <div key={index} className="flex gap-1 items-center">
          <Title>{user}</Title>
          <SubTitle size="sm">{text}</SubTitle>
        </div>
      ))}

      <form
        className="flex justify-between gap-2 mt-2"
        onSubmit={handleComment}
      >
        <input
          className="mt-2 w-full h-5 focus:outline-none"
          placeholder="เพิ่มความคิดเห็น"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {isFocus && (
          <button
            type="submit"
            className="mt-2 text-blue-500 font-semibold text-sm"
          >
            โพสต์
          </button>
        )}
      </form>

      <hr className="mt-4" />
    </div>
  );
};

export default CardPostMain;
