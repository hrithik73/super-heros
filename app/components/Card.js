import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from "../config/colors";

import Text from "../components/Text"


const Card = ({ imageUrl, title, subtitle, onPress, }) => {
    // console.log(imageUrl)
    return (
        <TouchableWithoutFeedback onPress={onPress} >
            <View style={styles.card} >
                <Image style={styles.image} source={{ uri: imageUrl }} />
                <View style={styles.detailsContainer} >
                    <Text style={styles.title} numberOfLines={1} >{title}</Text>
                    <Text style={styles.subtitle} numberOfLines={2} >{subtitle}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 15,
        // width: '100%',
        // height: 200,
        marginBottom: 20,
        overflow: 'hidden'
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 200,

    },
    subtitle: {
        color: colors.SECONDARY,
        fontWeight: 'bold'
    },
    title: {
        marginBottom: 7
    },
})
export default Card;


