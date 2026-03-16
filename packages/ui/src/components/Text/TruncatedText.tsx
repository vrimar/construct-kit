import { Box } from "styled-system/jsx";
import type { TextProps } from "./Text";

export const TruncatedText = ({ children, ...otherProps }: Partial<TextProps>) => {
  return (
    <Box
      whiteSpace="nowrap"
      overflow="hidden"
      textOverflow="ellipsis"
      {...otherProps}
    >
      {children}
    </Box>
  );
};
