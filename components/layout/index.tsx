import { StatusBar } from "expo-status-bar";
import { FC, PropsWithChildren } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <SafeAreaView>
    <StatusBar style="auto" />
    <View style={layoutStyles.wrapper}>{children}</View>
  </SafeAreaView>
);

const layoutStyles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default Layout;
