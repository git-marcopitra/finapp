import { FC, PropsWithChildren } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from "react-native";

interface ButtonProps extends PropsWithChildren<TouchableOpacityProps> {
  variant: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({ variant, children, ...props }) => (
  <TouchableOpacity
    style={{
      ...buttonStyles.wrapper,
      backgroundColor: variant === "primary" ? "#55f" : "transparent",
    }}
    {...props}
  >
    <Text
      style={{
        ...buttonStyles.text,
        color: variant === "primary" ? "#fff" : "#55f",
      }}
    >
      {children}
    </Text>
  </TouchableOpacity>
);

const buttonStyles = StyleSheet.create({
  wrapper: {
    padding: 15,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#55f",
  },
  text: {
    fontWeight: "700",
    textAlign: "center",
  },
});

export default Button;
