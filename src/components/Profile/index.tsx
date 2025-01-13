import React, { FC, useMemo } from "react";
import Image from "next/image";

export type ProfileProps = {
  id: string;
  url: string;
  size?: "sm" | "md" | "lg";
};

const Profile: FC<ProfileProps> = ({ url, id, size }) => {
  const sizeImg = useMemo(() => {
    switch (size) {
      case "sm":
        return 32;
      case "md":
        return 44;
      case "lg":
        return 56;
      default:
        return 32;
    }
  }, [size]);

  return (
    <Image
      className="rounded-full w-8 h-8 object-cover"
      src={url}
      alt={`profile-${id}`}
      height={sizeImg}
      width={sizeImg}
    />
  );
};

export default Profile;
