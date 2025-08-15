import { AbsoluteFill, Img, staticFile } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";
import clsx from "clsx";
import { FC } from "react";
import { SpecComp } from "../specs/spec-schema";

const { fontFamily } = loadFont();

const CONTENTS = [
  {
    quantity: 1,
    name: "Main Hub Unit",
    imageUrl: staticFile("main_module_transparent.png"),
  },
  {
    quantity: 2,
    name: "Light Modules",
    imageUrl: staticFile("light_module_transparent.png"),
  },
  { quantity: 1, name: "3.5mm Male to Male Audio Cable" },
  { quantity: 1, name: "USB-C to 3.5mm Cable Adaptor" },
  { quantity: 1, name: "User Manual" },
];

export const PackageContents: FC<SpecComp> = ({ transparentBg }) => {
  return (
    <AbsoluteFill
      className={clsx(
        transparentBg ? "bg-transparent" : "bg-background",
        "text-white items-center gap-[100px]",
      )}
      style={{ fontFamily }}
    >
      <div className="w-[800px] h-[6px] bg-main-blue" />
      <h1 className="text-8xl font-bold">What's in the box</h1>
      <div className="self-stretch flex flex-col text-7xl gap-40">
        {CONTENTS.map((item) => (
          <div className="self-stretch h-[300px] flex items-center gap-30 border-6 bg-white/10 border-white/20 rounded-full">
            <div className="aspect-square flex items-center justify-center rounded-full bg-background h-[240px] font-semibold ml-[30px]">
              {item.quantity}x
            </div>
            <div className="font-semibold">{item.name}</div>
            {item.imageUrl && (
              <div className="ml-auto size-[300px] mr-[30px]">
                <Img
                  className="w-full h-full object-contain"
                  src={item.imageUrl}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
