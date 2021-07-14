import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 208 28" {...props}>
      <image width="208" height="28" href="/resources/textlogo.png"/>
    </Svg>
  );
};

export default Icon;
