import { Still } from "remotion";
import "./index.css";
import { LightModuleSpecs } from "./LightModuleSpecs";
import { MainModuleSpecs } from "./MainModuleSpecs";
import { MeetTheTeam } from "./meet-the-team/MeetTheTeam";

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
      {/* height for no padding: 2500
          height for padding: 2720 */}
      <Still
        id="MeetTheTeam"
        component={MeetTheTeam}
        width={1080}
        height={2500}
      />
    </>
  );
};
