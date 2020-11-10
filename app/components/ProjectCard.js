import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from "@expo/vector-icons"

import Text from "../components/Text"

const Card = () => {
    return (
        <View style={styles.card} >
            <View style={styles.detailsContainer} >
                <Text style={styles.title} >
                    An App for super-hero nerds for all the nerdy
                    information about their favorite superheroes from
                    Marvel and DC comics.
                    This is a Part of my Fun Project ! If You Liked the App Please
                    Star the repository on Github.
                </Text>
                <Text style={styles.title} >
                    If You Find any Error or You have any Suggestion Feel Free to
                    contact me on my social media
                </Text>

                <Text style={styles.tag} >Made with <AntDesign
                    name="heart"
                    size={20}
                    style={{ padding: 10 }}
                    color="red"
                /> by Hrithik Singh</Text>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 15,
        height: 300,
        marginBottom: 20,
        padding: 10,
        paddingTop: 40,
        paddingBottom: 40
    },
    detailsContainer: {
        // padding: 20
    },
    title: {
        fontSize: 18,
        marginBottom: 7
    },
    tag: {
        paddingTop: 30,
        fontSize: 20
    }
})
export default Card;


