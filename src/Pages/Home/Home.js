
import React from "react";
import { SafeAreaView, Text, View, StatusBar } from "react-native";
import { cores } from "./estilos";

console.log();

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: cores.azulC }}>
            <StatusBar backgroundColor={cores.azulC}/>
            <View>
                <Text>Lustreline</Text>
            </View>
        </SafeAreaView>
    );
};

export default Home;

