import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        zIndex: 1,
    },
    fundo: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
    },
    menu: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: 200,
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#fff',
        transform: [{ translateY: 200 }],
    },
})