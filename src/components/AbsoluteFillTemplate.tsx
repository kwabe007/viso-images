import { ComponentProps } from "react";
import { AbsoluteFill } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily: fontFamily } = loadFont();

export const AbsoluteFillTemplate = ({
  style,
  ...rest
}: ComponentProps<typeof AbsoluteFill>) => {
  return <AbsoluteFill {...rest} style={{ ...style, fontFamily }} />;
};
