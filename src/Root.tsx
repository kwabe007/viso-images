import { Still } from "remotion";
import "./index.css";
import { LightModuleSpecs } from "./LightModuleSpecs";
import { MainModuleSpecs } from "./MainModuleSpecs";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Still
        id="LightModuleSpecs"
        component={LightModuleSpecs}
        width={1383}
        height={1360}
      />
      <Still
        id="MainModuleSpecs"
        component={MainModuleSpecs}
        width={1383}
        height={1360}
      />
    </>
  );
};
