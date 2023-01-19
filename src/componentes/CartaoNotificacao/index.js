import { View, Text, Image } from "react-native";
import estilos from "./estilos";

export function CartaoNotificacao({ imagem, titulo, descricao }) {
    return (
        <View style={estilos.container} >
            {(imagem != null && imagem != '') && <Image source={{ uri: imagem }} style={estilos.imagem} />}
            
            {imagem == '' && <View style={estilos.imagem}/>}

            <View style={estilos.containerTexto}>
                <Text style={estilos.textoNome}>{titulo}</Text>
                <Text style={estilos.textoDescricao} numberOfLines={2}>{descricao}</Text>
            </View>
        </View>
    );
}