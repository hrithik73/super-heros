import React from 'react'
import { View, StyleSheet } from 'react-native';

import Text from "../components/Text"

const BioCard = ({ bioData }) => {
    console.log(bioData)
    return (
        <View style={styles.container} >
            <View style={styles.header} >
                  <Text style={styles.headerText} >Biography</Text>
            </View>           
        <View style={styles.detailsContainer} >
           <Text>Name:- {bioData.name}</Text>
            <Text>Full-Name:- {bioData["full-name"]}</Text>
            <Text>First Appearance:- {bioData["first-appearance"]}</Text>
            <Text>Place-of-Birth:- {bioData["place-of-birth"]}</Text>
            <Text>Publicer:- {bioData["publisher"]}</Text>
            <Text>Aliases:- {bioData.aliases.join(',')}</Text>
            <Text>Alter Egos:-{bioData["alter-egos"]}</Text>
            <Text>Alignments:{bioData["alignment"]}</Text>
         </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:1,
        backgroundColor: "#DCDCDC",
        height: 320,
        // width: "100%",
        borderRadius: 10,
        marginBottom: 10,

    },
    detailsContainer: {
        justifyContent:"center",
        padding:2,
        paddingLeft:10,
    },
    header:{
        justifyContent:"center",
        alignItems:"center",    
        marginBottom:20,
        // backgroundColor:"red" 
    },
    headerText:{
        fontSize:30,
        fontWeight:"800"
    }
})
export default BioCard
