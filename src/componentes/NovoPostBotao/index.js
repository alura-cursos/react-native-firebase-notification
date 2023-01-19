import { TouchableOpacity, Text } from "react-native";
import estilos from "./estilos";

export function NovoPostBotao({ acao }) {
    return (
        <TouchableOpacity style={estilos.botao} onPress={acao}>
            <Text style={estilos.textoBotao}>+</Text>
        </TouchableOpacity>
    );
}