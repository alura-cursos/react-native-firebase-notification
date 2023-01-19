import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: "100%",
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingRight: 40,
        color: "#FFF",
        fontSize: 16,
        borderColor: "#C98CF1",
        borderWidth: 1,
    },
    icon: {
        position: 'absolute',
        right: 20,
    },
});