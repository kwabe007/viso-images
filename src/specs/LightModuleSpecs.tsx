import { AbsoluteFill, Img, staticFile } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";
import { SpecTable } from "./SpecTable";
import { FC } from "react";
import clsx from "clsx";
import { SpecComp } from "../utils";

const { fontFamily } = loadFont();

const SPECS: [string, string][] = [
  ["Size", "86 x 35 x 125 mm (3.4 x 1.4 x 5 in)"],
  ["Weight", "200–400 g (0.4–0.9 lb)"],
  ["Battery Runtime", "Up to 8 h (2–3 h charging)"],
  ["Mounting Options", "Smart clip mounting system"],
];

export const LightModuleSpecs: FC<SpecComp> = ({ transparentBg }) => {
  return (
    <AbsoluteFill
      className={clsx(
        transparentBg ? "bg-transparent" : "bg-background",
        "text-white items-center gap-[80px]",
      )}
      style={{ fontFamily }}
    >
      <div className="w-[800px] h-[6px] bg-main-pink" />
      <h1 className="text-8xl font-bold">Light module specifications</h1>
      <Img
        className="h-[500px] rounded-[40px]"
        src={staticFile("light_module.webp")}
      />
      <SpecTable specs={SPECS} />
    </AbsoluteFill>
  );
};
