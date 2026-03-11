import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./appStyle";
import { CustomTextInput, NIMInput } from "./input";

export default function Index() {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
    
  const handleChangeMyName = (value: string) => {
    setName(value);
  }
    
  const handleChangeMyNim = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    setNim(numericValue);
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView behavior="position" style={styles.container}>
      <Text  ellipsizeMode="tail" style={styles.text}>{name} - {nim}</Text>
      <CustomTextInput
        input={name}
        onChange={handleChangeMyName}
      />
      <NIMInput
        input={nim.toString()}
        onChange={handleChangeMyNim}
      />
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

