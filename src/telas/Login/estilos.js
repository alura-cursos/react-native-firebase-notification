import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#04244F",
    },
    imagemFundo: {
        flex: 1,
        justifyContent: "center",
    },
    imagem: {
        marginBottom: 20,
        alignSelf: "center",
    },
    forms: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        padding: 20,
    },
    titulo: {
        fontSize: 25,
        color: "#FFF",
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        color: "#000",
        marginBottom: 10,
    },
    botao: {
        backgroundColor: "#7c78e5",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 10,
    },
    textoBotao: {
        fontSize: 16,
        color: "#FFF",
    }
});