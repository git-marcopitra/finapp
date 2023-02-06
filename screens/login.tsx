import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Text, StyleSheet, View, Alert } from "react-native";
import { Button, Layout } from "../components";
import TextField from "../components/text-field";
import { auth, database } from "../config/firebase";
import { useUser } from "../hooks/use-user";

const LoginScreen: FC = () => {
  const { navigate } = useNavigation();

  const { updateUser, isLogged } = useUser();

  const { setValue, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (isLogged) navigate("Home" as never);
  }, [isLogged]);

  const onSubmit = async ({ email, password }) => {
    try {
      if (!email) throw new Error("Digite um email");
      if (!password) throw new Error("Digite uma palavra-pase");

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userRef = ref(database, "users/" + userCredential.user.uid);

      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        updateUser(data);
      });

      navigate("Home" as never);
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  const handleChangeText = (name: "email" | "password") => (value: string) =>
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
        <Button variant="primary" onPress={handleSubmit(onSubmit)}>
          Entrar
        </Button>
        <Button variant="secondary" onPress={() => navigate("SignUp" as never)}>
          Registrar
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
