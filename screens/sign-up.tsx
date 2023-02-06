import { useNavigation } from "@react-navigation/native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Text, StyleSheet, View, Alert } from "react-native";

import { Button, Layout } from "../components";
import TextField from "../components/text-field";
import { auth, database } from "../config/firebase";
import { IUser } from "../context/user";
import { useUser } from "../hooks/use-user";

const LoginScreen: FC = () => {
  const { navigate } = useNavigation();
  const { updateUser } = useUser();

  const { setValue, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = async ({ email, password, passwordConfirm }) => {
    try {
      if (!email) throw new Error("Digite um email");
      if (!password) throw new Error("Digite uma palavra-pase");
      if (password != passwordConfirm)
        throw new Error("Palavras-passe não coincidem");

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user: IUser = {
        email,
        costs: [],
        incomes: [],
        balance: 0,
        uid: userCredential.user.uid,
      };

      set(ref(database, "users/" + user.uid), user);

      updateUser(user);

      navigate("Home" as never);
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  const handleChangeText =
    (name: "email" | "password" | "passwordConfirm") => (value: string) =>
      setValue(name, value);

  return (
    <Layout>
      <View style={loginStyles.wrapper}>
        <Text style={loginStyles.title}>Login</Text>
        <TextField
          placeholder="Email"
          onChangeText={handleChangeText("email")}
        />
        <TextField
          secureTextEntry
          placeholder="Senha"
          onChangeText={handleChangeText("password")}
        />
        <TextField
          secureTextEntry
          placeholder="Confirmar senha"
          onChangeText={handleChangeText("passwordConfirm")}
        />
        <Button variant="primary" onPress={handleSubmit(onSubmit)}>
          Registrar
        </Button>
        <Button variant="secondary" onPress={() => navigate("Login" as never)}>
          Entrar
        </Button>
      </View>
    </Layout>
  );
};

const loginStyles = StyleSheet.create({
  wrapper: {
    padding: 40,
  },
  title: {
    fontSize: 50,
    marginBottom: 50,
  },
});

export default LoginScreen;
