import { FC } from "react";
import {
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useUser } from "../../hooks/use-user";
import Button from "../button";
import { AddModalProps } from "./operations.types";

const ListIncomeModal: FC<AddModalProps> = ({ open, toggle }) => {
  const { user } = useUser();

  return (
    <Modal visible={open} transparent={false} animationType={"slide"}>
      <SafeAreaView>
        <View style={listIncomeStyles.header}>
          <Text style={listIncomeStyles.headerTitle}>Ver rendimentos</Text>
          <Button
            onPress={toggle}
            variant="secondary"
            style={listIncomeStyles.closeButton}
          >
            X
          </Button>
        </View>
        <FlatList
          style={listIncomeStyles.list}
          data={(user?.incomes ?? []).map((income, index) => ({
            id: index,
            ...income,
          }))}
          renderItem={({ item }) => (
            <View style={listIncomeStyles.listItem}>
              <Text>{item.type}</Text>
              <Text>{item.amount} AKZ</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </Modal>
  );
};

const listIncomeStyles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 20,
  },
  closeButton: {
    marginRight: 20,
  },
  list: {
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  listItem: {
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
    borderColor: "#ddd",
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ListIncomeModal;
