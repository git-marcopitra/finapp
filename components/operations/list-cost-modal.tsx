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

const ListCostModal: FC<AddModalProps> = ({ open, toggle }) => {
  const { user } = useUser();

  return (
    <Modal visible={open} transparent={false} animationType={"slide"}>
      <SafeAreaView>
        <View style={listCostStyles.header}>
          <Text style={listCostStyles.headerTitle}>Ver custos</Text>
          <Button
            onPress={toggle}
            variant="secondary"
            style={listCostStyles.closeButton}
          >
            X
          </Button>
        </View>
        <FlatList
          style={listCostStyles.list}
          data={(user?.costs ?? []).map((cost, index) => ({ id: index, ...cost }))}
          renderItem={({ item }) => (
            <View style={listCostStyles.listItem}>
              <Text>{item.type}</Text>
              <Text>{item.amount} AKZ</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </Modal>
  );
};

const listCostStyles = StyleSheet.create({
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

export default ListCostModal;
