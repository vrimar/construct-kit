import { styled } from "styled-system/jsx";
import type { HTMLStyledProps, SystemStyleObject } from "styled-system/types";
import type { WithRef } from "../../types";

interface ImageOptions {
  /**
   * How the image to fit within its bounds.
   * It maps to css `object-fit` property.
   * @type SystemStyleObject["objectFit"]
   */
  fit?: SystemStyleObject["objectFit"] | undefined;
  /**
   * How to align the image within its bounds.
   * It maps to css `object-position` property.
   * @type SystemStyleObject["objectPosition"]
   */
  align?: SystemStyleObject["objectPosition"] | undefined;
}

export interface ImageProps extends HTMLStyledProps<"img">, ImageOptions {}

const StyledImage = styled("img");

export const Image = ({
  ref,
  align,
  fit = "cover",
  ...rest
}: WithRef<ImageProps, HTMLImageElement>) => {
  return (
    <StyledImage
      ref={ref}
      objectFit={fit}
      objectPosition={align}
      {...rest}
    />
  );
};
