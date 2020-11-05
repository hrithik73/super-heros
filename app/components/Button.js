import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

const AppButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Text style={styles.title} >{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.PRIMARY,
        borderRadius: 25,
        padding: 10,
        marginVertical: 10
    },
    title: {
        textAlign: 'center',
        color: "white",
        textTransform: "uppercase"

    }
})
export default AppButton