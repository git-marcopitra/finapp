import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

const Logo: FC = () => (
  <View style={logoStyles.wrapper}>
    <View style={logoStyles.logo}>
      <Text style={logoStyles.strong}>FIN</Text>
      <View style={logoStyles.subWrapper}>
        <Text style={logoStyles.sub}>app</Text>
      </View>
    </View>
  </View>
);

const logoStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
  logo: {
    borderWidth: 1,
    flexDirection: "row",
    borderColor: "#55f",
  },
  strong: {
    fontSize: 30,
    paddingLeft: 5,
    paddingRight: 5,
    color: "#55f",
    fontWeight: "700",
  },
  subWrapper: {
    borderWidth: 1,
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 3,
    borderColor: "#55f",
    backgroundColor: "#55f",
    justifyContent: "flex-end",
  },
  sub: {
    fontSize: 8,
    color: "#fff",
  },
});

export default Logo;
