import { View, Image } from "react-native";
import { IconeClicavel } from "../IconeClicavel";
import estilos from "./estilos";

export function Cabecalho({ onPress, quantidadeNotificacoes=0, logout }) {
    return (
        <View style={estilos.container}>
            <IconeClicavel
                iconeNome="bell"
                iconeTamanho={30}
                iconeCor="#fff"
                quantidadeNotificacoes={quantidadeNotificacoes}
                onPress={onPress}
            />
            <Image source={require("../../assets/logo.png")} />

            <IconeClicavel
                iconeNome="log-out"
                iconeTamanho={30}
                iconeCor="#fff"
                onPress={logout}
            />
        </View>
    );
}