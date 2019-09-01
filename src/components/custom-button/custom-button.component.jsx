import React from "react";
import { CustomButtonStyle } from "./custom-button.styles";
const CustomButton = ({ children, ...props }) => {
  return <CustomButtonStyle {...props}>{children}</CustomButtonStyle>;
};

export default CustomButton;
