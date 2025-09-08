import { AbsoluteFillTemplate } from "../components/AbsoluteFillTemplate";
import { AbsoluteFill, Img, staticFile } from "remotion";
import clsx from "clsx";
import BoxContents from "../components/BoxContents";
import { match } from "ts-pattern";
import { z } from "zod";

export const kitSchema = z.object({
  variant: z.enum(["1", "2", "3", "4"]),
});

type KitProps = z.infer<typeof kitSchema>;

export const Kit = ({ variant }: KitProps) => {
  const backgroundImageUrl = match(variant)
    .with("1", () => staticFile("/viso_kit_1_7.5.png"))
    .with("2", () => staticFile("/viso_kit_2_7.5.png"))
    .with("3", () => staticFile("/viso_kit_3_7.5.png"))
    .with("4", () => staticFile("/viso_kit_4_7.5.png"))
    .exhaustive();

  const lightModuleQuantity = match(variant)
    .with("1", () => 1)
    .with("2", () => 2)
    .with("3", () => 3)
    .with("4", () => 4)
    .exhaustive();

  return (
    <AbsoluteFillTemplate className={clsx("items-center gap-[40px]")}>
      <AbsoluteFill>
        <Img className="w-full h-full object-cover" src={backgroundImageUrl} />
      </AbsoluteFill>
      <AbsoluteFill className="flex flex-col items-end pt-[100px] pr-[150px]">
        <BoxContents
          size="sm"
          className=""
          theme="dark"
          lightModuleQuantity={lightModuleQuantity}
        />
      </AbsoluteFill>
    </AbsoluteFillTemplate>
  );
};
