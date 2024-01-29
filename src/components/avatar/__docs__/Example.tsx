import React, { FC } from "react";
import Avatar, { AvatarProps } from "../Avatar";
import { faker } from "@faker-js/faker";

const Example: FC<AvatarProps> = ({
  size = "default",
  src = faker.image.avatar(),
  rounded,
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
      <Avatar size={size} src={src} rounded={rounded} />
    </div>
  );
};

export default Example;
