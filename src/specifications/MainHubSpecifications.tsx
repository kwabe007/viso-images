import clsx from "clsx";
import { AbsoluteFillTemplate } from "../components/AbsoluteFillTemplate";
import { SpecificationTemplate } from "./SpecificationTemplate";
import { staticFile } from "remotion";
import { SpecComp } from "../utils";

const HUB_SPECS: [string, string][] = [
  ["Dimensions", "126 x 126 x 40 mm (5 x 5 x 1.6 in)"],
  ["Weight", "300 g (0.7 lb)"],
  ["Runtime", "Up to 8 hours"],
  ["Charging Time", "1–2 hours"],
  ["Ports", "USB-C, Line in/out"],
  ["Hardware", "Stereo microphones, OLED display"],
  ["Other features", "Up to 10 connected Light Modules"],
];

export const MainHubSpecifications = ({ transparentBg }: SpecComp) => {
  return (
    <AbsoluteFillTemplate
      className={clsx(
        transparentBg ? "bg-transparent" : "bg-background",
        "text-white text-6xl items-center gap-[40px]",
      )}
      transparentBg={transparentBg}
    >
      <SpecificationTemplate
        title="Main Hub"
        imageUrl={staticFile("main_hub_diagonal_transparent.png")}
        specs={HUB_SPECS}
        imageClassName="relative left-20"
      />
    </AbsoluteFillTemplate>
  );
};
