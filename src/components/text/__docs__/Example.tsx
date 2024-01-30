import React, { FC } from "react";
import Text, { TextProps } from "../Text";

const Example: FC<TextProps> = ({ tag = "h1", color, size, children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Text tag={tag} color={color} size={size}>
        {children}
      </Text>
    </div>
  );
};

export default Example;
