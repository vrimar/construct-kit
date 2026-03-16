import { Text, type TextProps } from "./Text";

export const TextLabel = (props: TextProps) => {
  return (
    <Text
      fontWeight="medium"
      {...props}
    />
  );
};
