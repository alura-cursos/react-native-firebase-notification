import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#04244F",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingTop: StatusBar.currentHeight || 44,
        paddingHorizontal: 20,
    },
    scroll: {
        width: "100%",
        height: "100%",
        marginTop: 20,
    },
});