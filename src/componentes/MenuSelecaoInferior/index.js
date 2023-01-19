import { useEffect, useRef, useState } from "react";
import { View, TouchableOpacity, Text, LayoutAnimation, Animated } from "react-native";
import estilos from "./estilos";

export function MenuSelecaoInferior({ mostrarMenu, setMostrarMenu, children }) {
    const slideUp = useRef(new Animated.Value(200)).current;

    function abrirMenu() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        Animated.timing(slideUp, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    }

    function fecharMenu() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        Animated.timing(slideUp, {
            toValue: 200,
            duration: 500,
            useNativeDriver: true
        }).start();
        // after animation is done, set the state to false
        setTimeout(() => {
            setMostrarMenu(false);
        }, 500);
    }

    useEffect(() => {
        if (mostrarMenu) {
            abrirMenu();
        }
    }, [mostrarMenu]);

    return (
        <View style={[estilos.container, { display: mostrarMenu ? "flex" : "none" }]}>
            <TouchableOpacity style={estilos.fundo} onPress={() => fecharMenu()} />
            <Animated.View style={[estilos.menu,
            {
                transform: [{
                    translateY: slideUp
                }]
            }]}>
                {children}
            </Animated.View>
        </View>
    );
}