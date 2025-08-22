import clsx from "clsx";
import { AbsoluteFillTemplate } from "../components/AbsoluteFillTemplate";
import { SpecificationTemplate } from "./SpecificationTemplate";
import { staticFile } from "remotion";
import { SpecComp } from "../utils";

const SPECS: [string, string][] = [
  ["Dimensions", "86 x 35 x 125 mm (3.4 x 1.4 x 5 in)"],
  ["Weight", "300–400 g (0.7–0.9 lb)"],
  ["Runtime", "Up to 8 hours"],
  ["Charging Time", "2–4 hours"],
  ["Ports", "USB-C"],
  ["Other features", "RGB Power LEDs (9W), Smart clip mounting system"],
];

export const LightModuleSpecifications = ({ transparentBg }: SpecComp) => {
  return (
    <AbsoluteFillTemplate
      className={clsx(
        transparentBg ? "bg-transparent" : "bg-background",
        "text-white text-6xl items-center gap-[40px]",
      )}
      transparentBg={transparentBg}
    >
      <SpecificationTemplate
        title="Light Module"
        imageUrl={staticFile("light_module_diagonal_transparent.png")}
        specs={SPECS}
      />
    </AbsoluteFillTemplate>
  );
};
