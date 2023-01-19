import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#04244F",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: StatusBar.currentHeight || 44,
        paddingHorizontal: 20,
    },
    scroll: {
        width: "100%",
        height: "100%",
        marginTop: 20,
    },
    texto: {
        color: "#D9D9D9",
        fontSize: 18,
        fontWeight: "500",
        marginVertical: 20,
        textAlign: "center",
    },
    imagem: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
});