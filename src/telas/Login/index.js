import { View, ImageBackground, TextInput, TouchableOpacity, Text, Image, Alert } from "react-native";
import estilos from "./estilos";
import fundo from "../../assets/fundo.png";
import { useState, useEffect } from "react";
import { logar } from "../../servicos/auth";
import { auth } from "../../config/firebase";

export default function Login({ navigation }) {
    const [carregando, setCarregando] = useState(true);
    const [dados, setDados] = useState({
        email: '',
        senha: ''
    })
    
    async function logarNaAplicacao() {
        setCarregando(true)
        const resultado = await logar(dados.email, dados.senha)
        if (resultado === "sucesso") {
            navigation.replace('Principal')
        }
        else {
            Alert.alert("Erro ao logar")
        }
        setCarregando(false)
    }

    useEffect(() => {
        const estadoUsuario = auth.onAuthStateChanged( usuario => {
          if(usuario){
            navigation.replace('Principal')
          }
          setCarregando(false)
        })
        return () => estadoUsuario();
    },[])
   
    return (
        <View style={estilos.container}>
            <ImageBackground source={fundo} resizeMode="cover" style={estilos.imagemFundo}>
                <View style={estilos.forms}>
                    <Image source={require("../../assets/logo.png")} style={estilos.imagem} />

                    <TextInput 
                        style={estilos.input} 
                        placeholder="E-mail" 
                        onChangeText={texto => setDados({...dados, email: texto})}
                    />
                    <TextInput
                        style={estilos.input}
                        placeholder="Senha"
                        secureTextEntry={true}
                        onChangeText={texto => setDados({...dados, senha: texto})}
                    />


                    <TouchableOpacity 
                        style={estilos.botao} 
                        onPress={() => logarNaAplicacao()}
                        disabled={carregando}
                    >
                        <Text style={estilos.textoBotao}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}
