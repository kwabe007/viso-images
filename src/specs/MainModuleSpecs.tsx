import { AbsoluteFill, Img, staticFile } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";
import { SpecTable } from "./SpecTable";
import { FC } from "react";
import clsx from "clsx";
import { SpecComp } from "../utils";

const { fontFamily } = loadFont();

const SPECS: [string, string][] = [
  ["Size", "126 x 126 x 40 mm (5 x 5 x 1.6 in)"],
  ["Weight", "300 g (0.7 lb)"],
  ["Battery Runtime", "Up to 8 h (2–3 h charging)"],
  ["Modules Connected", "10+ light modules"],
];

export const MainModuleSpecs: FC<SpecComp> = ({ transparentBg }) => {
  return (
    <AbsoluteFill
      className={clsx(
        transparentBg ? "bg-transparent" : "bg-background",
        "text-white items-center gap-[80px]",
      )}
      style={{ fontFamily }}
    >
      <div className="w-[800px] h-[6px] bg-main-yellow" />
      <h1 className="text-8xl font-bold">HUB specifications</h1>
      <Img
        className="h-[500px] rounded-[40px]"
        src={staticFile("main_hub_dimensions.webp")}
      />
      <SpecTable specs={SPECS} />
    </AbsoluteFill>
  );
};
