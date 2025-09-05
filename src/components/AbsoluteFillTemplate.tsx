import { ComponentProps } from "react";
import { AbsoluteFill } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";
import clsx from "clsx";

const { fontFamily: fontFamily } = loadFont();

interface AbsoluteFillTemplateProps
  extends ComponentProps<typeof AbsoluteFill> {
  transparentBg?: boolean;
}

export const AbsoluteFillTemplate = ({
  transparentBg = false,
  style,
  className,
  ...rest
}: AbsoluteFillTemplateProps) => {
  return (
    <AbsoluteFill
      {...rest}
      className={clsx(
        transparentBg ? "bg-transparent" : "bg-background",
        "text-white text-[4rem]",
        className,
      )}
      style={{ ...style, fontFamily }}
    />
  );
};
