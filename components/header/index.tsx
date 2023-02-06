import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { FC } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { auth } from "../../config/firebase";
import { useUser } from "../../hooks/use-user";
import Logo from "../logo";
import { LogoutSVG } from "../svg";

const Header: FC = () => {
  const { navigate } = useNavigation();

  const { updateUser } = useUser();

  const logout = () => {
    signOut(auth);
    updateUser(null);
    navigate("Login" as never);
  }

  return (
    <View style={headerStyles.wrapper}>
      <View>
        <Logo />
      </View>
      <View style={headerStyles.userWrapper}>
        <View style={headerStyles.user} />
        <TouchableOpacity onPress={logout}>
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
