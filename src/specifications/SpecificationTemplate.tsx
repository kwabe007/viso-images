import { Img } from "remotion";
import { Fragment } from "react";
import clsx from "clsx";

interface SpecificationTemplateProps {
  title: string;
  imageUrl: string;
  specs: [string, string][];
  imageClassName?: string;
}

export const SpecificationTemplate = ({
  title,
  specs,
  imageUrl,
  imageClassName,
}: SpecificationTemplateProps) => {
  return (
    <div className={clsx("flex flex-col items-center gap-[80px]")}>
      <h1 className="text-8xl font-medium">{title}</h1>
      <Img
        className={clsx("h-[500px] object-contain", imageClassName)}
        src={imageUrl}
      />
      <div className="self-stretch grid grid-cols-[min-content_1fr] border-t-4 border-t-white text-[4.8rem]">
        {specs.map(([name, value]) => (
          <Fragment key={name}>
            <div className="pr-10 border-r-4 border-r-white py-10 font-bold text-nowrap">
              {name}
            </div>
            <div className="pl-10 py-10">{value}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
