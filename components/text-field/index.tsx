import { FC } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

const TextField: FC<TextInputProps> = (props) => (
  <View>
    {props.placeholder && <Text style={textFieldStyles.label}>{props.placeholder}</Text>}
    <TextInput style={textFieldStyles.input} {...props} />
  </View>
);

const textFieldStyles = StyleSheet.create({
  label: {
    fontWeight: '700',
  },
  input: {
    padding: 15,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    borderColor: "#0002",
  },
});

export default TextField;
