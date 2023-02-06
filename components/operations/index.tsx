import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AddMoneySVG, RemoveMoneySVG } from "../svg";

const Operations: FC = () => (
  <View style={operationsStyles.operationsWrapper}>
    <Text>Operações</Text>
    <View style={operationsStyles.operationsContent}>
      <View style={operationsStyles.operationsContentRow}>
        <View style={operationsStyles.operationsItemAdd}>
          <AddMoneySVG width="40px" height="40px" fill="#040" />
          <Text
            style={{ ...operationsStyles.operationsItemTitle, color: "#040" }}
          >
            Adicionar Rendimento
          </Text>
        </View>
        <View style={operationsStyles.operationsItemRemove}>
          <RemoveMoneySVG width="40px" height="40px" fill="#400" />
          <Text
            style={{ ...operationsStyles.operationsItemTitle, color: "#400" }}
          >
            Adicionar Gasto
          </Text>
        </View>
      </View>
    </View>
  </View>
);

const operationsStyles = StyleSheet.create({
  operationsWrapper: {
    margin: 30,
  },
  operationsContent: {
    marginTop: 20,
  },
  operationsContentRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  operationsItemAdd: {
    padding: 20,
    width: "45%",
    borderRadius: 15,
    alignItems: "center",
    backgroundColor: "#BFB",
    justifyContent: "space-between",
    // Shadow
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  operationsItemRemove: {
    padding: 20,
    width: "45%",
    borderRadius: 15,
    alignItems: "center",
    backgroundColor: "#FBB",
    boxShadow: "0 0 5px #0007",
    justifyContent: "space-between",
    // Shadow
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  operationsItemTitle: {
    marginTop: 15,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default Operations;
