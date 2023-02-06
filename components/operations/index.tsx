import { FC, useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { AddMoneySVG, RemoveMoneySVG } from "../svg";
import AddCostModal from "./add-cost-modal";
import AddIncomeModal from "./add-income-modal";
import ListCostModal from "./list-cost-modal";
import ListIncomeModal from "./list-income-modal";

const Operations: FC = () => {
  const [addCostOpen, setAddCostOpen] = useState(false);
  const [addIncomeOpen, setAddIncomeOpen] = useState(false);
  const [listCostOpen, setListCostOpen] = useState(false);
  const [listIncomeOpen, setListIncomeOpen] = useState(false);

  const toggleAddCost = () => setAddCostOpen((open) => !open);
  const toggleAddIncome = () => setAddIncomeOpen((open) => !open);

  const toggleListCost = () => setListCostOpen((open) => !open);
  const toggleListIncome = () => setListIncomeOpen((open) => !open);

  return (
    <View style={operationsStyles.operationsWrapper}>
      <Text>Operações</Text>
      <View style={operationsStyles.operationsContent}>
        <View style={operationsStyles.operationsContentRow}>
          <TouchableHighlight
            onPress={toggleAddIncome}
            style={operationsStyles.operationsItemAddWrapper}
          >
            <View style={operationsStyles.operationsItemAdd}>
              <AddMoneySVG width="40px" height="40px" fill="#040" />
              <Text
                style={{
                  ...operationsStyles.operationsItemTitle,
                  color: "#040",
                }}
              >
                Adicionar Rendimento
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={toggleAddCost}
            style={operationsStyles.operationsItemRemoveWrapper}
          >
            <View style={operationsStyles.operationsItemRemove}>
              <RemoveMoneySVG width="40px" height="40px" fill="#400" />
              <Text
                style={{
                  ...operationsStyles.operationsItemTitle,
                  color: "#400",
                }}
              >
                Adicionar Gasto
              </Text>
            </View>
          </TouchableHighlight>
          <AddCostModal open={addCostOpen} toggle={toggleAddCost} />
          <AddIncomeModal open={addIncomeOpen} toggle={toggleAddIncome} />
        </View>
        <View style={operationsStyles.operationsContentRow}>
          <TouchableHighlight
            onPress={toggleListIncome}
            style={operationsStyles.operationsListAddWrapper}
          >
            <View style={operationsStyles.operationsListAdd}>
              <AddMoneySVG width="40px" height="40px" fill="#004" />
              <Text
                style={{
                  ...operationsStyles.operationsItemTitle,
                  color: "#004",
                }}
              >
                Ver Rendimentos
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={toggleListCost}
            style={operationsStyles.operationsListRemoveWrapper}
          >
            <View style={operationsStyles.operationsListRemove}>
              <RemoveMoneySVG width="40px" height="40px" fill="#440" />
              <Text
                style={{
                  ...operationsStyles.operationsItemTitle,
                  color: "#440",
                }}
              >
                Ver Custos
              </Text>
            </View>
          </TouchableHighlight>
          <ListCostModal open={listCostOpen} toggle={toggleListCost} />
          <ListIncomeModal open={listIncomeOpen} toggle={toggleListIncome} />
        </View>
      </View>
    </View>
  );
};

const operationsStyles = StyleSheet.create({
  operationsWrapper: {
    margin: 30,
  },
  operationsContent: {
    marginTop: 20,
  },
  operationsContentRow: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  operationsItemAddWrapper: {
    width: "45%",
    borderRadius: 15,
    backgroundColor: "#BFB",
  },
  operationsItemAdd: {
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  operationsListAddWrapper: {
    width: "45%",
    borderRadius: 15,
    backgroundColor: "#BBF",
  },
  operationsListAdd: {
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  operationsItemRemoveWrapper: {
    width: "45%",
    borderRadius: 15,
    backgroundColor: "#FBB",
  },
  operationsItemRemove: {
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  operationsListRemoveWrapper: {
    width: "45%",
    borderRadius: 15,
    backgroundColor: "#FFB",
  },
  operationsListRemove: {
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  operationsItemTitle: {
    marginTop: 15,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default Operations;
