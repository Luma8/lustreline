import React from "react";
import { SafeAreaView, Text, View, StatusBar, Image, } from "react-native";
import estilos, { cores } from "./estilos";

const Home = () => {
    return (
        <SafeAreaView style={estilos.container}>
            <StatusBar backgroundColor={cores.azulC} />
            <View style={estilos.containerTitulo}>
                <Text style={estilos.titulo}>Lustreline</Text>
                <View style={estilos.conteinerSacola}>
                    <Image source={require('../../../assets/images/icone-sacola.png')} style={estilos.imagem} />
                </View>
            </View>
            <View style={estilos.conteinerDescricao}>
                <View style={estilos.separador}>
                </View>
                <View style={estilos.conteinerTexto}>
                    <Text style={estilos.texto}>Categorias</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;

