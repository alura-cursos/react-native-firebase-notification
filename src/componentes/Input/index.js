import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import estilos from "./estilos";

export function Input({ placeholder, valor, acao }) {
    return (
        <View style={estilos.container}>
            <TextInput
                style={estilos.input}
                placeholder={placeholder}
                value={valor}
                onChangeText={acao}
                placeholderTextColor="#D9D9D9"
            />
            <Icon name="search" size={20} color="#D9D9D9" style={estilos.icon} />
        </View>
    );
}