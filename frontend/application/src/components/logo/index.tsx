import React from "react";
import { LogoDot, LogoName, LogoWrapper } from "./style";
import { LogoProps } from "./interface";

const Logo: React.FC<LogoProps> = ({
  type = "dark",
  size = "md",
  justify = "center",
}) => {
  return (
    <LogoWrapper justify={justify}>
      <LogoName type={type} size={size}>
        Telzir
      </LogoName>

      <LogoDot type={type} size={size}>
        .
      </LogoDot>
    </LogoWrapper>
  );
};

export default Logo;
