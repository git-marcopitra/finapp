import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Logo from "../logo";
import { LogoutSVG } from "../svg";

const Header: FC = () => {
  const { navigate } = useNavigation();

  return (
    <View style={headerStyles.wrapper}>
      <View>
        <Logo />
      </View>
      <View style={headerStyles.userWrapper}>
        <View style={headerStyles.user} />
        <TouchableOpacity onPress={() => navigate("Login" as never)}>
          <LogoutSVG />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  wrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  user: {
    width: 30,
    height: 30,
    marginRight: 15,
    borderRadius: 15,
    backgroundColor: "#aaa",
  },
});

export default Header;
