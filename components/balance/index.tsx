import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const Balance: FC = () => (
  <View>
    <Text style={balanceStyles.title}>Balanço Total</Text>
    <View style={balanceStyles.wrapper}>
      <View style={balanceStyles.leftBar} />
      <View>
        <View style={balanceStyles.totalBalanceWrapper}>
          <View>
            <Text style={balanceStyles.totalBalance}>489,00 AKZ</Text>
            <View style={balanceStyles.balanceBottom}>
              <Text style={balanceStyles.balanceBottomText}>
                Rendimento {">"}
              </Text>
              <Text>1.950.000,00 AKZ</Text>
            </View>
          </View>
          <View style={balanceStyles.othersWrapper}>
            <View style={balanceStyles.totalRateWrapper}>
              <Text style={balanceStyles.totalRate}>+4.24%</Text>
            </View>
            <View style={balanceStyles.balanceBottom}>
              <Text style={balanceStyles.balanceBottomText}>Gastos {">"}</Text>
              <Text>250.000,00 AKZ</Text>
            </View>
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
    width: "auto",
    paddingTop: 6,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 6,
    borderRadius: 20,
    backgroundColor: "#5c7",
  },
  totalRate: {
    color: "#fff",
  },
  othersWrapper: {
    marginLeft: 40,
    alignItems: "flex-start",
  },
  balanceBottom: {
    marginTop: 20,
  },
  balanceBottomText: {
    marginBottom: 10,
    color: "#aaa",
  },
});

export default Balance;
