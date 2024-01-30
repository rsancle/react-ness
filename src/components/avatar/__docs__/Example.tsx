import React, { FC } from "react";
import Avatar, { AvatarProps } from "../Avatar";
import { faker } from "@faker-js/faker";

const Example: FC<AvatarProps> = ({
  size = "default",
  src = faker.image.avatar(),
  isRounded = false,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Avatar size={size} src={src} isRounded={isRounded} />
    </div>
  );
};

export default Example;
