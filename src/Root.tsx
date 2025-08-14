import { Still } from "remotion";
import "./index.css";
import { Specifications } from "./Specifications";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Still
        id="Specifications"
        component={Specifications}
        width={1383}
        height={900}
      />
    </>
  );
};
