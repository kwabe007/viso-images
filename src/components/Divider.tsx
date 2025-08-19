import clsx from "clsx";

interface DividerProps {
  color?: "pink" | "blue" | "yellow";
  className?: string;
}

export const Divider = ({ color = "pink", className }: DividerProps) => {
  return (
    <div
      className={clsx(
        color === "pink" && "bg-main-pink",
        color === "blue" && "bg-main-blue",
        color === "yellow" && "bg-main-yellow",
        "h-12",
        className,
      )}
    />
  );
};
