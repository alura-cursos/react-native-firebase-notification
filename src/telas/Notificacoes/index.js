import { View, ScrollView } from "react-native";
import { CartaoNotificacao } from "../../componentes/CartaoNotificacao";
import estilos from "./estilos";

export default function Notificacoes({ route }) {
    const { notificacoes } = route.params;

    return (
        <View style={estilos.container}>
            <ScrollView style={estilos.scroll} showsVerticalScrollIndicator={false}>
                {notificacoes?.map((item, index) => (
                    <CartaoNotificacao
                        key={index}
                        imagem={item?.android?.imageUrl}
                        titulo={item?.title}
                        descricao={item?.body}
                    />
                ))}
            </ScrollView>
        </View>
    );
}
