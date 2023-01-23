import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { Text, StyleSheet } from "react-native";
import { Button, Layout } from "../components";
import TextField from "../components/text-field";

const LoginScreen: FC = () => {
  const { navigate } = useNavigation();

  return (
    <Layout>
      <Text style={loginStyles.title}>Login</Text>
      <TextField placeholder="Email" />
      <TextField placeholder="Senha" />
      <Button variant="primary" onPress={() => navigate("Home" as never)}>
        Entrar
      </Button>
      <Button variant="secondary">Registrar</Button>
    </Layout>
  );
};

const loginStyles = StyleSheet.create({
  title: {
    fontSize: 50,
    marginBottom: 50,
  },
});

export default LoginScreen;
