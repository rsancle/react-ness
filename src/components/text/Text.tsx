import React from "react";
import styled from "styled-components";
import { Colors } from "../../theme/colors";

export type TextProps = {
  color?: Colors;
  tag?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "p";
  size?: number;
  children?: React.ReactNode;
};

const StyledText = styled.div<TextProps>`
  font-size: ${(props) => props.size || "15"}px;
  font-family: "Press Start 2P";
  color: ${({ theme, color }) =>
    theme[color!] ? theme[color!].text : "black"};
`;

const Text: React.FC<TextProps> = ({
  color = Colors.NORMAL,
  tag,
  size,
  children,
  ...props
}) => {
  return (
    <StyledText as={tag} color={color} size={size} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
