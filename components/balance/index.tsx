import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const Balance: FC = () => (
  <View>
    <Text style={balanceStyles.title}>Balanço Total</Text>
    <View style={balanceStyles.wrapper}>
      <View style={balanceStyles.leftBar} />
      <View>
        <View style={balanceStyles.totalBalanceWrapper}>
          <Text style={balanceStyles.totalBalance}>489,00 AKZ</Text>
          <View style={balanceStyles.totalRateWrapper}>
            <Text style={balanceStyles.totalRate}>+4.24%</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

const balanceStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
  leftBar: {
    width: 25,
    height: 120,
    marginRight: 30,
    backgroundColor: "#55f",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    margin: 30,
    fontSize: 25,
  },
  totalBalanceWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  totalBalance: {
    fontSize: 25,
  },
  totalRateWrapper: {
    paddingTop: 6,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 6,
    marginLeft: 40,
    borderRadius: 20,
    backgroundColor: "#5c7",
  },
  totalRate: {
    color: "#fff",
  },
});

export default Balance;
