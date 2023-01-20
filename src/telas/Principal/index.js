import { View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { Cabecalho } from "../../componentes/Cabecalho";
import { CartaoInfo } from "../../componentes/CartaoInfo";
import { NovoPostBotao } from "../../componentes/NovoPostBotao";
import { pegarPostsTempoReal, salvarDados } from "../../servicos/firestore";
import estilos from "./estilos";
import { logout } from "../../servicos/auth";
import messaging from '@react-native-firebase/messaging';
import { auth } from "../../config/firebase";

export default function Principal({ navigation }) {
    const [posts, setPosts] = useState([]);
    const [notifications, setNotifications] = useState([]);

    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    
      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    }

    async function pegarToken(){
        const token = await messaging().getToken()
        const userId = auth.currentUser.uid
        await salvarDados('tokens',{
            userId: userId,
            token: token
        })
        console.log(token)
    }

    useEffect(() => {
        pegarPostsTempoReal(setPosts);

        requestUserPermission();

        pegarToken()

        messaging().onMessage( async mensagem => {
            console.log(mensagem)
            setNotifications(() => [
                ...notifications, mensagem.notification
            ])
        })

        messaging().setBackgroundMessageHandler( async mensagem => {
            console.log('Mensagem em background: ', mensagem)
            setNotifications(() => [
                ...notifications, mensagem.notification
            ])
        })

    }, [])

    function mostrarNotificacoes(){
        navigation.navigate("Notificacoes", { notificacoes: notifications });
        setNotifications([]);
    }

    return (
        <View style={estilos.container}>
            <Cabecalho 
                quantidadeNotificacoes={notifications.length}
                onPress={mostrarNotificacoes}
                logout={() => {
                    logout();
                    navigation.replace("Login");
                }}
            />

            <ScrollView style={estilos.scroll} showsVerticalScrollIndicator={false}>

                {posts?.map((item) => (
                    <CartaoInfo
                        key={item.id}
                        titulo={item.titulo}
                        fonte={item.fonte}
                        descricao={item.descricao}
                        imagem={item.imagemUrl}
                        acao={() => navigation.navigate("Post", { item })}
                    />
                ))}
            </ScrollView>

            <NovoPostBotao acao={() => navigation.navigate("Post")} />
        </View>
    );
}
