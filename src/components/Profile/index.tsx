import React, { FC, useMemo } from "react";
import Image from "next/image";
import clsx from "clsx";

export type ProfileProps = {
  id: string;
  url: string;
  size?: "xs" | "sm" | "md" | "lg";
  cover?: boolean;
  border?: boolean;
};

const Profile: FC<ProfileProps> = ({ url, id, size, cover = true, border }) => {
  const sizeImg = useMemo(() => {
    switch (size) {
      case "xs":
        return "w-6 h-6";
      case "sm":
        return "w-8 h-8";
      case "md":
        return "w-11 h-11";
      case "lg":
        return "w-14 h-14";
      default:
        return "w-8 h-8";
    }
  }, [size]);

  return (
    <div
      className={clsx(
        "relative p-2 flex-shrink-0 flex-grow-0",
        border && "rainbow-border",
        sizeImg
      )}
    >
      <Image
        className={clsx(
          "rounded-full border-2 border-white",
          cover && "object-cover"
        )}
        priority
        unoptimized
        src={url}
        alt={`profile-${id}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default Profile;
