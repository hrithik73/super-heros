import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import constant from 'expo-constants'

const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.container, style]} >
            <View style={styles.screen} >{children}</View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: constant.statusBarHeight,
        // backgroundColor: 'yellow',
        flex: 1
    },
    screen: {
        flex: 1
    }
})
//Some Chnages from Part-1-LastSec-4

export default Screen;
