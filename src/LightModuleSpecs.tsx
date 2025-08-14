import { AbsoluteFill, Img, staticFile } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";
import { SpecTable } from "./SpecTable";

const { fontFamily } = loadFont();

const SPECS: [string, string][] = [
  ["Size", "86 x 35 x 125 mm (3.4 x 1.4 x 5 in)"],
  ["Weight", "200–400 g"],
  ["Battery Runtime", "Up to 8 h (2–3 h charging)"],
  ["Mounting Options", "Smart clip mounting system"],
];

export const LightModuleSpecs = () => {
  return (
    <AbsoluteFill
      className="bg-transparent text-white items-center gap-[60px]"
      style={{ fontFamily }}
    >
      <div className="w-[400px] h-[6px] bg-main-pink" />
      <h1 className="text-6xl font-bold">Light module specifications</h1>
      <Img
        className="h-[300px]"
        src={staticFile("light_module_transparent.png")}
      />
      <SpecTable specs={SPECS} />
    </AbsoluteFill>
  );
};
