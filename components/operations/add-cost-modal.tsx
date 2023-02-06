import { ref, set } from "firebase/database";
import { FC } from "react";
import { useForm } from "react-hook-form";
import {
  Modal,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
} from "react-native";
import { database } from "../../config/firebase";
import { IUser } from "../../context/user";
import { useUser } from "../../hooks/use-user";
import Button from "../button";
import TextField from "../text-field";
import { AddModalProps } from "./operations.types";

const AddCostModal: FC<AddModalProps> = ({ open, toggle }) => {
  const { user, updateUser } = useUser();
  const { handleSubmit, setValue } = useForm({
    defaultValues: {
      type: "",
      amount: 0,
    },
  });

  const handleChangeText = (field: "type" | "amount") => (value: string) =>
    setValue(field, value);

  const onSubmit = async ({ type, amount }) => {
    try {
      const newUserData: IUser = {
        ...user,
        costs: [...(user.costs ?? []), { type, amount: +amount }],
      };

      set(ref(database, "users/" + user.uid), newUserData);

      updateUser(newUserData);

      toggle();
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  return (
    <Modal visible={open} transparent={false} animationType={"slide"}>
      <SafeAreaView>
        <View style={addCostStyles.header}>
          <Text style={addCostStyles.headerTitle}>Adicionar novo custo</Text>
          <Button
            onPress={toggle}
            variant="secondary"
            style={addCostStyles.closeButton}
          >
            X
          </Button>
        </View>
        <View style={addCostStyles.formSection}>
          <TextField
            placeholder="Descritivo"
            onChangeText={handleChangeText("type")}
          />
          <TextField
            placeholder="Montante"
            onChangeText={handleChangeText("amount")}
          />
          <Button variant="primary" onPress={handleSubmit(onSubmit)}>
            Adicionar Custo
          </Button>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const addCostStyles = StyleSheet.create({
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
  formSection: {
    marginTop: 20,
    padding: 20,
  },
});

export default AddCostModal;
