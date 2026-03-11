import { Text, TextInput, View } from "react-native";
import styles from "./appStyle";

interface CustomProps {
    input: string;
    onChange: (val: string) => void;
}

export const CustomTextInput = ({
    input,
    onChange
}: CustomProps) => {
    console.log(input);
    return (
        <View>
            <Text>Name</Text>
            <TextInput
                placeholder="Input your name"
                style={styles.textInput}
                onChangeText={onChange}
            />
        </View>
    );
};

export const NIMInput = ({
    input,
    onChange
}: CustomProps) => {
    console.log(input);
    return (
        <View>
            <Text>NIM</Text>
            <TextInput
                placeholder="Input your NIM/Student ID"
                style={styles.textInput}
                onChangeText={onChange}
                maxLength={11}
                keyboardType="numeric"
            />
        </View>
    );
};
