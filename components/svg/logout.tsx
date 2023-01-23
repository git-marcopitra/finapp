import React, { FC } from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

const Logout: FC<SvgProps> = (props) => (
  <Svg width="19" height="18" viewBox="0 0 19 18" fill="none" {...props}>
    <Path
      d="M13.0017 14L11.6267 12.55L14.1767 10H6.00171V8H14.1767L11.6267 5.45L13.0017 4L18.0017 9L13.0017 14ZM0.00170898 18V0H9.00171V2H2.00171V16H9.00171V18H0.00170898Z"
      fill="#55f"
    />
  </Svg>
);

export default Logout;
