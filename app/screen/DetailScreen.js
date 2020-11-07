import React from 'react'
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import AppearanceCard from '../components/AppearanceCard';
import BioCard from '../components/BioCard';
import ConnectionCard from '../components/ConnectionCard';
import PowerStatsCard from '../components/PowerStatsCard';
import WorkCard from '../components/WorkCard';


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

const appearance={
    "response": "success",
    "id": "70",
    "name": "Batman",
    "gender": "Male",
    "race": "Human",
    "height": [
      "6'2",
      "188 cm"
    ],
    "weight": [
      "210 lb",
      "95 kg"
    ],
    "eye-color": "blue",
    "hair-color": "black"
  }
  const work={
    "response": "success",
    "id": "70",
    "name": "Batman",
    "occupation": "Businessman",
    "base": "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
  }

const connection={
    "response": "success",
    "id": "70",
    "name": "Batman",
    "group-affiliation": "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
    "relatives": "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"
  }

const DetailScreen = ({ imageUrl }) => {
    return (
        <View style={styles.container} >
            <View style={styles.imageContainer}  >
            <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
          
           
            <ScrollView style={styles.detailsContainer}  >
                <View style={styles.bioContainer}  >
                    <BioCard bioData={bioData} />
                </View>
               
                <View style={styles.powerStateContainer} >
                    <PowerStatsCard powerState={powerState} />
                </View>
               
                <View style={styles.appearanceCardContainer} >
                    <AppearanceCard appearance={appearance} />
                </View>
                
                <View style={styles.workContainer}  >
                    <WorkCard work={work} />
                </View>

                <View style={styles.connectionCardContainer}>
                    <ConnectionCard connection={connection} />
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
 
    container: {
        flex: 1,
    },
    image: {
        height: 400,
        width: "100%",  
        // overflow:"hidden"
    },
    imageContainer:{      
        height: 350,
    },
    bioContainer: {
        // paddingTop:10,
        paddingBottom:10,
    },
    detailsContainer: {
        flex:1,
        padding: 10,
        // borderRadius:1000
    },
    powerStateContainer:{
        paddingBottom:10,
    },
    appearanceCardContainer:{
        paddingBottom:10
    },
    workContainer:{
        paddingBottom:10
    },
    connectionCardContainer:{
        paddingBottom:10 
    }
})
export default DetailScreen