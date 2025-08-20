import clsx from "clsx";
import { Img } from "remotion";

interface ProfileCardProps {
  name: string;
  title: string;
  imageUrl: string;
  imageDivClassName: string;
  className?: string;
}

export const ProfileCard = ({
  name,
  title,
  imageUrl,
  imageDivClassName,
  className,
}: ProfileCardProps) => {
  return (
    <div className={clsx("relative w-full pt-40", className)}>
      <div
        className={clsx(
          "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] aspect-square rounded-full border-8 overflow-hidden",
          imageDivClassName,
        )}
      >
        <Img className="w-full h-full object-cover" src={imageUrl} />
      </div>
      <div className="rounded-[30px] pt-[500px]">
        <div className="space-y-6 text-center">
          <div className="font-bold">{name}</div>
          <div className="text-[oklch(0.8_0_0)] font-semibold">{title}</div>
          {/*      <div className="text-3xl text-[oklch(0.7_0_0)]">
            Product Designer who focuses on simplicity & usability.
          </div>*/}
        </div>
      </div>
    </div>
  );
};
