import { AbsoluteFill, Img, staticFile } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";
import clsx from "clsx";
import { FC } from "react";
import { SpecComp } from "../specs/spec-schema";
import { Divider } from "../components/Divider";

const { fontFamily } = loadFont();

const CONTENTS = [
  {
    quantity: 1,
    name: "Main Hub Unit",
    imageUrl: staticFile("main_hub_transparent_3.png"),
    imageClassName: "-translate-x-[15%] scale-125",
  },
  {
    quantity: 2,
    name: "Light Modules",
    imageUrl: staticFile("light_module_transparent_front.png"),
    imageClassName: "scale-85",
  },
  {
    quantity: 1,
    name: "3.5mm Male to Male Audio Cable",
    imageUrl: staticFile("3.5mm.png"),
    imageClassName: "-translate-x-[5%] scale-120",
  },
  {
    quantity: 1,
    name: "USB-C to 3.5mm Cable Adaptor",
    imageUrl: staticFile("usbc_to_3.5mm.png"),
  },
  {
    quantity: 1,
    name: "User Manual",
    imageUrl: staticFile("book_filled.svg"),
    imageClassName: "scale-80",
  },
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
      <Divider className="w-[1200px] h-[32px] shrink-0" color="blue" />
      <h1 className="text-9xl font-bold text-center space-y-6">
        <div>What's in the box</div>
        <div className="text-8xl">Standard Kit</div>
      </h1>
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
                  className={clsx(
                    "w-full h-full object-contain",
                    item.imageClassName,
                  )}
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
