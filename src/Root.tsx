import { Still } from "remotion";
import "./index.css";
import { MeetTheTeam } from "./meet-the-team/MeetTheTeam";
import { specCompSchema } from "./specs/spec-schema";
import { PackageContents } from "./package-contents/PackageContents";
import { MainHubSpecifications } from "./specs-2/MainHubSpecifications";
import { LightModuleSpecifications } from "./specs-2/LightModuleSpecifications";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Still
        id="MainHubSpecifications"
        component={MainHubSpecifications}
        width={1920}
        height={1660}
        schema={specCompSchema}
        defaultProps={{ transparentBg: true }}
      />
      <Still
        id="LightModuleSpecifications"
        component={LightModuleSpecifications}
        width={1920}
        height={1660}
        schema={specCompSchema}
        defaultProps={{ transparentBg: false }}
      />
      <Still
        id="PackageContents"
        component={PackageContents}
        width={1920}
        height={2640}
        schema={specCompSchema}
        defaultProps={{ transparentBg: false }}
      />
      {/* height for no padding: 2500
          height for padding: 2720 */}
      <Still
        id="MeetTheTeam"
        component={MeetTheTeam}
        width={1920}
        height={5100}
        schema={specCompSchema}
        defaultProps={{ transparentBg: false }}
      />
    </>
  );
};
