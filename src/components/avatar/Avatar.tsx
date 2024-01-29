import React from "react";
import styled from "styled-components";

export type AvatarProps = {
  size?: "default" | "small" | "medium" | "large";
  isRounded: boolean;
  src: string;
};

enum AvatarSize {
  "default" = "32px",
  "small" = "16px",
  "medium" = "48px",
  "large" = "64px",
}

const StyledAvatar = styled.img<AvatarProps>`
  border-radius: ${(props) => (props.isRounded ? "50%" : "0%")};
  width: ${(props) => AvatarSize[props.size!]};
  height: ${(props) => AvatarSize[props.size!]};
`;

const Avatar: React.FC<AvatarProps> = ({
  size,
  isRounded = false,
  src,
  ...props
}) => <StyledAvatar src={src} size={size} isRounded={isRounded} {...props} />;

export default Avatar;
