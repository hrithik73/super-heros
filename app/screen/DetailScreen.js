import React from 'react'
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import BioCard from '../components/BioCard';
import PowerStatsCard from '../components/PowerStatsCard';


const powerState = {
    "response": "success",
    "id": "70",
    "name": "Batman",
    "intelligence": "100",
    "strength": "26",
    "speed": "27",
    "durability": "50",
    "power": "47",
    "combat": "100"
}

const bioData = {
    "response": "success",
    "id": "70",
    "name": "Batman",
    "full-name": "Bruce Wayne",
    "alter-egos": "No alter egos found.",
    "aliases": [
        "Insider",
        "Matches Malone"
    ],
    "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
    "first-appearance": "Detective Comics #27",
    "publisher": "DC Comics",
    "alignment": "good"
}
const DetailScreen = ({ imageUrl }) => {
    return (
        <View style={styles.container} >
            <Image source={{ uri: imageUrl }} style={styles.image} />
          
            <ScrollView style={styles.detailsContainer}  >
                <View style={styles.bioContainer}  >
                    <BioCard bioData={bioData} />
                </View>
                <PowerStatsCard powerState={powerState} />
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    bioContainer: {
        paddingTop:10,
        paddingBottom:10,
    },
    container: {
        flex: 1,
        // padding: 1
        // backgroundColor: "black"
    },
    image: {
        height: 300,
        width: "100%",

    },
    detailsContainer: {
        flex: 1,
        // backgroundColor: "black",
        padding: 5,
        paddingTop: 20,
        // justifyContent: "space-between",
    }
})
export default DetailScreen