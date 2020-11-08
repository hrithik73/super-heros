import React from 'react'
import { View, StyleSheet } from 'react-native';

import GlobleStyle from "../config/GlobleStyle"
import Text from "../components/Text"

const BioCard = ({ bioData, name }) => {
    // console.log(bioData)
    return (
        <View style={[GlobleStyle.container, styles.container]} >
            <View style={GlobleStyle.header} >
                <Text style={GlobleStyle.headerText} >Biography</Text>
            </View>
            <View style={GlobleStyle.detailsContainer} >
                <Text>Name:- {name}</Text>
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
        height: 350,
    },
})
export default BioCard
