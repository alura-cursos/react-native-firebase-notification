import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#04244F",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingTop: StatusBar.currentHeight,
        padding: 20,
    },
    containerTitulo: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    titulo: {
        color: "#D9D9D9",
        fontSize: 22,
        fontWeight: "500",
        marginBottom: 10,
        textAlign: "center",
    },
    texto: {
        color: "#D9D9D9",
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 10,
    },
    entrada: {
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
        color: "#04244F",
        fontSize: 16,
        padding: 10,
        width: "100%",
    },
    entradaDescricao: {
        height: 100,
        textAlignVertical: "top",
        textAlign: "left"
    },
    botao: {
        backgroundColor: "#417fea",
        borderRadius: 5,
        padding: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    textoBotao: {
        color: "#D9D9D9",
        fontSize: 16,
        fontWeight: "500",
    },
    imagem: {
        width: '100%',
        height: 200,
        borderRadius: 5,
        marginVertical: 10,
    },
    opcao: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: '#000',
        paddingHorizontal: 20,
        width: '100%',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});