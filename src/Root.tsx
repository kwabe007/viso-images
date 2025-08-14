import { Still } from "remotion";
import "./index.css";
import { LightModuleSpecs } from "./LightModuleSpecs";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Still
        id="LightModuleSpecs"
        component={LightModuleSpecs}
        width={1383}
        height={900}
      />
    </>
  );
};
