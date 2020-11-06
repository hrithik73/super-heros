import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';


const AppText = ({ style, children }) => {
    let [fontsLoaded] = useFonts({
        'Product-Sans': require("../assets/fonts/ProductSans-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Text style={[styles.container, style]}>{children}</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Product-Sans',
        fontSize: 18
    }


})

export default AppText;