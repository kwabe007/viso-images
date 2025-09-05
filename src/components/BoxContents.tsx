import { Img, staticFile } from "remotion";
import clsx from "clsx";
import { match } from "ts-pattern";

interface BoxContentsProps {
  size?: "sm" | "lg";
  theme?: "light" | "dark";
  lightModuleQuantity?: number;
  className?: string;
}

export default function BoxContents({
  size = "lg",
  theme = "light",
  lightModuleQuantity = 2,
  className,
}: BoxContentsProps) {
  const items = [
    {
      quantity: 1,
      name: "Main Hub Unit",
      imageUrl: staticFile("main_hub_front_transparent.png"),
      imageClassName: clsx(size === "sm" && "translate-x-[10%]", "scale-90"),
    },
    {
      quantity: lightModuleQuantity,
      name: "Light Modules",
      imageUrl: staticFile("light_module_front_transparent.png"),
      imageClassName: clsx(size === "sm" && "translate-x-[10%]", "scale-85"),
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
      imageUrl: match(theme)
        .with("light", () => staticFile("book_filled_dark.svg"))
        .with("dark", () => staticFile("book_filled_light.svg"))
        .exhaustive(),
      imageClassName: clsx(size === "sm" && "translate-x-[10%]", "scale-75"),
    },
  ];

  return (
    <div
      className={clsx(
        size === "sm" && "w-[800px] gap-20 text-[3rem]",
        size === "lg" && "gap-40 text-7xl",
        "flex flex-col",
        className,
      )}
    >
      {items.map((item) => (
        <div
          className={clsx(
            size === "sm" && "h-[150px]",
            size === "lg" && "h-[300px]",
            theme === "light" && "bg-white/10",
            theme === "dark" && "bg-[#3c3c3c]/90",
            "self-stretch flex items-center border-6 border-white/20 rounded-full",
          )}
        >
          <div
            className={clsx(
              size === "sm" && "h-[120px] ml-[15px]",
              size === "lg" && "h-[240px] ml-[30px]",
              "aspect-square flex items-center justify-center rounded-full bg-background font-semibold",
            )}
          >
            {item.quantity}x
          </div>
          <div
            className={clsx(
              size === "sm" && "ml-14",
              size === "lg" && "ml-30",
              "font-semibold",
            )}
          >
            {item.name}
          </div>
          {item.imageUrl && (
            <div
              className={clsx(
                size === "sm" && "size-[150px]",
                size === "lg" && "size-[300px]",
                "ml-auto mr-[30px]",
              )}
            >
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
  );
}
