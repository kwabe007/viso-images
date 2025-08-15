import { Still } from "remotion";
import "./index.css";
import { LightModuleSpecs } from "./specs/LightModuleSpecs";
import { MainModuleSpecs } from "./specs/MainModuleSpecs";
import { MeetTheTeam } from "./meet-the-team/MeetTheTeam";
import { specCompSchema } from "./specs/spec-schema";
import { PackageContents } from "./package-contents/PackageContents";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Still
        id="LightModuleSpecs"
        component={LightModuleSpecs}
        width={1383}
        height={1360}
        schema={specCompSchema}
        defaultProps={{ transparentBg: false }}
      />
      <Still
        id="MainModuleSpecs"
        component={MainModuleSpecs}
        width={1383}
        height={1360}
        schema={specCompSchema}
        defaultProps={{ transparentBg: false }}
      />
      <Still
        id="PackageContents"
        component={PackageContents}
        width={1920}
        height={2350}
        schema={specCompSchema}
        defaultProps={{ transparentBg: true }}
      />
      {/* height for no padding: 2500
          height for padding: 2720 */}
      <Still
        id="MeetTheTeam"
        component={MeetTheTeam}
        width={1080}
        height={2500}
        schema={specCompSchema}
        defaultProps={{ transparentBg: false }}
      />
    </>
  );
};
