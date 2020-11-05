import React, { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native';
import colors from '../config/colors';
import Button from "./Button"


const AppTextInput = ({ onPress }) => {

    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e)
    }


    return (
        <View style={styles.container} >
            <TextInput
                // value={input}
                style={styles.AppTextInput}
                placeholder="Search for ie:Batman"
                placeholderTextColor="black"
                onChangeText={handleChange}
            />
            <Button title="Search" onPress={() => onPress(input)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        padding: 2,

        // flexDirection: 'row',
        width: '100%',
        // alignItems: "center",
        justifyContent: "space-between"
    },
    AppTextInput: {
        backgroundColor: "#e1e1e1",
        height: 55,
        width: "100%",
        // borderBottomWidth: 1,
        // borderBottomColor: "grey",
        borderRadius: 15
    }
})
export default AppTextInput